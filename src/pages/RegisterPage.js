import React from "react";
import * as S from "../components/Styles";
import AuthPage from "../components/AuthPage";

function RegisterPage() {
  return (
    <S.PageWrapper>
      <div>
        <AuthPage isLoginMode={false} />
      </div>
    </S.PageWrapper>
  );
}

export default RegisterPage;
