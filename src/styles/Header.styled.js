import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 1rem;
  position: relative;
`;

export const LogoContainer = styled.div`
  background-image: url(${(props) => props.logo});
  background-repeat: no-repeat;
  background-size: contain;
  height: 50px;
  display: block;
`;

export const SignatureContainer = styled.div`
  position: absolute;
  right: 5%;
  bottom: 50%;
  font-size: 1.125rem;

  @media screen and (max-width: 720px) {
    top: 90%;
    right: 20%;
  }
`;
