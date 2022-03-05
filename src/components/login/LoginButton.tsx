import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { DiGithubBadge } from "react-icons/di";

import { AuthContext } from "@/components/AuthProvider";
import { useAuth } from "@/hooks/useAuth";

const LoginButton = () => {
  const { signInCheck } = useContext(AuthContext);
  const { login } = useAuth();

  return (
    <Button
      leftIcon={<DiGithubBadge color="black" size={25} />}
      bgColor="white"
      color="black"
      isLoading={!signInCheck}
      onClick={login}
    >
      ログイン
    </Button>
  );
};

export default LoginButton;
