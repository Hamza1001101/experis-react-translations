import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Copyright &copy; 2021 All Rights Reserved by
        <a href="/github">Hamza </a>.
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #26272b;
  color: #737373;
  padding: 1rem;
`;
export default Footer;
