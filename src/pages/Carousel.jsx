import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import slider from "../helper/slider.json";

function Example(props) {
  return (
    <Carousel indicators={false}>
      {slider.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}
export default Example;
