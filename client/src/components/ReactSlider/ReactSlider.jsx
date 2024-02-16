// ReactSlider.js
import React from 'react';
import './ReactSlider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function ReactSlider() {
  return (
    <div className='react-slider'>
      <Carousel autoPlay showThumbs={false} showStatus={false} infiniteLoop>
        <div>
          <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1706382336630_web.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1707978967837_premiereweb.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1706382336630_web.jpg" alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
}

export default ReactSlider;
