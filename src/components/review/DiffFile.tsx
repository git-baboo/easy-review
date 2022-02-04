import { Box, Heading, Link, Text, useBoolean } from "@chakra-ui/react";

import DiffRenderer from "@/components/review/DiffRenderer";

type Props = {
  file: any;
  widgets: any;
  addWidget: (
    fileId: string,
    changeKey: string,
    path: string,
    body: string
  ) => void;
};

const DiffFile = ({ file, widgets, addWidget }: Props) => {
  const [isVisibleDelete, setVisibleDelete] = useBoolean(false);
  const [isVisibleLarge, setVisibleLarge] = useBoolean(false);
  let headerPath: string = "";
  let lines: number = 0;

  switch (file.type) {
    case "delete":
      headerPath = file.oldPath;
      break;
    case "add":
    case "modify":
      headerPath = file.newPath;
      break;
    case "rename":
      headerPath = `${file.oldPath} → ${file.newPath}`;
      break;
  }

  for (const hunk of file.hunks) {
    lines += hunk.changes.length;
  }

  const RenameMessage = () => {
    return (
      <Text p={2}>
        ファイル名の変更もしくはファイルの移動が行われました。
        <br />
        内容に変更はありません。
      </Text>
    );
  };

  const BinaryMessage = () => {
    return <Text p={2}>バイナリファイルが更新されました。</Text>;
  };

  const DeleteMessage = () => {
    return (
      <Text p={2}>
        このファイルは削除されました。
        <Link color="blue.500" onClick={setVisibleDelete.on}>
          差分を表示
        </Link>
      </Text>
    );
  };

  const LargeDiffMessage = () => {
    return (
      <Text p={2}>
        このファイルには100行以上の変更があります。
        <Link color="blue.500" onClick={setVisibleLarge.on}>
          差分を表示
        </Link>
      </Text>
    );
  };

  return (
    <Box w="full" boxShadow="base">
      <Heading p={3} size="xs" bgColor="gray.200">
        {headerPath}
      </Heading>
      {file.type === "rename" ? (
        <RenameMessage />
      ) : file.isBinary ? (
        <BinaryMessage />
      ) : file.type === "delete" && !isVisibleDelete ? (
        <DeleteMessage />
      ) : lines >= 100 && !isVisibleLarge ? (
        <LargeDiffMessage />
      ) : (
        <DiffRenderer file={file} widgets={widgets} addWidget={addWidget} />
      )}
    </Box>
  );
};

export default DiffFile;
