import styled from "styled-components";
import UserInfo from "../Login/UserInfo";

const Header = () => {
  return (
    <Wrapper>
      <H1>Lost in Translations</H1>
      <div>
        <UserInfo></UserInfo>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #333;
  width: 100%;
  background-color: #f4d35e;
`;
const H1 = styled.h1`
  color: #fff;
  margin-left: 10rem;
`;
export default Header;
