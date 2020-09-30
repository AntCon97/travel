import React from 'react';
import Slideshow from './../../component/slideshow/slideshow';
import Cards from './../../component/cards/cards.components';

import './home.styles.scss';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Slideshow />
        <Cards />
      </div>
    );
  }
}

export default HomePage;
