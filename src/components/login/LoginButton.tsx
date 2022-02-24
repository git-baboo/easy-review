import { Button } from "@chakra-ui/react";
import React from "react";
import { DiGithubBadge } from "react-icons/di";

import { useAuth } from "@/hooks/useAuth";
import {
  loginButtonLoadingActions,
  loginButtonLoadingSelectors,
} from "@/store/loginButtonLoadingState";

const LoginButton = () => {
  const isLoginButtonLoading =
    loginButtonLoadingSelectors.useLoginButtonLoading();
  const setIsLoginButtonLoading =
    loginButtonLoadingActions.useUpdateLoginButtonLoading();
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
