import ReactMarkdown from 'react-markdown';

type Props = {
  comment: string;
};

const TimelineItem = ({ comment }: Props) => {
  return <ReactMarkdown>{comment}</ReactMarkdown>;
};

export default TimelineItem;
