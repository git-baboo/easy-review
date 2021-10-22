/* eslint-disable @typescript-eslint/no-explicit-any */
const reactDiffView = require('react-diff-view');
const Diff = reactDiffView.Diff;
const Hunk = reactDiffView.Hunk;
const Decoration = reactDiffView.Decoration;

type Props = {
  oldPath: string;
  newPath: string;
  type: string;
  hunks: any;
};

const DiffFile = ({ oldPath, newPath, type, hunks }: Props) => {
  return (
    <div className="file-diff">
      <header className="diff-header">
        {oldPath === newPath ? oldPath : `${oldPath} -> ${newPath}`}
      </header>
      <Diff viewType="unified" diffType={type} hunks={hunks}>
        {(hunks: any) =>
          hunks.map((hunk: any) => [
            <Decoration key={'deco-' + hunk.content}>
              <div className="hunk-header">{hunk.content}</div>
            </Decoration>,
            <Hunk key={hunk.content} hunk={hunk} />,
          ])
        }
      </Diff>
    </div>
  );
};

export default DiffFile;
