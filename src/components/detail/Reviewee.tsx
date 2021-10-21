import { Avatar } from '@chakra-ui/avatar';
import { Flex, Text } from '@chakra-ui/layout';

import { PullRequest } from '@/types/PullRequestType';

type Props = { pullRequest: PullRequest };

const Reviewee = ({ pullRequest }: Props) => {
  return (
    <Flex>
      <Avatar size="2xs" name={pullRequest.userName} src={pullRequest.avatarUrl} />
      <Text size="xs" lineHeight={4}>
        {pullRequest.userName}
      </Text>
    </Flex>
  );
};

export default Reviewee;
