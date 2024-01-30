import React from 'react'
import { FaFacebook ,FaHome, FaStore, FaUserFriends,FaFacebookMessenger , FaVideo} from "react-icons/fa";
import {  FaUserGroup} from "react-icons/fa6";
import { CgMenuGridR } from "react-icons/cg";
import Img1 from './images/tahapic.PNG'
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbar'>

    <div className="navbar__One">
       <div className="navbar__one-Fblogo">
       <FaFacebook className='fb_Logo'/>
       </div>
       <div className="navbar__one-Search">
        <input type="text" className='navbar__one-Searchbar' placeholder='Search Facebook'/>
       
       </div>
    </div>
    <div className="navbar__Second">
         <span className="navbar__Second-home">
          <FaHome  className='home_Logo'/>
         </span>

         <span className="navbar__Second-friends">
          <FaUserFriends className='friends_Logo'/>
         </span>

         <span className="navbar__Second-video">
          <FaVideo className='video_Logo'/>
         </span>

         <span className="navbar__Second-market">
          <FaStore className='marketPlace_Logo'/>
         </span>

         <span className="navbar__Second-groups">
          <FaUserGroup className='groups_Logo'/>
         </span>
    </div>

        <div className="navbar__last">
        <span className="navbar__last-Menu">
        <CgMenuGridR className='menu-Logo'/>
        </span>

        <span className="navbar__last-Messenger">
        <FaFacebookMessenger className='messenger-Logo'/>
        </span>

        <span className="navbar__last-Notifications">
       <IoNotifications className='notification-Logo'/>
        </span>

        <span className="navbar__last-Accounts">
        <img src={Img1} alt='jii' className='accounts-Logo'/>   
        </span>




       </div>

    </div>
  )
}

export default Navbar