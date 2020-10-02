import React from 'react';
import SlideShow from './../../component/slideshow/slideshow';
import './contact.styles.scss';

const contact = () => (
  <div>
    <SlideShow />

    <div className='cpage'>
      <div className='cttitle'>Contact Us</div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1595163219!2d-74.12010722712574!3d40.69766333318786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1601650326074!5m2!1sen!2sus'
        width='600'
        height='450'
        frameborder='0'
        title='map'
        allowfullscreen=''
        aria-hidden='false'
        tabindex='0'
        className='map'
      />
      <div className='concontainer'>
        <form>
          <label for='fname'>First Name</label>
          <input
            type='text'
            id='fname'
            name='firstname'
            placeholder='Your name..'
          />

          <label for='lname'>Last Name</label>
          <input
            type='text'
            id='lname'
            name='lastname'
            placeholder='Your last name..'
          />

          <label for='lname'>Email</label>
          <input
            type='text'
            id='Email'
            name='email'
            placeholder='Your email..'
          />

          <label for='subject'>Subject</label>
          <textarea
            id='subject'
            name='subject'
            placeholder='Write something..'
          ></textarea>

          <button className='contbutton'>Submit</button>
        </form>
      </div>
    </div>
  </div>
);

export default contact;
