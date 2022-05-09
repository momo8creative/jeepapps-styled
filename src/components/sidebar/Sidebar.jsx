import { useState } from "react";
import {
  SBrand,
  SButtonClose,
  SButtonNav,
  SDevider,
  SMenu,
  SNavLink,
  SNavMenu,
  SSidebar,
  STheme,
  SThemeLabel,
  SThemeToggle,
} from "./SidebarStyles";
import {
  HiMenu,
  HiHome,
  HiPlusSm,
  HiOutlineX,
  HiDatabase,
  HiUser,
} from "react-icons/hi";
import { useThemeContext } from "../../contexts/ThemeContext";

export default function Sidebar() {
  const [showNav, setShowNav] = useState(false);
  const [isLight, setIsLight] = useState(true);

  const { toggleTheme, localTheme } = useThemeContext();

  const toggleNav = () => setShowNav(!showNav);

  const onClickToggle = () => {
    setIsLight(!isLight);
    toggleTheme();
  };

  return (
    <SSidebar>
      <SButtonNav onClick={toggleNav}>
        <HiMenu />
      </SButtonNav>

      <SBrand to="/">Jeep Apps</SBrand>

      <SDevider />

      <SNavMenu open={showNav}>
        <SButtonClose onClick={toggleNav}>
          <HiOutlineX />
        </SButtonClose>
        <SMenu>
          {menuArr.map(({ label, to, icon }, index) => (
            <SNavLink to={to} key={index} onClick={toggleNav}>
              {icon}
              <span>{label}</span>
            </SNavLink>
          ))}

          <SDevider />

          {menuAdminArr.map(({ label, to, icon }, index) => (
            <SNavLink to={to} key={index} onClick={toggleNav}>
              {icon}
              <span>{label}</span>
            </SNavLink>
          ))}
        </SMenu>
      </SNavMenu>

      <SDevider />

      <STheme>
        <SThemeLabel>
          Tema {localTheme == "light" ? "Terang" : "Gelap"}
        </SThemeLabel>
        <SThemeToggle onClick={onClickToggle} light={isLight}></SThemeToggle>
      </STheme>
    </SSidebar>
  );
}

const menuArr = [
  { label: "Beranda", to: "/", icon: <HiHome /> },
  { label: "Tambah Pemakaian", to: "/tambah-pemakaian", icon: <HiPlusSm /> },
  { label: "Pemakaian", to: "/pemakaian", icon: <HiDatabase /> },
];

const menuAdminArr = [
  { label: "Pengguna", to: "/", icon: <HiUser /> },
  { label: "Pengguna", to: "/", icon: <HiUser /> },
];
