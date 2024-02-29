import React from "react";
import Img1 from "./images/tahapic.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faPhotoFilm,
  faFaceGrinWide,
} from "@fortawesome/free-solid-svg-icons";
import Img7 from "./images/asif image.PNG"
import { useSelector, useDispatch } from "react-redux";
import { fetchImageUrl } from "./actions/actions";
import { auth } from "./Firebase";
const Create = ({ createDiv }) => {
  const imageUrl = useSelector((state) => state.image.imageUrl);
  const name = useSelector(state => state.nameChanger.name);
  return (
    <div className="create-Div">
      <div className="image-Input">
        <div className="image">
      <img src={imageUrl} alt="pic" className="image-Ofme" />
        </div>
        <input
          type="text"
          readOnly
          className="input-Block"
          placeholder={`What's on your mind, ${name}?`}
          onClick={createDiv}
        />
      </div>
     
 <hr className="line-Seg"/>
      <div className="three-Icons">
        <div className="icon-Heading">
          <FontAwesomeIcon icon={faVideo} className="icon1" /> Live video{" "}
        </div>
        <div className="icon-Heading">
          {" "}
          <FontAwesomeIcon
            icon={faPhotoFilm}
            className="icon2"
          /> Photo/gallery{" "}
        </div>
        <div className="icon-Heading">
          {" "}
          <FontAwesomeIcon icon={faFaceGrinWide} className="icon3" />{" "}
          Feeling/Activity{" "}
        </div>
      </div>
    </div>
  );
};

export default Create;
