import { PlusSquareIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
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
    fieldId: string,
    changeKey: string,
    path: string,
    body: string
  ) => void;
};

type RenderGutterProps = {
  side: string;
  renderDefault: () => number;
  inHoverState: boolean;
};

const DiffRenderer = ({
  fileId,
  oldPath,
  newPath,
  type,
  hunks,
  widgets,
  addWidget,
}: Props) => {
  const [tmpChangeKey, setTmpChangeKey] = useState<string>("");
  const postPath: string = type === "delete" ? oldPath : newPath;

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

  const gutterEvents = useMemo(() => {
    return {
      onClick({ change }: any) {
        const changeKey = getChangeKey(change);
        setTmpChangeKey(changeKey);
      },
    };
  }, []);

  const handleClick = (initText: string) => {
    const changeKey = tmpChangeKey;
    addWidget(fileId, changeKey, postPath, initText);
    setTmpChangeKey("");
  };

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
          <Hunk
            key={hunk.content}
            hunk={hunk}
            gutterEvents={gutterEvents}
            bgColor="red"
          />,
        ])
      }
    </Diff>
  );
};

export default DiffRenderer;
