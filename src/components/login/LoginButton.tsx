import { Button } from "@chakra-ui/react";
import React from "react";
import { DiGithubBadge } from "react-icons/di";

import { useAuth } from "@/hooks/useAuth";

const LoginButton = () => {
  const { login } = useAuth();

  return (
    <Button
      leftIcon={<DiGithubBadge color="black" size={25} />}
      bgColor="white"
      color="black"
      mt={8}
      onClick={login}
    >
      ログイン
    </Button>
  );
};

export default LoginButton;
