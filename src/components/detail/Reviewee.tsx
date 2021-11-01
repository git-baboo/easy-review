import { Avatar } from '@chakra-ui/avatar';
import { Flex, Text } from '@chakra-ui/layout';

import { DetailPullRequestType } from '@/types/PullRequestType';

type Props = { pullRequest: DetailPullRequestType };

const Reviewee = ({ pullRequest }: Props) => {
  return (
    <Flex>
      <Avatar size="2xs" name={pullRequest.userName} src={pullRequest.avatarUrl} />
      <Text fontSize="xs" lineHeight={4}>
        {pullRequest.userName}
      </Text>
    </Flex>
  );
};

export default Reviewee;
