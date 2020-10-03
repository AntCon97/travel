import React from 'react';
import Cards from './../../component/cards/cards.components';
import SlideShow from './../../component/slideshow/slideshow';
import './tours.styles.scss';
import pic1 from './../../assets/tours-03.jpg';
import pic2 from './../../assets/tours-04.jpg';
import pic3 from './../../assets/tours-05.jpg';
import pic4 from './../../assets/tours-06.jpg';

const tours = () => (
  <div>
    <div className='timport'>
      <SlideShow />
      <div className='tourCard'>
        <Cards />
      </div>
    </div>
    <div className='tourpage'>
      <div className='tcontainer'>
        <div className='ttitle'>OUR TOURS</div>
        <div className='tr1'>
          <div className='ttr1'>
            <img src={pic1} alt='pic1' className='tpic' />
            <div className='tstxt'>
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.{' '}
              </span>
              <div className='ftxt'>
                <span className='stxt'>Start Date: 28 February 2021</span>
              </div>
            </div>
            <div>
              <div className='bc'>
                <span className='topt'>DURATION: 7 DAYS</span>
                <span className='bott'>$3,100</span>
              </div>
            </div>
          </div>
          <div className='ttr2'>
            <img src={pic2} alt='pic2' className='tpic' />
            <div className='tstxt'>
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.{' '}
              </span>
              <div className='ftxt'>
                <span className='stxt'>Start Date: 28 February 2021</span>
              </div>
            </div>
            <div>
              <div className='bc'>
                <span className='topt'>DURATION: 8 DAYS</span>
                <span className='bott'>$2,200</span>
              </div>
            </div>
          </div>
        </div>
        <div className='tr2'>
          <div className='ttr1'>
            <img src={pic3} alt='pic3' className='tpic' />
            <div className='tstxt'>
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.{' '}
              </span>
              <div className='ftxt'>
                <span className='stxt'>Start Date: 28 February 2021</span>
              </div>
            </div>
            <div>
              <div className='bc'>
                <span className='topt'>DURATION: 5 DAYS</span>
                <span className='bott'>$1,800</span>
              </div>
            </div>
          </div>
          <div className='ttr2'>
            <img src={pic4} alt='pic4' className='tpic' />
            <div className='tstxt'>
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.{' '}
              </span>
              <div className='ftxt'>
                <span className='stxt'>Start Date: 28 February 2021</span>
              </div>
            </div>
            <div>
              <div className='bc'>
                <span className='topt'>DURATION: 9 DAYS</span>
                <span className='bott'>$5,600</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default tours;
