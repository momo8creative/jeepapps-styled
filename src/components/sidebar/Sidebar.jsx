import React, { useEffect, useState } from "react";
import {
  SBrand,
  SBrandLogo,
  SBrandText,
  SButton,
  SButtonClose,
  SDevider,
  SLinkIcon,
  SLinkLabel,
  SNav,
  SNavLink,
  SSidebar,
} from "./styles";
import logo from "../../assets/jeep1.svg";
import { useLocation } from "react-router-dom";
import {
  HiHome,
  HiPlus,
  HiAdjustments,
  HiMenu,
  HiOutlineX,
} from "react-icons/hi";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  //   useEffect(() => {
  //     toggleNav();
  //   }, [pathname]);
  //
  return (
    <SSidebar>
      <SBrand>
        <SBrandLogo>
          <img src={logo} alt="logo" />
        </SBrandLogo>
        <SBrandText>Jeep Apps</SBrandText>
        <SButton onClick={toggleNav}>
          <HiMenu />
        </SButton>
      </SBrand>

      <SDevider />

      <SNav open={isNavOpen}>
        <SButtonClose onClick={toggleNav}>
          <HiOutlineX />
        </SButtonClose>
        {linkArray.map(({ label, to, icon }, index) => (
          <SNavLink
            to={to}
            key={index}
            active={pathname == to ? "true" : null}
            onClick={toggleNav}
          >
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
          </SNavLink>
        ))}
      </SNav>
    </SSidebar>
  );
}

const linkArray = [
  { label: "Beranda", to: "/", icon: <HiHome /> },
  { label: "Tambah Pemakaian", to: "/tambah-pemakaian", icon: <HiPlus /> },
  { label: "Setting", to: "/setting", icon: <HiAdjustments /> },
];
