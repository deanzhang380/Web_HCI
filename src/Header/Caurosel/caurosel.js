import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './caurosel.css';
import img1 from './../../Img/img1.jpg'
import img2 from './../../Img/img2.jpg'
import img3 from './../../Img/img3.jpg'
const items = [
  {
    src: img1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    
  },
  {
    src: img2,
    altText: 'Slide 2',
    caption: 'Slide 2'
    
  },
  {
    src: img3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];
var imgStyle = {
    minWidth: "128px",maxWidth: "128px", 
};

const Slider_Show = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img width={2000} height={700} src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel className="carousel-style"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >

      <CarouselIndicators className="caurousel-indi" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slider_Show;