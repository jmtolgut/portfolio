import React from "react";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const CarroselSkills = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      className="owl-carousel owl-theme skill-slider"
    >
      <div className="item">
        <img src={meter2} alt="Image1" />
        <h5>Web Development</h5>
      </div>
      <div className="item">
        <img src={meter2} alt="Image2" />
        <h5>Brand Identity</h5>
      </div>
      <div className="item">
        <img src={meter1} alt="Image3" />
        <h5>Designer</h5>
      </div>
    </Carousel>
  );
};
