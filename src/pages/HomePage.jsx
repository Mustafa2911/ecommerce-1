import React from "react";
import Carousel from "./Carousel";
import HomeTabs from "../Components/Home/Tabs";
export default function HomePage() {
  return (
    <div className='w-full'>
      <Carousel />
      <HomeTabs />
    </div>
  );
}
