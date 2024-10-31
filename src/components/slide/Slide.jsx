import React, { Children } from "react";
import "./Slide.scss";
import Slider from "react-slick";
import { cards } from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CatCard from "../../components/catCard/CatCard";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: "10px",
        fontSize: "24px", // Increase size
        color: "#333", // Customize arrow color
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      👉
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: "10px",
        fontSize: "24px", // Increase size
        color: "#333", // Customize arrow color
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      👈
    </div>
  );
}

export default function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };
  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings}>
          {cards.map((card) => (
            <CatCard item={card} key={card.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
