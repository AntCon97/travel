import React from 'react';
import Slideshow from './../../component/slideshow/slideshow';
import Cards from './../../component/cards/cards.components';

import pic1 from './../../assets/index-07.jpg';
import pic2 from './../../assets/index-08.jpg';
import pic3 from './../../assets/index-09.jpg';
import pic4 from './../../assets/index-10.jpg';

import './home.styles.scss';

const HomePage = () => {
  return (
    <div>
      <Slideshow />
      <Cards />
      <div className='back'>
        <div className='next'>
          <div className='separator'>POPULAR PACKAGES</div>
          <div className='packages'>
            <div>
              <div>
                <div className='hpc1'>
                  <img src={pic1} alt='pic1' className='pics' />
                  <div className='box'>
                    <span>
                      Proin gravida nibhvell velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum
                    </span>
                  </div>
                </div>
                <div className='hpc1'>
                  <img src={pic2} alt='pic2' className='pics' />
                  <div className='box'>
                    <span>
                      Proin gravida nibhvell velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className='hpc2'>
                <img src={pic3} alt='pic3' className='pics' />
                <div className='box'>
                  <span>
                    Proin gravida nibhvell velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum
                  </span>
                </div>
              </div>
              <div className='hpc2'>
                <img src={pic4} alt='pic4' className='pics' />
                <div className='box'>
                  <span>
                    Proin gravida nibhvell velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum
                  </span>
                </div>
              </div>
              <div className='back'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
