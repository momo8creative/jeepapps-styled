import {} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { SLayout } from "./LayoutStyles";

export default function Layout() {
  return (
    <SLayout>
      <Sidebar />
      <Outlet />
    </SLayout>
  );
}
