import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

import { SLayout } from "./styles";

export default function Layout() {
  return (
    <SLayout>
      <Sidebar>Sidebar</Sidebar>
      <Outlet />
    </SLayout>
  );
}
