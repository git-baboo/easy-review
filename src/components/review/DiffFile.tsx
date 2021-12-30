import { PlusSquareIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";

import ReviewPopover from "@/components/review/Popover";

const reactDiffView = require("react-diff-view");
const Diff = reactDiffView.Diff;
const Hunk = reactDiffView.Hunk;
const Decoration = reactDiffView.Decoration;
const getChangeKey = reactDiffView.getChangeKey;

type Props = {
  fileId: string;
  oldPath: string;
  newPath: string;
  type: string;
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
  hunks,
  widgets,
  addWidget,
}: Props) => {
  let headerPath = "";
  switch (type) {
    case "delete":
      headerPath = oldPath;
      break;
    case "insert":
      headerPath = newPath;
      break;
    case "rename":
      headerPath = `${oldPath} → ${newPath}`;
      break;
    default:
      headerPath = newPath;
      break;
  }
  let lines: number = 0;
  for (const hunk of hunks) {
    lines += hunk.changes.length;
  }
  const postPath = type === "delete" ? oldPath : newPath;
  const [tmpChangeKey, setTmpChangeKey] = useState<string>("");
  const [visibleLargeFile, setVisibleLargeFile] = useState<boolean>(false);

  type RenderGutterProps = {
    side: string;
    renderDefault: () => number;
    inHoverState: boolean;
  };

  const toggleVisibilityLargeFile = () => {
    setVisibleLargeFile((prevState) => !prevState);
  };

  const renderGutter = ({
    side,
    renderDefault,
    inHoverState,
  }: RenderGutterProps) =>
    inHoverState && side === "new" ? (
      <ReviewPopover handleClick={handleClick}>
        <PlusSquareIcon boxSize={5} color="white" bgColor="blue.500" />
      </ReviewPopover>
    ) : (
      renderDefault()
    );

  const handleClick = (initText: string) => {
    const changeKey = tmpChangeKey;
    addWidget(fileId, changeKey, postPath, initText);
    setTmpChangeKey("");
  };

  const gutterEvents = useMemo(() => {
    return {
      onClick({ change }: any) {
        const changeKey = getChangeKey(change);
        setTmpChangeKey(changeKey);
      },
    };
  }, []);

  const RenderDiff = () => {
    return (
      <Diff
        viewType="unified"
        diffType={type}
        hunks={hunks}
        widgets={widgets[fileId]}
        renderGutter={renderGutter}
      >
        {(hunks: any) =>
          hunks.map((hunk: any) => [
            <Decoration key={"deco-" + hunk.content}>
              <Box bg="blue.300" p={2}>
                {"　"}
              </Box>
              <Box bg="blue.100" p={2}>
                {hunk.content}
              </Box>
            </Decoration>,
            <Hunk key={hunk.content} hunk={hunk} gutterEvents={gutterEvents} />,
          ])
        }
      </Diff>
    );
  };

  const RenameMessage = () => {
    return (
      <Text p={2}>
        ファイル名の変更もしくはファイルの移動が行われました。
        <br />
        内容に変更はありません。
      </Text>
    );
  };

  const LargeDiffMessage = () => {
    return (
      <Text p={2}>
        このファイルには100行以上の変更があります。
        <Link color="blue.500" onClick={toggleVisibilityLargeFile}>
          差分を表示
        </Link>
      </Text>
    );
  };

  return (
    <Box w="full" boxShadow="base" align="start">
      <Heading p={3} size="xs" bgColor="gray.200">
        {headerPath}
      </Heading>
      {type === "rename" ? (
        <RenameMessage />
      ) : lines >= 100 && !visibleLargeFile ? (
        <LargeDiffMessage />
      ) : (
        <RenderDiff />
      )}
    </Box>
  );
};

export default DiffFile;
