import { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { setUsername, getUsername } from "../../util/Storage";

const login = (username) => {
  try {
    setUsername(username);
  } catch (e) {
    console.error(e);
  }
};

function LoginPage() {
  const [username, setUser] = useState("");
  const isLoggedIn = getUsername("user");

  const onInputChange = (e) => {
    setUser(e.target.value);
  };

  const onLoginClick = () => {
    login(username);
  };

  return (
    <div>
      {isLoggedIn && <Redirect to="/translate" />}

      <LoginWraper>
        <LoginTraingle></LoginTraingle>
        <LoginHeader>Log in</LoginHeader>
        <FormContainer>
          <LoginInput
            type="text"
            placeholder="Username"
            onChange={onInputChange}
            maxLength="16"
          />

          <LoginButton type="submit" onClick={onLoginClick}>
            Login
          </LoginButton>
        </FormContainer>
      </LoginWraper>
    </div>
  );
}
const LoginWraper = styled.article`
  width: 400px;
  font-size: 1rem;
  margin: 0 auto;
`;
const FormContainer = styled.form`
  background: #ebebd3;
  padding: 12px;
`;
const LoginHeader = styled.h1`
  background-color: #586ba4;
  padding: 20px;
  font-size: 1.4em;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;
const LoginTraingle = styled.div`
  width: 0;
  margin-right: auto;
  margin-left: auto;
  border: 12px solid transparent;
  border-bottom-color: #586ba4;
`;

const LoginInput = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 16px;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;

  :hover {
    background: #fff;
    border-color: #bbb;
    color: #555;
  }
`;

const LoginButton = styled.button`
  background-color: #586ba4;
  color: #fff;

  padding: 16px;

  width: 100%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  :hover {
    background-color: #05a;
  }
`;
export default LoginPage;
