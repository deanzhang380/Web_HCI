import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import Form_fast_book from "./../Form_fast_book/form";
import "./caurosel.css";
import img1 from "./../../Img/img1.jpg";
import img2 from "./../../Img/img2.jpg";
import img3 from "./../../Img/img3.jpg";
const items = [
  {
    src: img2,

  },
  {
    src: img1,

  },
  {
    src: img3,
  }
];
var imgStyle = {
  minWidth: "128px",
  maxWidth: "128px"
};

const Slider_Show = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img width={2000} height={870} src={item.src} alt={item.altText} />
        <CarouselCaption
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      {/* <Carousel className="carousel-style div_relative"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators className="caurousel-indi" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel> */}
      <Form_fast_book></Form_fast_book>
      <Carousel
        className="carousel-style div_relative"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          className="caurousel-indi"
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <Form_fast_book></Form_fast_book>
    </div>
  );
};

export default Slider_Show;
