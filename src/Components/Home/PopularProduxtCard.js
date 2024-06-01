import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardHeader,
} from "@mui/material";

const ProductData = [
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

const PopularProductCard = () => {
  return (
    <Card className='!shadow-none'>
      <CardHeader
        titleTypographyProps={{ className: "!flex !text-xl !font-bold" }}
        className='!pb-0'
        title='Popular Products'
      />
      <CardContent
        className='flex !overflow-x-auto gap-5'
        sx={{
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {ProductData.map((item, index) => (
          <Card key={index} variant='outlined' sx={{ minWidth: 200 }}>
            <CardActionArea>
              <CardMedia component='img' image={item.image} alt={item.name} />
              <CardContent
                sx={{ padding: 0 }}
                className='flex flex-col !justify-start'
              >
                <Typography
                  sx={{ fontSize: 14 }}
                  color='text.secondary'
                  gutterBottom
                >
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}{" "}
                </Typography>
                <Typography className='text-xl font-bold'>
                  Rs. 456.00
                </Typography>
              </CardContent>
              <CardActions className='!flex !justify-center !p-2'>
                <Button variant='contained' color='error' size='small'>
                  Add to Cart
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default PopularProductCard;
