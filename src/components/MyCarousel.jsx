import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { MyCarouselImage, MyCarouselImage2, MyCarouselImage3 } from './MyCarouselImage';

export const MyCarousel = () => {
  return (
    <Carousel className="my-carousel mb-5 ">
      <Carousel.Item interval={2000}>
        <MyCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>Waffle</h3>
          <p>10 cesit meyve den olusan isvicre cikolatali</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <MyCarouselImage2 text="Second slide"  />
        <Carousel.Caption>
      
          <h3>Baklava</h3>
          <p>Antep Fistikli 9 Katli.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={2000}>
        <MyCarouselImage3 text="Third slide"  />
        <Carousel.Caption>
          <h3>Brownie</h3>
          <p>
            Taze findikli ve sicak cikolatali 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

