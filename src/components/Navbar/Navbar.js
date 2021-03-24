import React from "react";
// Styles
import {
  StyledNav,
  StyledUl,
  StyledLi,
  StyledLogoContainer,
  StyledProfileLinks
} from "./styles/NavbarStyle";

const Navbar = () => {
  return (
    <StyledNav>
      <div>
        <StyledLogoContainer></StyledLogoContainer>
        <StyledUl>
          <StyledLi>კითხვები</StyledLi>
          <StyledLi>მომხმარებლები</StyledLi>
        </StyledUl>
      </div>
      <div>
        <StyledProfileLinks>
          <button>შესვლა</button>
          <button>რეგისტრაცია</button>
        </StyledProfileLinks>
      </div>
    </StyledNav>
  );
};

export default Navbar;
