import { StackProps, VStack } from "@chakra-ui/layout";
import React from "react";

import DiffFile from "@/components/review/DiffFile";

const reactDiffView = require("react-diff-view");
const parseDiff = reactDiffView.parseDiff;

type CustomProps = {
  diff: string;
  widgets: any;
  addWidget: (
    fileId: string,
    changeKey: string,
    path: string,
    body: string
  ) => void;
};

type Props = StackProps & CustomProps;

const DiffFileList = ({ diff, widgets, addWidget, ...props }: Props) => {
  const parseBinary = (
    diff: string
  ): {
    isBinary?: boolean;
    type?: string;
    oldPath?: string;
    newPath?: string;
  }[] => {
    // trim(): 末尾の改行削除。2行下で lastLine を正しく取得するため
    // "diff --git ..." の行がファイル境界
    const files = diff.trim().split("\ndiff --git");
    return files.map((file) => {
      const lastLine = file.split("\n").slice(-1)[0];
      const words = lastLine.split(" ");
      const info: {
        isBinary?: boolean;
        type?: string;
        oldPath?: string;
        newPath?: string;
      } = {};
      if (words[0] === "Binary") {
        info.isBinary = true;
        const oldPath = words[2];
        const newPath = words[4];
        if (oldPath === "/dev/null") {
          info.type = "add";
          info.oldPath = oldPath;
          info.newPath = newPath.slice(2);
        } else if (newPath === "/dev/null") {
          info.type = "delete";
          info.oldPath = oldPath.slice(2);
          info.newPath = newPath;
        } else {
          info.type = "modify";
          info.oldPath = oldPath.slice(2);
          info.newPath = newPath.slice(2);
        }
      }
      return info;
    });
  };

  const files = parseDiff(diff);
  const binaryFiles = parseBinary(diff);
  for (let i = 0; i < files.length; i++) {
    files[i] = { ...files[i], ...binaryFiles[i] };
  }

  return (
    <VStack {...props}>
      {files.map(
        ({ oldPath, newPath, oldRevision, newRevision, type, hunks }: any) => (
          <DiffFile
            key={oldRevision + "-" + newRevision}
            fileId={oldRevision + "-" + newRevision}
            oldPath={oldPath}
            newPath={newPath}
            type={type}
            hunks={hunks}
            widgets={widgets}
            addWidget={addWidget}
          />
        )
      )}
    </VStack>
  );
};

export default DiffFileList;
