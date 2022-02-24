import { Button } from "@chakra-ui/react";
import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { useRecoilState } from "recoil";

import { useAuth } from "@/hooks/useAuth";
import { loginButtonState } from "@/store/loginButtonState";

const LoginButton = () => {
  const [loginButton, setLoginButton] =
    useRecoilState<boolean>(loginButtonState);
  const { login } = useAuth();

  const handleLogin = () => {
    setLoginButton(true);
    login();
  };

  return (
    <Button
      leftIcon={<DiGithubBadge color="black" size={25} />}
      bgColor="white"
      color="black"
      isLoading={loginButton}
      onClick={handleLogin}
    >
      ログイン
    </Button>
  );
};

export default LoginButton;
