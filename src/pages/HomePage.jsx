import React from "react";
import Carousel from "./Carousel";
import HomeTabs from "../Components/Home/Tabs";
import CategoryCard from "../Components/Home/CategoryCard";
import BrandCard from "../Components/Home/BrandCard";
import PopularProductCard from "../Components/Home/PopularProduxtCard";
export default function HomePage() {
  return (
    <div className='w-full flex flex-col'>
      <Carousel />
      <div className='flex flex-col p-5 gap-5'>
        <BrandCard />
        <CategoryCard />
        <PopularProductCard />
      </div>
    </div>
  );
}
