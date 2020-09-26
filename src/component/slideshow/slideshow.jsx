import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideshow.styles.scss';
import pic1 from './../../assets/banner-1.jpg';
import pic2 from './../../assets/banner-2.jpg';
import pic3 from './../../assets/banner-3.jpg';

const Slideshow = () => {
  return (
    <div>
      <Slide easing='ease'>
        <div className='each-slide'>
          <img src={pic1} alt='pic1' />
          <div className='imgcent'>FIND THE BEST PLACE THIS HOLIDAYS</div>
        </div>
        <div className='each-slide'>
          <img src={pic2} alt='pic1' />

          <span>Slide 2</span>
        </div>
        <div className='each-slide'>
          <img src={pic3} alt='pic3' />
          <span>Slide 3</span>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
