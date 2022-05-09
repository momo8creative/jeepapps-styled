import { Link } from "react-router-dom";
import styled from "styled-components";
import { v } from "../../styles/Variables";

export const SSidebar = styled.div`
  display: flex;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.bg};

  @media (min-width: ${v.laptopWidth}) {
    flex-direction: column;
    width: ${v.sidebarWidth};
  }
`;

export const SDevider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.bg3};
  margin: 0.5rem 0;
`;

export const SBrand = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: 500;
  padding: 0.5rem 0;
`;

export const SButtonNav = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  font-size: 1.2rem;
  opacity: 0.6;
  transition: all 0.2s ease-out;

  :hover {
    background-color: ${({ theme }) => theme.bg3};
    opacity: 1;
  }

  :focus {
    opacity: 1;
    background-color: ${({ theme }) => theme.bg3};
  }

  @media (min-width: ${v.laptopWidth}) {
    display: none;
  }
`;

export const SNavMenu = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: row-reverse;
  align-items: flex-start;
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};

  @media (min-width: ${v.laptopWidth}) {
    display: block;
    position: relative;
    background-color: inherit;
    color: ${({ theme }) => theme.text};
    height: max-content;
  }
`;

export const SButtonClose = styled.button`
  color: red;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;

  :focus {
    color: white;
  }

  @media (min-width: ${v.laptopWidth}) {
    display: none;
  }
`;
export const SMenu = styled.div`
  flex-grow: 1;
  padding: 1rem 0;

  @media (min-width: ${v.laptopWidth}) {
    padding: 0;
  }
`;

export const SNavLink = styled(Link)`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  opacity: 0.8;
  transition: 0.2s ease-in-out;

  :hover {
    opacity: 1;
    background-color: ${({ theme }) => theme.bg2};
  }
  :focus {
    color: ${({ theme }) => theme.primary};
    opacity: 1;
  }

  @media (min-width: ${v.laptopWidth}) {
    font-size: inherit;
    :hover {
      background-color: ${({ theme }) => theme.bg2};
    }
  }
`;

export const STheme = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-left: auto;
  @media (min-width: ${v.laptopWidth}) {
    margin: 0;
  }
`;

export const SThemeLabel = styled.label`
  @media (max-width: ${v.laptopWidth}) {
    display: none;
  }
`;

export const SThemeToggle = styled.button`
  position: relative;
  display: flex;
  width: 36px;
  height: 18px;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.text};
  /* box-shadow: -1px -1px 1px gray; */
  transition: all 0.2s ease-in-out;

  ::before {
    content: "";
    position: absolute;
    top: 3px;
    left: ${({ light }) => (light ? "2px" : "20px")};
    width: 12px;
    height: 12px;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.bg3};
    box-shadow: 1px 1px 2px gray;
  }
`;
