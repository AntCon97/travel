import React from 'react';
import Slideshow from './../../component/slideshow/slideshow';
import './home.styles.scss';
import pic1 from './../../assets/tours-02.jpg';
import pic2 from './../../assets/tours-01.jpg';
import pic3 from './../../assets/london.jpg';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      card1: false,
      card2: false,
      card3: false,
    };
  }

  render() {
    return (
      <div>
        <Slideshow className='slide' />

        <div className='second'>
          <div className='over'>
            <div className='cc1'>
              <div className='card1'>
                <img src={pic1} alt='pic1' className='pic' />
                <div className='container'>
                  <span>hello</span>
                </div>
              </div>
            </div>
            <div className='card2'>
              <img src={pic2} alt='pic2' className='pic' />
              <div className='container'>
                <span>hello</span>
              </div>
            </div>
            <div className='card3'>
              <img src={pic3} alt='pic3' className='pic' />
              <div className='container'>
                <span>hello</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
