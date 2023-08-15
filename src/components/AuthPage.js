import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { loginUser, registerUser } from "../api";
import { useUserContext } from "../App";

export default function AuthPage({ isLoginMode = false }) {
  const { setUser } = useUserContext();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [disable, setDisable] = useState(false);
  let navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Заполните все поля");
      return;
    }
    setDisable(true);
    loginUser(email, password)
      .then((data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setDisable(false);
      });
  };

  const handleRegister = async () => {
    if (!email || !password || !repeatPassword) {
      setError("Заполните все поля");
      return;
    }
    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }
    setDisable(true);
    registerUser(email, password)
      .then((data) => {
        navigate("/login");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setDisable(false);
      });
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              {disable ? (
                <p style={{ color: "#000" }}>Выполняется вход...</p>
              ) : (
                <S.PrimaryButton
                  onClick={() => handleLogin({ email, password })}
                >
                  Войти
                </S.PrimaryButton>
              )}

              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              {disable ? (
                <p style={{ color: "#000" }}>Регистрируем пользователя...</p>
              ) : (
                <S.PrimaryButton onClick={handleRegister}>
                  Зарегистрироваться
                </S.PrimaryButton>
              )}
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
