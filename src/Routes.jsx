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
      </Route>

      {/* Not Found */}
      <Route
        path="/*"
        element={
          <>
            <h1>Not Found</h1>
          </>
        }
      />
      {/* <Route path='/' element={}/> */}
    </Routes>
  );
}
