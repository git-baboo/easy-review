import { Box, Heading, Link, Text, useBoolean } from "@chakra-ui/react";

import DiffRenderer from "@/components/review/DiffRenderer";

type Props = {
  fileId: string;
  oldPath: string;
  newPath: string;
  type: "add" | "delete" | "modify" | "rename";
  isBinary: boolean;
  hunks: any;
  widgets: any;
  addWidget: (
    fileId: string,
    changeKey: string,
    path: string,
    body: string
  ) => void;
};

const DiffFile = ({
  fileId,
  oldPath,
  newPath,
  type,
  isBinary,
  hunks,
  widgets,
  addWidget,
}: Props) => {
  const [isVisibleDelete, setVisibleDelete] = useBoolean(false);
  const [isVisibleLarge, setVisibleLarge] = useBoolean(false);
  let headerPath: string = "";
  let lines: number = 0;

  switch (type) {
    case "delete":
      headerPath = oldPath;
      break;
    case "add":
    case "modify":
      headerPath = newPath;
      break;
    case "rename":
      headerPath = `${oldPath} → ${newPath}`;
      break;
  }

  for (const hunk of hunks) {
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
      {type === "rename" ? (
        <RenameMessage />
      ) : isBinary ? (
        <BinaryMessage />
      ) : type === "delete" && !isVisibleDelete ? (
        <DeleteMessage />
      ) : lines >= 100 && !isVisibleLarge ? (
        <LargeDiffMessage />
      ) : (
        <DiffRenderer
          fileId={fileId}
          oldPath={oldPath}
          newPath={newPath}
          type={type}
          hunks={hunks}
          widgets={widgets}
          addWidget={addWidget}
        />
      )}
    </Box>
  );
};

export default DiffFile;
