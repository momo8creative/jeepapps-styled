import styled from "styled-components";
import { btnReset, v } from "../../styles/Variables";
import { Link } from "react-router-dom";

export const SDevider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.bg3};
  margin: 0.5em 0;
`;

export const SSidebar = styled.div`
  background-color: ${({ theme }) => theme.bg2};
  width: ${v.sideBarWidth};

  @media (max-width: ${v.mdWith}) {
    width: 100%;

    ${SDevider} {
      display: none;
    }
  }
`;

export const SBrand = styled.header`
  display: flex;
  gap: 1em;
  align-items: center;
  padding: 1em;
`;

export const SBrandLogo = styled.div`
  img {
    width: 2.5em;
    height: auto;
  }
`;

export const SBrandText = styled.h1``;

export const SButton = styled.button`
  ${btnReset}
  display:flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  font-size: 1.5em;
  width: 1.5em;
  height: 1.5em;
  border-radius: 1em;
  background-color: ${({ theme }) => theme.bg};
  transition: 0.5s ease;

  @media (min-width: ${v.mdWith}) {
    display: none;
  }
`;

export const SButtonClose = styled(SButton)`
  position: absolute;
  top: 0.2em;
  right: 0.2em;
  color: red;
`;

export const SNav = styled.nav`
  @media (max-width: ${v.mdWith}) {
    position: absolute;
    z-index: 1;
    padding: 2em 0;
    top: 0;
    width: 100%;
    height: 100vh;
    font-size: 1.2em;
    background-color: inherit;
    display: ${({ open }) => (open ? "block" : "none")};
  }
`;

export const SNavLink = styled(Link)`
  display: flex;
  gap: 1em;
  padding: 0.5em 1em;
  text-decoration: none;
  color: ${({ active }) =>
    ({ theme }) =>
      active == "true" ? theme.primary : theme.text2};
  :hover {
    background-color: ${({ theme }) => theme.bg3};
    color: ${({ theme }) => theme.text};
    transition: 0.5s ease-in-out;
  }
`;

export const SLinkIcon = styled.span``;

export const SLinkLabel = styled.span``;
