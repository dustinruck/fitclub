import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../pictures/dance.jpg";
import image2 from "../pictures/dance.jpg";
import image3 from "../pictures/dance.jpg";

import './Carousel.css';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ height: '85vh' }}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={{ height: '100%', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3 className='margin-middle'>OFFERING OVER 50 CLASSES PER WEEK, ZEN IS THE ONLY STUDIO IN MONTREAL WITH THE GREATEST DIVERSITY OF DANCE, YOGA AND FITNESS CLASSES, ALL IN ONE PLACE!</h3>
          <button className='btn1 margin-middle'>EXPLORE CLASSES</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '85vh' }}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          style={{ height: '100%', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3 className='margin-middle'>WITH VARIOUS CLASSES OFFERED EVERYDAY, YOU ARE BOUND TO FIND SOMETHING MADE FOR YOUR SCHEDUELE. CHECK OUT OUR CALENDAR TO SEE THE LATEST!</h3>
          <button className='btn1 margin-middle'>CALENDAR</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '85vh' }}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          style={{ height: '100%', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3 className='margin-middle'>KEEP UP WITH UPCOMING EVENTS AND SPECIALS BY CHECKING UP ON OUR BLOG FOR WEEKLY UPDAPTES!</h3>
          <button className='btn1 margin-middle'>BLOG</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
