import { Button } from "@chakra-ui/button";
import { useRouter } from "next/router";

const ReviewButton = () => {
  const router = useRouter();
  const { owner, repo, pullNumber } = router.query;

  const handleClick = () => {
    router.push(`/${owner}/${repo}/${pullNumber}/review`);
  };

  return (
    <Button
      size="lg"
      w="full"
      colorScheme="teal"
      fontWeight="bold"
      onClick={handleClick}
    >
      REVIEW
    </Button>
  );
};

export default ReviewButton;
