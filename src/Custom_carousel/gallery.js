import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import Card from './../Main/Card/card'
import 'react-alice-carousel/lib/alice-carousel.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from "reactstrap";

 var control_style={
    position:"relative"
 }

class Gallery extends React.Component {
  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: { 0: { items: 4 } },
    galleryItems: this.galleryItems(),
  }
 
  galleryItems() {
    return Array(7)
      .fill()
      .map((item,i) => <Card></Card>)
  }
 
  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide
    this.setState({ currentIndex })
  }
 
  slideNextPage = () => {
    const {
      itemsInSlide,
      galleryItems: { length },
    } = this.state
    let currentIndex = this.state.currentIndex + itemsInSlide
    if (currentIndex > length) currentIndex = length
 
    this.setState({ currentIndex })
  }
 
  handleOnSlideChange = (event) => {
    const { itemsInSlide, item } = event
    this.setState({ itemsInSlide, currentIndex: item })
  }
 
  render() {
    const { currentIndex, galleryItems, responsive } = this.state
 
    return (
      <div style={{display:"flex"}}>
       
         <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.slidePrevPage}
          className="control_style"
        />
         <AliceCarousel
          items={galleryItems}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
          buttonsDisabled={true}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.slideNextPage}
          className="control_style"
        />
         {/* <button onClick={this.slidePrevPage}>Prev Page</button>
        <button onClick={this.slideNextPage}>Next Page</button> */}

      </div>
    )
  }
}

export default Gallery;