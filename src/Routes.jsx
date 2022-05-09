import {} from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import AddPemakaian from "./pages/pemakaian/AddPemakaian";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="tambah-pemakaian" element={<AddPemakaian />} />
        {/* not found */}
        <Route
          path="/*"
          element={
            <>
              <p>Not Found</p>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
