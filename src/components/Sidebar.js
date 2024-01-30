import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserGroup,faTv,faBookmark ,faChevronDown ,faUsersLine,faLock, faGears, faClock, faScrewdriverWrench, faCircleInfo} from '@fortawesome/free-solid-svg-icons'

import Img3 from './images/uetmimage.PNG'
import Img1 from './images/tahapic.PNG'
import Img4 from './images/ui ux image.PNG'
import Img5 from './images/batch5image.PNG'
import Img6 from './images/8ballpool-image.PNG'
import Img2 from './images/uetpimage.PNG'
const Sidebar = () => {
const [state,setState] =React.useState([
    { index :1 ,name: 'Friends', icon: faUserGroup, className1: 'side-logo-friends', className2: 'flogo', className3: 'friend-Logo' },
    { index :2 ,name: 'Memories', icon: faClock, className1: 'side-logo-Memories', className2: 'Memories-Logo', className3: 'memo-Logo' },
    { index :3 ,name: 'Saved', icon: faBookmark, className1: 'side-logo-saved', className2: 'saved-Logo', className3: 'saving-Logo' },
    { index :4 ,name: 'Groups', icon: faUsersLine, className1: 'side-logo-Groups', className2: 'groups-Logo', className3: 'g-Logo' },
    { index :5 ,name: 'Videos', icon: faTv, className1: 'side-logo-Videos', className2: 'videos-Logo', className3: 'vid-Logo' },
    { index :6 ,name: 'See more', icon: faChevronDown, className1: 'side-logo-Seemore', className2: 'seemore-Logo', className3: 'see-Logo' },
    { index :7 ,name: 'Tools', icon: faScrewdriverWrench, className1: 'side-logo-Tool', className2: 'Tlogo', className3: 'tool-Logo' },
    { index :8 ,name: 'Settings', icon: faGears, className1: 'side-logo-setting', className2: 'settings-Logo', className3: 'setting-Logo' },
    { index :9 ,name: 'info', icon: faCircleInfo, className1: 'side-info-Logo', className2: 'info-Logo', className3: 'infos-Logo' },
   
    { index :10 ,name: 'Privacy', icon: faLock, className1: 'side-logo-Privacy', className2: 'privacy-Logo', className3: 'lock-Logo' },
   
]);
const togglelist = () => {
  setState(prevState => {
      const seeMoreItem = prevState.find(item => item.name === 'See more');
      if (seeMoreItem) {
          const updatedState = prevState.map(item => {
              if (item.name !== 'See more') {
                  return { ...item, isVisible: seeMoreItem.isOpen && ['Tools', 'Settings', 'Privacy', 'info'].includes(item.name) };
              } else {
                 
              }
          });
          return updatedState;
      }
      return prevState;
  });
};


const [state2,setstate2] =React.useState([
    { index :1 ,name: 'Uet Peshawar', image: Img2, className: 'side-Uet-Name',class2Name: 'Uet-Image', imageClassName: 'u_Image' },
    {index :2 , name: 'UET Mardan', image: Img3, className: 'side-UetM-Name',class2Name: 'Uetm-Image', imageClassName: 'um-Image' },
    {index :3 , name: 'UI / UX Designer & Developer', image: Img4, className: 'side-Ui-Name',class2Name: 'Ui-Image', imageClassName: 'ux-Image' },
    {index :4 , name: 'Software Engineering batch 5', image: Img5, className: 'side-batch5-Name',class2Name: 'batch5-Image', imageClassName: 'B5-Image' },
    {index :5 , name: '8 Ball Pool', image: Img6, className: 'side-8ballpool-Name',class2Name: '8ballpool-Image', imageClassName: 'pool8-Image' },
]);

  return ( 
    <div className='whole-Sidebar' id='for-Scroll'>
                     
                     <div className="side-image1-Name">
                       <div className="image1"> <img src={Img1} alt="haa" className='tahaimg' /></div>
                       <span className="name">Taha Khan</span>
                     </div>
                     {state.map((item, index) => (
  
  (item.name !== 'Tools' && item.name !== 'Settings' && item.name !== 'Privacy' &&  item.name !== 'info') || item.isVisible ?
    <div key={index} className={item.className1} onClick={item.name === 'See more' ? togglelist : null}>
      <div className={item.className2}> <FontAwesomeIcon icon={item.icon} className={item.className3} /></div>
      <span className="name">{item.name}</span>
    </div>
  : null
))}
                     
                   <span className="heading">  Your shortcuts</span>

              { state2.map((things,index) => (
                   <div key={index} className={things.className}>
                       <div className={things.class2Name}> <img src={things.image} alt="okkk" className={things.imageClassName}/></div>
                       <span className="name">{things.name}</span>
                     </div>
                     ))}
                    
                     <div className="links"> 
                    <a href="#">Privacy </a> · <a href="#"> Terms </a> ·  <a href="#">Advertising  </a>· <a href="#"> Ad choices </a>  · <a href="#"> Cookies </a> ·<a href="#"> More </a>  ·<a href="#">Meta © 2023</a> </div>
     </div>
  )
}

export default Sidebar
