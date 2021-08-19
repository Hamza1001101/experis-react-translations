import { useState } from "react";

import { getUsername, clearUsername, clearHistory } from "../../util/Storage";
import ProfilePic from "../../assets/ProfilePic.png";
import styled from "styled-components";

const UserInfo = () => {
  const [value, setValue] = useState(false);
  const isLoggedIn = getUsername();

  const onLogoutClick = () => {
    clearUsername();
    clearHistory();
    setValue(!value);
  };

  return (
    <div>
      {isLoggedIn && (
        <>
          <ProfileWrapper>
            <ProfileName href="/profile"> {isLoggedIn}</ProfileName>
            <UserPic src={ProfilePic} alt="profile" />
          </ProfileWrapper>

          <LinkWrapper>
            <a href="/profile">Go Profile</a>
            <a href="/homepage" onClick={onLogoutClick}>
              Logout
            </a>
          </LinkWrapper>
        </>
      )}
    </div>
  );
};

const UserPic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 3px #d2d5d0;
`;
const LinkWrapper = styled.div`
  display: flex;
  width: 10rem;
  justify-content: space-evenly;
  margin-top: 1rem;
`;
const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;
const ProfileName = styled.a`
  font-weight: bold;
  padding-right: 0.5rem;
`;

export default UserInfo;
