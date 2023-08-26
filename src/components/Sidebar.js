import React from "react";
import * as S from "./Styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../App";

function Sidebar({ loaded }) {
  const { user } = useUserContext();
  let navigate = useNavigate();
  const exitFunc = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
        <S.SidebarAvatar>
          <S.SidebarAvatarSvg onClick={exitFunc}>
            <use xlinkHref="/img/icon/sprite.svg#icon-exit"></use>
          </S.SidebarAvatarSvg>
        </S.SidebarAvatar>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <Link to="/category/1">
              <S.SidebarLink>
                {loaded && (
                  <S.SidebarImg
                    src="/img/playlist01.png"
                    alt="day's playlist"
                  />
                )}
              </S.SidebarLink>
            </Link>
          </S.SidebarItem>
          <S.SidebarItem>
            <Link to="/category/2">
              <S.SidebarLink>
                {loaded && (
                  <S.SidebarImg
                    src="/img/playlist02.png"
                    alt="day's playlist"
                  />
                )}
              </S.SidebarLink>
            </Link>
          </S.SidebarItem>
          <S.SidebarItem>
            <Link to="/category/3">
              <S.SidebarLink href="#">
                {loaded && (
                  <S.SidebarImg
                    src="/img/playlist03.png"
                    alt="day's playlist"
                  />
                )}
              </S.SidebarLink>
            </Link>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

export default Sidebar;
