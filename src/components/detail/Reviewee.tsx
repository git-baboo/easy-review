import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';

import { PullRequest } from '@/types/PullRequestType';

type Props = { pullRequest: PullRequest };

const Reviewee = ({ pullRequest }: Props) => {
  return (
    <Flex>
      <Image
        borderRadius="full"
        boxSize="16px"
        src={pullRequest.avatarUrl}
        alt={pullRequest.userName}
      />
      <Text fontSize="xs" lineHeight={4}>
        {pullRequest.userName}
      </Text>
    </Flex>
  );
};

export default Reviewee;
