import React from "react";
import { useState } from "react";
import * as S from "./Styles";
import { Link } from "react-router-dom";

function Nav() {
  const [visible, setVisible] = useState(false);

  const exitFunc = () => {
    localStorage.removeItem("user");
  };

  const toggleVisibility = () => setVisible(!visible);

  return (
    <S.Nav>
      <S.NavLogo>
        <S.LogoImg src="/img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>

      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <Link to="/">
                <S.MenuLink>Главное</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/favourites">
                <S.MenuLink>Мой плейлист</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/login">
                <S.MenuLink onClick={exitFunc}>Выйти</S.MenuLink>
              </Link>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.Nav>
  );
}

export default Nav;
