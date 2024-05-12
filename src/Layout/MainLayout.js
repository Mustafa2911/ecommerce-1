import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
        <Toolbar sx={{ display: { sm: "none" } }} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
