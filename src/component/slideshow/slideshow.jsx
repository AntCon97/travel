import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideshow.styles.scss';
import pic1 from './../../assets/banner-1.jpg';
import pic2 from './../../assets/banner-2.jpg';
import pic3 from './../../assets/banner-3.jpg';
const properties = {
  duration: 5000,
  infinite: true,
  arrows: false,
};

const Slideshow = () => {
  return (
    <div className='under'>
      <Fade {...properties}>
        <div className='each-slide'>
          <img src={pic1} alt='pic1' />
          <div className='imgcent1'>
            <div className='txt1'>FIND THE BEST PLACE FOR YOUR HOLIDAYS</div>
          </div>
        </div>
        <div className='each-slide'>
          <img src={pic2} alt='pic2' />

          <div className='imgcent2'>
            <div className='txt1'>WIDEN YOUR HORIZONS </div>
          </div>
        </div>
        <div className='each-slide'>
          <img src={pic3} alt='pic3' />
          <div className='imgcent3'>
            <div className='txt1'>TRAVEL THE WORLD TODAY</div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
