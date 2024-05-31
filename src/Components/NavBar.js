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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import {
  SearchRounded,
  KeyboardArrowDown,
  LocationOnOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from "../logo.svg";

const drawerWidth = 240;
const navItems = [
  {
    name: "About",
  },
  {
    name: "Contact",
  },
  {
    name: "Category",
    children: ["Category 1", "Category 2", "Category 3"],
  },
  {
    name: "Brands",
    children: ["Brand A", "Brand B", "Brand C"],
  },
];
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&::before": {
    display: "none",
  },
}));
function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("");
  const theme = useTheme();
  const [anchorElCategory, setAnchorElCategory] = React.useState(null);
  const [anchorElBrands, setAnchorElBrands] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavItemClick = (item) => {
    setSelectedItem(item);
    handleDrawerToggle();
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    setAnchorElCategory(null);
    setAnchorElBrands(null);
  };

  const handleMenuClick = (event, menu) => {
    if (menu === "Category") {
      setAnchorElCategory(event.currentTarget);
      setAnchorElBrands(null);
    } else if (menu === "Brands") {
      setAnchorElBrands(event.currentTarget);
      setAnchorElCategory(null);
    }
  };

  const handleClose = (menu) => {
    if (menu === "Category") {
      setAnchorElCategory(null);
    } else if (menu === "Brands") {
      setAnchorElBrands(null);
    }
  };

  const renderNavItems = () => {
    return navItems.map((item, index) => {
      if (item.children) {
        return (
          <div key={index}>
            <Button
              onClick={(e) => handleMenuClick(e, item.name)}
              aria-controls={`menu-${index}`}
              aria-haspopup='true'
              sx={{
                color: "black",
              }}
              endIcon={<KeyboardArrowDown />}
            >
              {item.name}
            </Button>
            <Menu
              id={`menu-${index}`}
              anchorEl={
                item.name === "Category" ? anchorElCategory : anchorElBrands
              }
              open={Boolean(
                item.name === "Category" ? anchorElCategory : anchorElBrands
              )}
              onClose={() => handleClose(item.name)}
            >
              {item.children.map((child, idx) => (
                <MenuItem key={idx} onClick={() => handleMenuItemClick(child)}>
                  {child}
                </MenuItem>
              ))}
            </Menu>
          </div>
        );
      } else {
        return (
          <Button
            key={index}
            sx={{
              color: "black",
            }}
            onClick={() => handleNavItemClick(item.name)}
          >
            {item.name}
          </Button>
        );
      }
    });
  };
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List disablePadding>
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.children ? (
              <>
                <Accordion disableGutters sx={{ boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ListItemText primary={item.name} />
                  </AccordionSummary>
                  <AccordionDetails>
                    <List disablePadding>
                      {item.children.map((child, idx) => (
                        <ListItem key={idx} disablePadding>
                          <ListItemButton
                            onClick={() => handleNavItemClick(child)}
                          >
                            <ListItemText primary={child} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </>
            ) : (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleNavItemClick(item.name)}>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            )}
          </React.Fragment>
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
        color='inherit'
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color='black'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 8, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {renderNavItems()}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex" } }}>
            <img
              src={Logo}
              alt='Logo'
              style={{
                flexGrow: 1,
                marginRight: "16px",
              }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl
              sx={{
                display: { xs: "none", sm: "flex" },
                m: 1,
                width: "25ch",
              }}
              variant='outlined'
            >
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
              <LocationOnOutlined />
            </IconButton>
            <IconButton sx={{ color: "black" }} size='large'>
              <ShoppingCartOutlined />
            </IconButton>
          </Box>
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
