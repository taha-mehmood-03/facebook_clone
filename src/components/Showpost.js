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
import {useSelector} from "react-redux";
import Img10 from "./images/meme.PNG";
import Create from "./Create";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  doc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  onSnapshot,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { firestore } from "./Firebase";

import { auth } from "./Firebase";
import { storage } from "./Firebase";
import { v4 } from "uuid"; // Import the storage object from your Firebase configuration file

const Showpost = () => {
  const [div, setDiv] = React.useState([]);
  const imageUrl = useSelector((state) => state.image.imageUrl);
  const name = useSelector((state) => state.nameChanger.name);
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
  // Function to add a post to the dynamic post list
  const addPostToDynamicList = () => {
    setDynamicpost([
      ...dynamicpost,
      {
        writingPost: state.writingPost,
        selectedPhotos: state.selectedPhotos,
      },
    ]);
  };

  // Function to upload selected photos to Firebase Storage and get their URLs
  const uploadPhotosToStorage = async () => {
    const fileUrls = [];
    for (const file of state.selectedPhotos) {
      const storageRef = ref(storage, `postImages/${v4()}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      fileUrls.push(downloadURL);
    }
    return fileUrls;
  };
  // const [error, setError] = React.useState(null);
  // React.useEffect(() => {
  const fetchPosts = async () => {
    try {
      // Check if there's a logged-in user
      const currentUser = auth.currentUser;
      if (!currentUser) {
        console.warn("No current user found.");
        return;
      }

      // Query only the posts associated with the current user
      const q = query(
        collection(firestore, "posts"),
        where("userId", "==", currentUser.uid)
      );

      const querySnapshot = await getDocs(q);
      const alldata = querySnapshot.docs.map((val) => ({
        ...val.data(),
        id: val.id,
      }));
      setDynamicpost(alldata);
      console.log(dynamicpost)
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  React.useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(firestore, "posts")),
      (snapshot) => {
        fetchPosts();
      }
    );

    return () => unsubscribe();
  }, []);

 
  console.log("dynamicpost", dynamicpost);
 
  // Function to add the post to Firestore
  const addPostToFirestore = async (fileUrls) => {
    try {
      const currentUser = auth.currentUser;
      const docRef = await addDoc(collection(firestore, "posts"), {
        userId: currentUser.uid,
        content: {
          writingPost: state.writingPost,
          selectedPhotos: fileUrls,
        },
        timestamp: new Date(),
      });
      console.log("Post added with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  // Main function to handle the posting process
  const posted = async () => {
    setCloseButtonEnabled(false);
    // setDynamicpost([]);
    setState({
      writingPost: "",
      selectedPhotos: [],
    });
    setCloseButtonEnabled(false);
    try {
      // Add the new post to the dynamic post list
      addPostToDynamicList();

      // Upload selected photos to Firebase Storage and get their URLs
      const fileUrls = await uploadPhotosToStorage();

      // Add the post to Firestore
      await addPostToFirestore(fileUrls);

      // Clear the state and disable the close button
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  };

  // Function to delete a post
  const deletePost = async (index, postId) => {
    try {
      const postRef = doc(firestore, "posts", postId); // Specify the document to delete
      await deleteDoc(postRef); // Delete the document
      console.log("Document successfully deleted!");

      // Update the state to remove the deleted post
      const updatedPosts = [...dynamicpost];
      updatedPosts.splice(index, 1);
      setDynamicpost(updatedPosts);
    } catch (error) {
      console.error("Error deleting document", error);
    }
  };

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
        {dynamicpost.map((divElement, id) => (
          <>
            {/* Rendering the Story elements */}
            {Story.map((item, index) => (
              <div key={index} className="portion-First">
                <img
                  src={imageUrl}
                  alt="hello"
                  className="postprofile-Pic"
                  id="hovering"
                />
                <div className="Head-1-Time">
                  <div className="Head-1">  <br />
                    <b id="hovering">
                      {name}
                    </b>
                  </div>
                  <div className="Time"> {divElement.timestamp.toDate().toLocaleString()}</div>
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
                    onClick={() => deletePost(index, divElement.id)}
                  />
                </div>
                <br />
              </div>
            ))}

            {/* Rendering the dynamic posts */}
            <div key={id} className="posted-Div">
              {divElement.content && divElement.content.writingPost && (
                <p className="posted-Para">{divElement.content.writingPost}</p>
              )}
              {divElement.content && divElement.content.selectedPhotos && (
                <div className="selected-photos">
                  {/* {divElement.selectedPhotos.map((photo, index) => ( */}
                  <img
                    key={`selected_photo_${id}`}
                    src={divElement.content.selectedPhotos}
                    // alt={`photo-${id}`}
                    className="Posted-Pic"
                  />
                  {/* ))} */}
                </div>
              )}
              <hr className="line-Seg1" />
              <div className="main-like-Share-Comment" key={id}>
                <div className="like-Share-Comment">
                  <FontAwesomeIcon icon={faThumbsUp} className="like" /> Like{" "}
                </div>
                <div className="like-Share-Comment">
                  <FontAwesomeIcon icon={faComment} className="like" /> Comment{" "}
                </div>
                <div className="like-Share-Comment">
                  <FontAwesomeIcon icon={faShare} className="like" /> Share{" "}
                </div>
              </div>
              <hr className="line-Seg1" />
              
            </div>
            <br />
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
                <hr className="line-Seg1" />
                <div className="post-image1-Name">
                  <div className="post-Image">
                    <img src={imageUrl} alt="haa" className="tahaimg12" />
                  </div>
                  <span className="name">
                    {name}
                  </span>
                </div>
                <textarea
                  type="text"
                  name="writingPost"
                  value={state.writingPost}
                  placeholder={`What's on your mind, ${name}?`}
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
                    <FontAwesomeIcon
                      icon={faFaceSmile}
                      className="icon-Smile"
                    />
                  </div>
                  <div className="icon-Circle">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="icon-Location"
                    />
                  </div>
                </div>
                <button
                  className="post-Button"
                  onClick={posted}
                  disabled={!state.writingPost || !state.selectedPhotos}
                >
                  Post
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Showpost;
