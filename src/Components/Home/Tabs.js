import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Tabs,
  Tab,
  Typography,
  useTheme,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";

const BrandsData = [
  {
    id: 1,
    name: "Dewalt",
    image: "/logo192.png",
  },
  { id: 2, name: "Metabo", image: "/logo192.png" },
  { id: 3, name: "Flute", image: "/logo192.png" },
  { id: 4, name: "Ridgid", image: "/logo192.png" },
  { id: 5, name: "Rubi", image: "/logo192.png" },
  { id: 6, name: "Gazelle", image: "/logo192.png" },
  { id: 7, name: "Klauke", image: "/logo192.png" },
  { id: 8, name: "Extech", image: "/logo192.png" },
  { id: 9, name: "Black+Decker", image: "/logo192.png" },
  { id: 10, name: "Flir", image: "/logo192.png" },
  { id: 11, name: "Groz", image: "/logo192.png" },
  { id: 12, name: "Irwin", image: "/logo192.png" },
];

const CategoryData = [
  {
    id: 1,
    name: "POWER TOOLS",
    image: "/logo192.png",
  },
  { id: 2, name: "POWER TOOLS ACCESSORIES", image: "/logo192.png" },
  { id: 3, name: "TESTING EQUIPMENT", image: "/logo192.png" },
  { id: 4, name: "TILE TOOLS", image: "/logo192.png" },
  { id: 5, name: "ACCESS AND MATERIAL HANDLING", image: "/logo192.png" },
  { id: 6, name: "HAND TOOLS", image: "/logo192.png" },
  { id: 7, name: "PLUMBING TOOLS", image: "/logo192.png" },
  { id: 8, name: "ABRASIVES", image: "/logo192.png" },
  { id: 9, name: "MEASURING AND LAYOUT TOOLS", image: "/logo192.png" },
  { id: 10, name: "SAFETY AND WORKWEAR", image: "/logo192.png" },
  { id: 11, name: "MATERIAL HANDLING EQUIPMENT", image: "/logo192.png" },
  { id: 12, name: "CLEANING & AUTOMOTIVE", image: "/logo192.png" },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HomeTabs = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const renderCards = (data) => (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10'>
      {data.map((item, index) => (
        <Box key={index} className='w-full max-w-xs mx-auto'>
          <Card variant='' className='max-w-full'>
            <CardActionArea>
              <CardMedia component='img' image={item.image} alt={item.name} />
              <Divider />
              <CardContent className='!px-0'>
                <Typography
                  fontWeight='bold'
                  gutterBottom
                  variant='body2'
                  component='div'
                  className='font-bold'
                >
                  {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ))}
    </div>
  );

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs variant='fullWidth' value={value} onChange={handleChange} centered>
        <Tab className='!px-0' label='Browse by Brands' {...a11yProps(0)} />
        <Tab className='!px-0' label='Browse by Category' {...a11yProps(1)} />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {renderCards(BrandsData)}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {renderCards(CategoryData)}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default HomeTabs;
