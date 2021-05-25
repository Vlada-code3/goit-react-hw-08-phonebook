import React from "react";
import { HeaderContainer } from "./HeaderStyed";
import Navigation from "./navigation/Navigation";

const Header = () => {
  return (
    <HeaderContainer>
      <a href="/" className="logo">
        Quik Add
      </a>

      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
