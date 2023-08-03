import React, { useEffect } from "react";
import * as S from "../components/Styles";
import { useState } from "react";
import { Link } from "react-router-dom";

const toggleUser = () => {
  let userCurrent = localStorage.getItem("user");
  if (userCurrent === "true") {
    localStorage.setItem("user", false);
  } else {
    localStorage.setItem("user", true);
  }
};

export const LoginPage = () => {
  const initialValue = localStorage.getItem("user");
  const [loggedIn, setLoggedIn] = useState(initialValue);
  const changeLoggedStatus = () => {
    if (localStorage.getItem("user") === "true") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  const setUserStatus = () => {
    toggleUser();
    changeLoggedStatus();
  };

  useEffect(() => {
    setUserStatus();
  }, []);

  return (
    <S.PageWrapper>
      <div>Login Page</div>
      <button onClick={setUserStatus}>{loggedIn ? "Выйти" : "Войти"}</button>
      <Link style={{ color: "gray" }} to="/register">
        Перейти к регистрации
      </Link>
    </S.PageWrapper>
  );
};
