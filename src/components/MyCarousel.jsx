import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { MyCarouselImage } from './MyCarouselImage';

export const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <MyCarouselImage text="First slide"  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <MyCarouselImage text="Second slide"  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <MyCarouselImage text="Third slide"  />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

