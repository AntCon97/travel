import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideshow.styles.scss';
import pic1 from './../../assets/banner-1.jpg';
import pic2 from './../../assets/banner-2.jpg';
import pic3 from './../../assets/banner-3.jpg';

const Slideshow = () => {
  return (
    <div className='under'>
      <Fade>
        <div className='each-slide'>
          <img src={pic1} alt='pic1' />
          <div className='imgcent1'>FIND THE BEST PLACE FOR YOUR HOLIDAYS</div>
        </div>
        <div className='each-slide'>
          <img src={pic2} alt='pic2' />

          <div className='imgcent2'>TRAVEL ALL OVER THE WORLD TODAY</div>
        </div>
        <div className='each-slide'>
          <img src={pic3} alt='pic3' />
          <div className='imgcent3'>WIDEN YOUR HORIZONS NOW</div>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
