import { Button } from '@chakra-ui/button';
import { useHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const ReviewButton = () => {
  const history = useHistory();

  const handleClick = () => {
    const currentPath = history.location.pathname;
    history.push(currentPath + '/review');
  };

  return (
    <BrowserRouter>
      <Button size="lg" w="full" bgColor="teal.500" color="white" onClick={handleClick}>
        REVIEW
      </Button>
    </BrowserRouter>
  );
};

export default ReviewButton;
