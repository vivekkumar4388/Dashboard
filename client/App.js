import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { CreateTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Navigate, Routes, Outlet } from 'react-router-dom';
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Country from "scenes/country/country.js";
import Navbar from "components/Navbar"
import AuthorList from "scenes/AuthorList/index.js";
import Topic from "scenes/dashboard/Topic.js";
import Region from "scenes/region/region.js";
function App() {

  return (
    <div className="app">
      <BrowserRouter>

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to={"/dashboard"} replace />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/authorlist" element={<AuthorList />}></Route>
            <Route path="/country" element={<Country />}></Route>
            <Route path="/topic" element={<Topic />}></Route>
            <Route path="/region" element={<Region />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </div >
  );
}

export default App;
