import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const MyCarousel = () => (
  <MyCarouselStyle autoPlay infiniteLoop={true} className="_flex">
    <div>
      <img alt="" src="/cat1.png" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="/cat2.png" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src="/cat3.png" />
      <p className="legend">Legend 4</p>
    </div>
  </MyCarouselStyle>
);

export default MyCarousel;

const MyCarouselStyle = styled(Carousel)``;
