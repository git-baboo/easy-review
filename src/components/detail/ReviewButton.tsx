import { Button } from '@chakra-ui/button';
import { useHistory } from 'react-router';

const ReviewButton = () => {
  const history = useHistory();

  const handleClick = () => {
    const currentPath = history.location.pathname;
    history.push(currentPath + '/review');
  };

  return (
    <Button
      size="lg"
      w="full"
      bgColor="teal.500"
      color="white"
      fontWeight="bold"
      onClick={handleClick}
    >
      REVIEW
    </Button>
  );
};

export default ReviewButton;
