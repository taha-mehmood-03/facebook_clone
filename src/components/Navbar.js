import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaFacebook,
  FaHome,
  FaStore,
  FaUserFriends,
  FaFacebookMessenger,
  FaVideo,
} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import Img7 from "./images/asif image.PNG";
import { auth } from "./Firebase";
import { CgMenuGridR } from "react-icons/cg";
import Img1 from "./images/tahapic.PNG";
import { IoNotifications } from "react-icons/io5";
import { useSelector } from 'react-redux';

import {
  faCommentDots,
  faGears,
  faCircleQuestion,
  faDoorClosed,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const imageUrl = useSelector((state) => state.image.imageUrl);
  const name = useSelector((state) => state.nameChanger.name);
  
  const [buttonEnabled, setButtonEnabled] = React.useState(false);
  const createLogOutBlock = () => {
    if (!buttonEnabled) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  };

  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User signed out successfully.");
      Navigate("/"); // Navigate to the login page
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__One">
        <div className="navbar__one-Fblogo">
          <FaFacebook className="fb_Logo" />
        </div>
        <div className="navbar__one-Search">
          <input
            type="text"
            className="navbar__one-Searchbar"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="navbar__Second">
        <span className="navbar__Second-home">
          <FaHome className="home_Logo" />
        </span>

        <span className="navbar__Second-friends">
          <FaUserFriends className="friends_Logo" />
        </span>

        <span className="navbar__Second-video">
          <FaVideo className="video_Logo" />
        </span>

        <span className="navbar__Second-market">
          <FaStore className="marketPlace_Logo" />
        </span>

        <span className="navbar__Second-groups">
          <FaUserGroup className="groups_Logo" />
        </span>
      </div>

      <div className="navbar__last">
        <span className="navbar__last-Menu">
          <CgMenuGridR className="menu-Logo" />
        </span>

        <span className="navbar__last-Messenger">
          <FaFacebookMessenger className="messenger-Logo" />
        </span>

        <span className="navbar__last-Notifications">
          <IoNotifications className="notification-Logo" />
        </span>

        <span className="navbar__last-Accounts">
          <img
            src={
              imageUrl
            }
            alt="jii"
            className="accounts-Logo"
            onClick={createLogOutBlock}
            onError={(e) => console.error("Error loading image:", e.target.src)}
          />
          {console.log(auth.currentUser)}
        </span>
      </div>
      {buttonEnabled && (
        <div className="logout-Block">
          <div className="side-image2-Name">
            <div className="image1">
              {" "}
              <img
                src={
                 imageUrl
                }
                alt="jii"
                className="tahaimg2"
              />
            </div>
            <span className="name">
              {name}
            </span>
          </div>
          {/* Settings */}
          <div className="side-image2-Name">
            <div className="image1">
              {" "}
              <FontAwesomeIcon icon={faGears} className="tahaimg2" />{" "}
            </div>
            <span className="name">Setiings</span>
          </div>

          {/* Help and Support */}
          <div className="side-image2-Name">
            <div className="image1">
              {" "}
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="tahaimg2"
              />{" "}
            </div>
            <span className="name">Help and Support </span>
          </div>

          {/* Give Feedback */}
          <div className="side-image2-Name">
            <div className="image1">
              {" "}
              <FontAwesomeIcon icon={faCommentDots} className="tahaimg2" />{" "}
            </div>
            <span className="name">Give Feedback</span>
          </div>

          {/* Logout */}
          <div className="side-image2-Name" onClick={handleLogout}>
            <div className="image1">
              {" "}
              <FontAwesomeIcon icon={faDoorClosed} className="tahaimg2" />{" "}
            </div>
            <span className="name">Logout</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
