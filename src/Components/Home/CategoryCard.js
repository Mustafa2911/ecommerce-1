import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
} from "@mui/material";

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

const CategoryCard = () => {
  return (
    <Card className='!shadow-none'>
      <CardHeader
        titleTypographyProps={{ className: "!flex !text-xl !font-bold" }}
        className='!pb-0'
        title='Shop by Category'
      />
      <CardContent
        className='flex !overflow-x-auto gap-5'
        sx={{
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {CategoryData.map((item, index) => (
          <Card key={index} variant='' sx={{ minWidth: 175 }}>
            <CardActionArea>
              <CardMedia component='img' image={item.image} alt={item.name} />
              <CardContent sx={{ padding: 0 }}>
                <Typography
                  fontWeight='bold'
                  gutterBottom
                  variant='body2'
                  component='div'
                >
                  {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
