import { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { clearHistory, getHistory, getUsername } from "../../util/Storage";

const Profile = () => {
  const isLoggedIn = getUsername();
  const [value, setValue] = useState(false);
  const histories = getHistory();

  const handleDelete = () => {
    console.log("button clicked handledelete");
    clearHistory();
    setValue(!value);
  };

  const redirect = () => {
    <Redirect to="/homepage" />;
    console.log(<Redirect to="/homepage" />);
  };

  const displayHistory = histories.map((history, id) => (
    <li key={id}> {history} </li>
  ));
  return (
    <ProfileWrapper>
      {!isLoggedIn && <Redirect to="/homepage" />}

      {histories.length === 0 ? (
        <>
          <P>Nothing to show here...</P>
          <RedirectBtn onClick={redirect}>Go to home page</RedirectBtn>
        </>
      ) : (
        <>
          <P>Your last 10 translations... </P>
          <ol style={{ paddingLeft: "3rem", margin: "2rem 0" }}>
            {displayHistory}
          </ol>

          <DeleteButton onClick={handleDelete}>Delete History</DeleteButton>
        </>
      )}
    </ProfileWrapper>
  );
};

const RedirectBtn = styled.button`
  background-color: #ea526f;
  font-size: 1rem;
  color: #fff;
  padding: 20px;
  width: 12rem;
  margin-top: 2rem;
  border-radius: 4px;

  :hover {
    color: #ea526f;
    background-color: #fff;
    border: #ea526f 2px solid;
  }
`;
const ProfileWrapper = styled.div`
  border: 1px solid black;
  width: 30rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 5px;
  background-color: #ebebd3;
  margin: 2rem auto;
`;
const P = styled.p`
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;
const DeleteButton = styled.button`
  align-self: flex-end;
  padding: 14px;

  width: 10rem;
  background-color: red;
  color: #fff;

  font-size: 1rem;

  border-radius: 4px;

  :hover {
    background-color: #fff;
    color: red;
    border: 1px solid red;
  }
`;
export default Profile;
