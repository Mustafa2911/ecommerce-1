import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <Box component='main' className='w-full' sx={{ p: 3 }}>
        <Toolbar />
        <Toolbar sx={{ display: { sm: "none" } }} />
        <Outlet />
        <Toolbar
          className='!min-h-[35px]'
          sx={{ display: { xs: "none", sm: "flex" } }}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
