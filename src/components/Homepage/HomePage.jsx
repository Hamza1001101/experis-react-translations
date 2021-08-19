import LoginPage from "../Login/LoginPage";
import Hero from "../../assets/Hero.png";
import styled from "styled-components";

const HomePage = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f5dd90" }}>
        <Wrapper>
          <HeroImage src={Hero} alt="hero image" />
          <MetaContainer>
            <H1>Lost in Translation</H1>
            <P>Get started </P>
          </MetaContainer>
        </Wrapper>
      </div>
      <LoginPage />
    </>
  );
};

const Wrapper = styled.section`
  padding-left: 10rem;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  background-color: #f4d35e;
`;

const HeroImage = styled.img`
  max-width: 100%;
  width: 20rem;
`;
const MetaContainer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding-left: 5rem;
`;
const H1 = styled.h1`
  font-size: 2.3rem;
  color: #fff;
`;
const P = styled.p`
  font-size: 1.5rem;
  color: #fff;
`;
export default HomePage;
