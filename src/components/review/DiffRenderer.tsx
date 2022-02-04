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
  file: any;
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

const DiffRenderer = ({ file, widgets, addWidget }: Props) => {
  const [tmpChangeKey, setTmpChangeKey] = useState<string>("");
  const postPath: string = file.type === "delete" ? file.oldPath : file.newPath;

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
    addWidget(file.fileId, changeKey, postPath, initText);
    setTmpChangeKey("");
  };

  return (
    <Diff
      viewType="unified"
      diffType={file.type}
      hunks={file.hunks}
      widgets={widgets[file.fileId]}
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
