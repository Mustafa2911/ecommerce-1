import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
} from "@mui/material";

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

const BrandCard = () => {
  return (
    <Card className='!shadow-none !bg-transparent'>
      <CardHeader
        titleTypographyProps={{ className: "!flex !text-xl !font-bold" }}
        className='!pb-0'
        title='Shop by Brands'
      />
      <CardContent
        className='flex !overflow-x-auto gap-5'
        sx={{
          "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Webkit browsers
        }}
      >
        {BrandsData.map((item, index) => (
          <Card
            className='!rounded-full'
            key={index}
            variant=''
            sx={{ minWidth: 150 }}
          >
            <CardActionArea>
              <CardMedia
                className='!rounded-full'
                component='img'
                image={item.image}
                alt={item.name}
              />
            </CardActionArea>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default BrandCard;
