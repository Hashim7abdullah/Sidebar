import React from "react";
import {
  HeaderContainer,
  HamburgerMenu,
  SigninPage,
  SignInButtonStyle,
} from "./style";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const Header = ({ isCollapsed, toggleSidebar }) => {
  return (
    <HeaderContainer isCollapsed={isCollapsed}>
      <HamburgerMenu onClick={toggleSidebar} />
      <SigninPage>
        <SignedOut>
          <SignInButtonStyle/>
            
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </SigninPage>
    </HeaderContainer>
  );
};

export default Header;
