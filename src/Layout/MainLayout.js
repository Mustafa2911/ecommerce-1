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
      <Box
        component='main'
        className='w-full'
        sx={{ backgroundColor: "#efeff4" }}
      >
        <Toolbar className='!min-h-[57px]' />
        <Toolbar sx={{ display: { sm: "none" } }} />
        <Outlet />
        <Toolbar
          className='!min-h-[60px]'
          sx={{ display: { xs: "none", sm: "flex" } }}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
