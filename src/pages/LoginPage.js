import React from "react";
import * as S from "../components/Styles";
import AuthPage from "../components/AuthPage";

export const LoginPage = () => {
  return (
    <S.PageWrapper>
      <AuthPage isLoginMode={true} />
    </S.PageWrapper>
  );
};
