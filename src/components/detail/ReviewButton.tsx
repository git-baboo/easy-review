import { Button } from '@chakra-ui/button';
// import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

type Path = {
  owner: string;
  repo: string;
  pullNumber: string;
};

const ReviewButton = () => {
  const { owner, repo, pullNumber } = useParams<Path>();
  // const history = useHistory();

  const handleClick = () => {
    // history.push(`/${owner}/${repo}/${pullNumber}/review`);
    window.location.href = `/${owner}/${repo}/${pullNumber}/review`;
  };

  return (
    <Button
      size="lg"
      w="full"
      bgColor="teal.500"
      color="white"
      fontWeight="bold"
      onClick={handleClick}
      _hover={{ opacity: 0.9 }}
    >
      REVIEW
    </Button>
  );
};

export default ReviewButton;
