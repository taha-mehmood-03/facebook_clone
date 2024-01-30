import React from 'react';

import Img1 from './images/boy1.webp'
import Img2 from './images/boy2.webp';
import Img3 from './images/boy3.webp';
import Img4 from './images/boy4.webp';
import Img5 from './images/boy5.webp';
import Img6 from './images/boy6.webp';
import Img7 from './images/boy7.webp';
import Img8 from './images/boy8.webp';
import Img9 from './images/boy9.webp';
import Img10 from './images/boy10.webp';
import Img11 from './images/boy11.jpg'
import Img12 from './images/boy12.jpg'
import Img13 from './images/boy13.jpg'

const Sidebar2 = () => {
  const [state, setstate] = React.useState([
    { index: 1, name: 'TAHA KHAN', image: Img1 },
    { index: 2, name: 'SAAD AFRIDI', image: Img2 },
    { index: 3, name: 'ASIM KHAN', image: Img3 },
    { index: 4, name: 'ASIF IQABAL', image: Img4 },
    { index: 5, name: 'HARIS HABIB', image: Img5 },
    { index: 6, name: 'SAAD AHMAD', image: Img6 },
    { index: 7, name: 'IDREES', image: Img7 },
    { index: 8, name: 'UZAIR', image: Img8 },
    { index: 9, name: 'ILYAS', image: Img9 },
    { index: 10, name: 'UMAIR', image: Img10 },
    { index: 11, name: 'SOHAIL', image: Img11 },
    { index: 12, name: 'YOUSAF', image: Img12 },
    { index: 13, name: 'HAMMAD', image: Img13 },
    { index: 14, name: 'SAIF', image: Img1 },
    { index: 15, name: 'TAHA KHAN', image: Img2 },
    { index: 16, name: 'SAAD AFRIDI', image: Img8 },
    { index: 17, name: 'ASIM KHAN', image: Img7 },
    { index: 18, name: 'ASIF IQABAL', image: Img6 },
    { index: 19, name: 'HARIS HABIB', image: Img5 },
    { index: 20, name: 'SAAD AHMAD', image: Img4 },
    { index: 21, name: 'IDREES', image: Img3 }
  ]);

  return (
    <div className='whole-Sidebar2' id='for-Scroll'>
      {/* <div className="side-image1-Name">
        <div className="image1"> <img src={Img1} alt="haa" className='tahaimg' /></div>
        <span className="name">Taha Khan</span>
      </div> */}
      {state.map((item, index) => (
        <div key={index} className="side-image2-Name">
          <div className="image1"> <img src={item.image} alt="haa" className='tahaimg2' /></div>
          <span className="name">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar2;