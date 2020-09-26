import React from 'react';
import Slideshow from './../../component/slideshow/slideshow';

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
        <Slideshow />
      </div>
    );
  }
}

export default HomePage;
