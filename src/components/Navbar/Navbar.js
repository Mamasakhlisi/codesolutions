import React from "react";
// Assets
import logo from '../../assets/png/logo.png'
import personImg from '../../assets/png/person.png'
import questionMarkImg from '../../assets/png/questionmark.png'
// Styles
import {
  StyledNav,
  StyledUl,
  StyledLi,
  StyledLogoContainer,
  StyledProfileLinks,
  StyledSignIn,
  StyledSignUp,
  StyledIcon,
  StyledContainer
} from "./styles/NavbarStyle";

const Navbar = () => {
  return (
      <StyledContainer>
    <StyledNav>
      <div className="first">
        <StyledLogoContainer>
            <img src={logo} />
            <h4><strong>Code</strong> Solutions</h4>
        </StyledLogoContainer>
        <StyledUl>
          <StyledLi><StyledIcon bcolor={"#FFD5C9"}><img src={questionMarkImg}/></StyledIcon> კითხვები</StyledLi>
          <StyledLi><StyledIcon bcolor={"#D5F7FF"}><img src={personImg}/></StyledIcon> მომხმარებლები</StyledLi>
        </StyledUl>
      </div>
      <div className="last">
        <StyledProfileLinks>
          <StyledSignIn>შესვლა</StyledSignIn>
          <StyledSignUp>რეგისტრაცია</StyledSignUp>
        </StyledProfileLinks>
      </div>
    </StyledNav>
              
    </StyledContainer>
  );
};

export default Navbar;
