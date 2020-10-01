import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './cards.styles.scss';
import pic1 from './../../assets/tours-02.jpg';
import pic2 from './../../assets/tours-01.jpg';
import pic3 from './../../assets/london.jpg';

class Cards extends React.Component {
  container2 = React.createRef();
  container = React.createRef();
  constructor() {
    super();
    this.state = {
      card1: false,
      card2: false,
      card3: false,
      open: false,
      htitle: '-- Select Hotel --',
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
      startDate: '',
      endDate: '',
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
    if (
      this.container2.current &&
      !this.container2.current.contains(event.target)
    ) {
      this.setState({
        card1: false,
        card2: false,
        card3: false,
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
    this.setState({ card1: true, card2: false, card3: false });
  }
  handleClick2(e) {
    e.preventDefault();
    this.setState({ card1: false, card2: true, card3: false });
  }
  handleClick3(e) {
    e.preventDefault();
    this.setState({ card1: false, card2: false, card3: true });
  }

  handleHClick(e, title) {
    e.preventDefault();
    this.setState({ htitle: title });
  }

  setStartDate(date) {
    this.setState({ startDate: date });
  }
  setEndDate(date) {
    this.setState({ endDate: date });
  }

  render() {
    const travel1 = this.state.card1;
    const travel2 = this.state.card2;
    const travel3 = this.state.card3;
    const hlistItems = this.state.hotels.map((hl) => (
      <li key={hl.id} onClick={(e) => this.handleHClick(e, hl.title)}>
        {hl.title}
      </li>
    ));

    let c1, c2, c3;
    if (travel1 === true) {
      c1 = (
        <div className='cc1' ref={this.container2}>
          <div className='back1'>
            <div className='upperCard'>
              <div className='ctitle c1'>Hotel Rental</div>
              <div className='bcontainer' ref={this.container}>
                <button
                  type='button'
                  className='button'
                  onClick={this.handleButtonClick}
                >
                  {this.state.htitle}
                </button>
                {this.state.open && (
                  <div className='container'>
                    <ul>{hlistItems}</ul>
                  </div>
                )}
              </div>
              <div className='calcontainer'>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={(date) => this.setStartDate(date)}
                  placeholderText='Check-in Date'
                  className='cal'
                />
              </div>
              <div className='calcon1'>
                <DatePicker
                  selected={this.state.endDate}
                  onChange={(date) => this.setEndDate(date)}
                  placeholderText='Check-out Date'
                  className='cal'
                />
              </div>
              <div className='formcontainer'>
                <form className='form'>
                  <input
                    type='text'
                    name='name'
                    className='cform'
                    placeholder='How many guests?'
                  />
                </form>
              </div>
            </div>
            <div className='container1 c1'>
              <div className='tc'>
                <button className='cardButton'>Check Now</button>
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
      c2 = (
        <div className='cc2' ref={this.container2}>
          <div className='back1'>
            <div className='upperCard'>
              <div className='ctitle c2'>Hotel Rental</div>
              <div className='bcontainer' ref={this.container}>
                <button
                  type='button'
                  className='button'
                  onClick={this.handleButtonClick}
                >
                  {this.state.htitle}
                </button>
                {this.state.open && (
                  <div className='container'>
                    <ul>{hlistItems}</ul>
                  </div>
                )}
              </div>
              <div className='calcontainer'>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={(date) => this.setStartDate(date)}
                  placeholderText='Check-in Date'
                  className='cal'
                />
              </div>
              <div className='calcon1'>
                <DatePicker
                  selected={this.state.endDate}
                  onChange={(date) => this.setEndDate(date)}
                  placeholderText='Check-out Date'
                  className='cal'
                />
              </div>
              <div className='formcontainer'>
                <form className='form'>
                  <input
                    type='text'
                    name='name'
                    className='cform'
                    placeholder='How many guests?'
                  />
                </form>
              </div>
            </div>
            <div className='container1 c2'>
              <div className='tc'>
                <button className='cardButton'>Check Now</button>
              </div>
            </div>
          </div>
        </div>
      );
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
      c3 = (
        <div className='cc3' ref={this.container2}>
          <div className='back1'>
            <div className='upperCard'>
              <div className='ctitle c3'>Hotel Rental</div>
              <div className='bcontainer' ref={this.container}>
                <button
                  type='button'
                  className='button'
                  onClick={this.handleButtonClick}
                >
                  {this.state.htitle}
                </button>
                {this.state.open && (
                  <div className='container'>
                    <ul>{hlistItems}</ul>
                  </div>
                )}
              </div>
              <div className='calcontainer'>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={(date) => this.setStartDate(date)}
                  placeholderText='Check-in Date'
                  className='cal'
                />
              </div>
              <div className='calcon1'>
                <DatePicker
                  selected={this.state.endDate}
                  onChange={(date) => this.setEndDate(date)}
                  placeholderText='Check-out Date'
                  className='cal'
                />
              </div>
              <div className='formcontainer'>
                <form className='form'>
                  <input
                    type='text'
                    name='name'
                    className='cform'
                    placeholder='How many guests?'
                  />
                </form>
              </div>
            </div>
            <div className='container1 c3'>
              <div className='tc'>
                <button className='cardButton'>Check Now</button>
              </div>
            </div>
          </div>
        </div>
      );
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
      <div className='second'>
        <div className='over'>
          {c1}
          {c2}
          {c3}
        </div>
      </div>
    );
  }
}

export default Cards;
