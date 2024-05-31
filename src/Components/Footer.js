import * as React from "react";
import { AppBar, Button, ButtonGroup, Toolbar, styled } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function Footer() {
  return (
    <React.Fragment>
      <AppBar
        position='fixed'
        sx={{
          top: "auto",
          bottom: 0,
          height: "35px",
          backgroundColor: "#5d686c",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Toolbar className='!min-h-[35px] flex justify-between'>
          <ButtonGroup variant='text' color='inherit'>
            <Button className='!pr-7'>
              <MailIcon className='!mr-2' />
              lalua@email.com
            </Button>
            <Button className='!px-7'>
              <CallIcon className='!mr-2' />
              9087769879
            </Button>
            <Button className='!pl-7'>
              <WhatsAppIcon className='!mr-2' />
              Sales & Support
            </Button>
          </ButtonGroup>
          <ButtonGroup variant='text' color='inherit'>
            <Button className='!pr-7'>Contact Us</Button>
            <Button className='!pl-7'>Calibration Services</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Offset />
    </React.Fragment>
  );
}
