import React, { FC } from "react";
import styled from "styled-components";
import { Moon, Sun } from "react-feather";

const HeaderWrapper = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 60px;
  padding: 0 16px;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.textHover};
    }
  }
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  outline: 0;

  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h3`
  font-family: "Pacifico";
`;

interface iHeader {
  theme: string;
  toggleTheme: () => void;
}

const Header: FC<iHeader> = ({ theme, toggleTheme }) => (
  <HeaderWrapper>
    <Title>Yummit</Title>
    <Button onClick={toggleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  </HeaderWrapper>
);

export default Header;
