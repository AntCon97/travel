import React from 'react';
import Slideshow from './../../component/slideshow/slideshow';
import './home.styles.scss';
import pic1 from './../../assets/tours-02.jpg';
import pic2 from './../../assets/tours-01.jpg';
import pic3 from './../../assets/london.jpg';

class HomePage extends React.Component {
  container = React.createRef();
  constructor() {
    super();
    this.state = {
      card1: false,
      card2: false,
      card3: false,
      open: false,
      htitle: '-- Select Hotel --',
      gtitle: '-- Guests --',
      guests: [
        {
          id: 0,
          title: '1',
          selected: false,
          key: 'guests',
        },
        {
          id: 1,
          title: '2',
          selected: false,
          key: 'guests',
        },
        {
          id: 2,
          title: '3',
          selected: false,
          key: 'guests',
        },
        {
          id: 3,
          title: '4',
          selected: false,
          key: 'guests',
        },
        {
          id: 4,
          title: '5+',
          selected: false,
          key: 'guests',
        },
      ],
      hotels: [
        {
          id: 0,
          title: 'Shangri-La',
          selected: false,
          key: 'hotel',
        },
        {
          id: 1,
          title: 'Chatrium',
          selected: false,
          key: 'hotel',
        },
        {
          id: 2,
          title: 'Four Seasons',
          selected: false,
          key: 'hotel',
        },
        {
          id: 3,
          title: 'Hilton',
          selected: false,
          key: 'hotel',
        },
      ],
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };
  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };
  handleClick1(e) {
    e.preventDefault();
    this.setState({ card1: true });
  }
  handleClick2(e) {
    e.preventDefault();
    this.setState({ card2: true });
  }
  handleClick3(e) {
    e.preventDefault();
    this.setState({ card3: true });
  }

  render() {
    const travel1 = this.state.card1;
    const travel2 = this.state.card2;
    const travel3 = this.state.card3;

    let c1, c2, c3;
    if (travel1 === true) {
      c1 = (
        <div className='cc1'>
          <div className='card1'>
            <div className='ctitle'>Hotel Rental</div>
            <div className='bcontainer' ref={this.container}>
              <button
                type='button'
                class='button'
                onClick={this.handleButtonClick}
              >
                ☰
              </button>
              {this.state.open && (
                <div class='container'>
                  <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                  </ul>
                </div>
              )}
            </div>
            <div className='container'>
              <div className='tc'>
                <span className='cct1'>New York</span>
                <span className='cct2'>$6,600</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (travel1 === false) {
      c1 = (
        <div className='cc1' onClick={this.handleClick1.bind(this)}>
          <div className='card1'>
            <img src={pic1} alt='pic1' className='pic' />
            <div className='container'>
              <div className='tc'>
                <span className='cct1'>Paris</span>
                <span className='cct2'>$4,200</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (travel2 === true) {
      c2 = <span>hello</span>;
    } else if (travel2 === false) {
      c2 = (
        <div className='cc2' onClick={this.handleClick2.bind(this)}>
          <div className='card2'>
            <img src={pic2} alt='pic2' className='pic' />
            <div className='container'>
              <div className='tc'>
                <span className='cct1'>New York</span>
                <span className='cct2'>$6,600</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (travel3 === true) {
      c3 = <span>hello</span>;
    } else if (travel3 === false) {
      c3 = (
        <div className='card3' onClick={this.handleClick3.bind(this)}>
          <img src={pic3} alt='pic3' className='pic' />
          <div className='container'>
            <div className='tc'>
              <span className='cct1'>London</span>
              <span className='cct2'>$5,100</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Slideshow className='slide' />

        <div className='second'>
          <div className='over'>
            {c1}
            {c2}
            {c3}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
