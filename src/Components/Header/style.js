import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { SignInButton } from '@clerk/clerk-react';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: ${({ isCollapsed }) => (isCollapsed ? "100px" : "200px")}; 
  right: 0;
  height: 60px;
  background-color: #222933;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  transition: left 0.5s ease; 
  transition: height 0.3s ease;

  @media (max-width: 768px) {
    left: ${({ isCollapsed }) => (isCollapsed ? "80px" : "160px")}; 
  }
  @media (max-width: 480px) {
    left: ${({ isCollapsed }) => (isCollapsed ? "50px" : "80px")}; 
    height: 45px;
  }
`;


export const HamburgerMenu = styled(AiOutlineMenu)`
  font-size: 24px;
  color: white;
  cursor: pointer;
  /* flex: 1; */
  display: flex;
  align-items: start;
  justify-content: start;
`;

export const SigninPage = styled.div`
 flex: 1;
 display: flex;
 align-items: end;
 justify-content: end;

`

export const SignInButtonStyle = styled(SignInButton)`
 background: none;
 border: none;
 outline: none;
 color: aliceblue;
`

