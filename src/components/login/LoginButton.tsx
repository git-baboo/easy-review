import { Button } from "@chakra-ui/react";
import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { useRecoilState } from "recoil";

import { useAuth } from "@/hooks/useAuth";
import { isLoginButtonLoadingState } from "@/store/isLoginButtonLoadingState";

const LoginButton = () => {
  const [isLoginButtonLoading, setIsLoginButtonLoading] =
    useRecoilState<boolean>(isLoginButtonLoadingState);
  const { login } = useAuth();

  const handleLogin = () => {
    setIsLoginButtonLoading(true);
    login();
  };

  return (
    <Button
      leftIcon={<DiGithubBadge color="black" size={25} />}
      bgColor="white"
      color="black"
      isLoading={isLoginButtonLoading}
      onClick={handleLogin}
    >
      ログイン
    </Button>
  );
};

export default LoginButton;
