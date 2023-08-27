import React from "react";
import { useState } from "react";
import * as S from "./Styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentAlbumName } from "../features/currentAlbum";

function Nav() {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const exitFunc = () => {
    localStorage.removeItem("user");
  };

  const toggleVisibility = () => setVisible(!visible);

  const setMainPlaylist = () => {
    dispatch(setCurrentAlbumName("main"));
  };

  const setFavPlaylist = () => {
    dispatch(setCurrentAlbumName("favourites"));
  };

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
                <S.MenuLink onClick={setMainPlaylist}>Главное</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/favourites">
                <S.MenuLink onClick={setFavPlaylist}>Мой плейлист</S.MenuLink>
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
