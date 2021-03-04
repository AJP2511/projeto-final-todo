import React from "react";
import logo from "../assets/logo.svg";
import {
  HeaderContainer,
  LogoContainer,
  SignatureContainer,
} from "../styles/Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer logo={logo} />
      <SignatureContainer>
        <p>Developed by Allan Johnson</p>
      </SignatureContainer>
    </HeaderContainer>
  );
};

export default Header;
