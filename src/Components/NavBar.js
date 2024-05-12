import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { SearchRounded } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useTheme } from "@mui/material/styles";
import Logo from "./logo.svg";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

const drawerWidth = 240;
const navItems = ["About", "Contact", "Category", "Brands"];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("Home");
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavItemClick = (item) => {
    setSelectedItem(item);
    handleDrawerToggle();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <img src={Logo} alt='Logo' />
      </Box>
      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                backgroundColor:
                  selectedItem === item
                    ? theme.palette.success.main
                    : "transparent",
              }}
              onClick={() => handleNavItemClick(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar
        component='nav'
        className='border-b-[1px]'
        sx={{ boxShadow: "none" }}
        color='transparent'
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color='black'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navItems.map((item) => (
                <Button
                  sx={{
                    color: "black",
                    backgroundColor:
                      selectedItem === item
                        ? "rgba(0, 0, 0, 0.04)"
                        : "transparent",
                  }}
                  key={item}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "inline-flex" }, alignItems: "center" }}>
            <img
              src={Logo}
              alt='Logo'
              style={{
                flexGrow: 1,
                marginRight: "16px",
              }}
            />
          </Box>

          <Box
            sx={{ display: { sm: "flex", xs: "none" }, alignItems: "center" }}
          >
            <FormControl sx={{ m: 1, width: "25ch" }} variant='outlined'>
              <OutlinedInput
                size='small'
                placeholder='Search...'
                id='search'
                type='text'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton className='p-0'>
                      <SearchRounded sx={{ color: "black" }} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <IconButton sx={{ color: "black" }} size='large'>
              <LocationOnOutlinedIcon />
            </IconButton>
            <IconButton sx={{ color: "black" }} size='large'>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Box>
          <IconButton
            sx={{ display: { sm: "none" }, color: "black" }}
            size='large'
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Toolbar>
        <FormControl sx={{ display: { sm: "none" }, m: 1 }} variant='outlined'>
          <OutlinedInput
            placeholder='Search...'
            id='search'
            type='text'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton className='p-0'>
                  <SearchRounded sx={{ color: "black" }} />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default NavBar;
