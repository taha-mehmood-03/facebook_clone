import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faXmark,
  faThumbsUp,
  faComment,
  faShare,
  faPhotoFilm,
  faTag,
  faFaceSmile,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Img1 from "./images/tahapic.PNG";
import Img10 from "./images/meme.PNG";
import Create from "./Create";
const Showpost = () => {
  const [div, setDiv] = React.useState([]);
  const [Story, setStory] = React.useState([
    {
      index: 1,
      name: " Taha khan",
      image1: Img1,
      image2: Img10,
      time: 2,
    },
  ]);
  // Function to create a new post div
  const createDiv = () => {
    setDiv([...div, {}]);
    setCloseButtonEnabled(true);
   
  };
  const [closeButtonEnabled, setCloseButtonEnabled] = React.useState(true);
  // Function to handle closing of the post creation overlay
  const closing = () => {
    setCloseButtonEnabled(false);
  };
  const [state, setState] = React.useState({
    writingPost: "",
    selectedPhotos: [],
  });
  // Function to handle input change in the post textarea
  const handlingInput = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [dynamicpost, setDynamicpost] = React.useState([]);
  // Function to handle posting the new post
  const posted = () => {
    setDynamicpost([
      ...dynamicpost,
      {
        writingPost: state.writingPost,
        selectedPhotos: state.selectedPhotos,
      },
    ]);
    setState({
      writingPost: "",
      selectedPhotos: [],
    });
    setCloseButtonEnabled(false);
    
  };


  // Function to delete a post
  const deletePost = (index) => {
    // setDeleteButtonEnabled(false);
    const updatedPosts = [...dynamicpost];
  
      updatedPosts.splice(index, 1);
      setDynamicpost(updatedPosts);
    
    }
  
  const fileInputRef = React.useRef(null);
  // Function to open file input when clicking on the photo icon
  const openFileInput = () => {
    fileInputRef.current.click();
  };

  // Function to handle file change when selecting photos
  const handleFileChange = (event) => {
    const files = event.target.files;
    setState((prevState) => ({
      ...prevState,
      selectedPhotos: [...prevState.selectedPhotos, ...files],
    }));
  };
  return (
    <>
      <Create createDiv={createDiv} />
      <div className="show-Post">
        {/* Mapping through the dynamic posts */}
        {   
           dynamicpost.map((divElement, id) => (
          <>
            {/* Rendering the Story elements */}
            {Story.map((item, index) => (
                <>
                  <div key={index} className="portion-First">
                    <img
                      src={item.image1}
                      alt="hello"
                      className="postprofile-Pic"
                      id="hovering"
                    />
                    <div className="Head-1-Time">
                      <div className="Head-1">
                        <b id="hovering">{item.name}</b>
                      </div>
                      <div className="Time">{item.time} hours ago</div>
                    </div>
                    <div className="icons12">
                      <FontAwesomeIcon
                        icon={faEllipsis}
                        className="ellips-Icon"
                        id="hovering"
                      />
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="Xmark-Icon"
                        id="hovering"
                        onClick={()=>deletePost(id)}
                      />
                    </div>
                  </div>
                  <br />
                </>
              ))}
            {/* Rendering the dynamic posts */}
            <div key={id} className="posted-Div">
              <p className="posted-Para">{divElement.writingPost}</p>
              {divElement.selectedPhotos.length > 0 && (
                <div className="selected-photos">
                  {divElement.selectedPhotos.map((photo, index) => (
                    <img
                      key={`selected_photo_${index}`}
                      src={URL.createObjectURL(photo)}
                      alt={`photo-${index}`}
                      className="Posted-Pic"
                    />
                  ))}
                </div>
              )}
              <div className="main-like-Share-Comment" key={id}>
                <div className="like-Share-Comment">
                  <FontAwesomeIcon icon={faThumbsUp} className="like" /> Like{" "}
                </div>
                <div className="like-Share-Comment">
                  <FontAwesomeIcon icon={faComment} className="comment" /> Comment{" "}
                </div>
                <div className="like-Share-Comment">
                  <FontAwesomeIcon icon={faShare} className="share" /> Share{" "}
                </div>)
              </div>
              <br />
             
              </div>
          </>
        ))}
        {/* Rendering the post creation overlay */}
        {closeButtonEnabled &&
          div.map((divElement, index) => (
            <div className="overlay" key={index}>
              <div className="newDiv">
                <div className="head-Xmark">
                  <h5 className="create-Post">Create Post</h5>
                  <div className="icon-Circle">
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="Xmark-Icon"
                      id="hovering"
                      onClick={closing}
                    />
                  </div>
                </div>
                <hr />
                <div className="post-image1-Name">
                  <div className="post-Image">
                    <img src={Img1} alt="haa" className="tahaimg12" />
                  </div>
                  <span className="name">Taha Khan</span>
                </div>
                <textarea
                  type="text"
                  name="writingPost"
                  value={state.writingPost}
                  placeholder="Whats on Your mind, TAHA"
                  className="Creating-Post"
                  onChange={handlingInput}
                />
                <div className="AddingMoreThing">
                  <span className="add2-Post">Add to your post</span>
                  <div className="icon-Circle">
                    <FontAwesomeIcon
                      icon={faPhotoFilm}
                      className="Icon-picture"
                      onClick={openFileInput}
                    />
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="fileInput"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="icon-Circle">
                    <FontAwesomeIcon icon={faTag} className="icon-Tag" />
                  </div>
                  <div className="icon-Circle">
                    <FontAwesomeIcon icon={faFaceSmile} className="icon-Smile" />
                  </div>
                  <div className="icon-Circle">
                    <FontAwesomeIcon icon={faLocationDot} className="icon-Location" />
                  </div>
                </div>
                <div className="post-Button" onClick={posted}>
                  Post
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Showpost;
