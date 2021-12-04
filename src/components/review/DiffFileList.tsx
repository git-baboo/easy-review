import { StackProps, VStack } from "@chakra-ui/layout";
import React from "react";

import DiffFile from "@/components/review/DiffFile";

const reactDiffView = require("react-diff-view");
const parseDiff = reactDiffView.parseDiff;

type CustomProps = {
  diff: string;
  widgets: any;
  addWidget: any;
};

type Props = StackProps & CustomProps;

const DiffFileList = ({ diff, widgets, addWidget, ...props }: Props) => {
  const files = parseDiff(diff);

  return (
    <VStack {...props}>
      {files.map(
        ({ oldPath, newPath, oldRevision, newRevision, type, hunks }: any) => (
          <DiffFile
            key={oldRevision + "-" + newRevision}
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
