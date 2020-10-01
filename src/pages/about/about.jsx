import React from 'react';
import './about.styles.scss';
import SlideShow from './../../component/slideshow/slideshow';
import pic from './../../assets/tva.jpg';

const about = () => (
  <div>
    <SlideShow />
    <div>
      <div className='title'>WHAT WE DO</div>
      <div>
        <img src={pic} alt='pic' className='apic' />
        <div className='test'>
          <div className='testtxt'>Testimonials</div>
          <div class='ttxt'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim
            assum.
          </div>
        </div>
      </div>
      <div className='space'></div>
    </div>
  </div>
);

export default about;
