import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faTv,
  faBookmark,
  faChevronDown,
  faUsersLine,
  faLock,
  faGears,
  faClock,
  faScrewdriverWrench,
  faCircleInfo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { onAuthStateChanged } from "firebase/auth";
import { firestore, storage } from "./Firebase";
import { doc, setDoc } from "firebase/firestore";
// import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import { auth } from "./Firebase";
import { useSelector, useDispatch } from "react-redux";
import { fetchImageUrl } from "./actions/actions";

import { fetchNameFromFirebase } from "./actions/nameChangerAction";
import Img2 from "./images/uetpimage.PNG";
import Img3 from "./images/uetmimage.PNG";
import Img4 from "./images/ui ux image.PNG";
import Img5 from "./images/batch5image.PNG";
import Img6 from "./images/8ballpool-image.PNG";

const Sidebar = () => {
  const [naming, setNaming] = useState("");

  const dispatch = useDispatch();
  const imageUrl = useSelector((state) => state.image.imageUrl);
  const name = useSelector((state) => state.nameChanger.name);

  const [uploadImage, setUploadImage] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail = user.email;
        console.log("User is signed in:", userEmail);
        dispatch(fetchImageUrl(userEmail));
      }else {
        console.log("User is signed out");
      }
    });
  }, [dispatch]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail = user.email;
        console.log("User is signed in:", userEmail);
        dispatch(fetchNameFromFirebase(userEmail));
      } else {
        console.log("User is signed out");
      }
    });
  }, [dispatch]);
  const handleNameChange = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    setNaming(e.target.value);
  };

  const handleFileChange = (e) => {
    console.log("File input changed.");
    if (e.target.files[0]) {
      console.log("File selected:", e.target.files[0]);
      setImage(e.target.files[0]); // Store the selected file in the image state
    }
  };

  const handleUpload = async () => {
    console.log("Upload button clicked.");

    setUploadImage(false);

    if (image) {
      const imageRef = ref(storage, `picskhan/${v4()}`); // Generate a unique ID for the image
      try {
        console.log("Uploading image to Firebase Storage...");
        await uploadBytes(imageRef, image); // Upload the image to Firebase Storage
        const downloadURL = await getDownloadURL(imageRef); // Get the download URL of the uploaded image

        // Delete the previous image from Firestore if it exists
        if (imageUrl) {
          console.log("Deleting previous image from Firestore...");
          const imagesCollectionRef = collection(firestore, "imageskhan");
          const querySnapshot = await getDocs(imagesCollectionRef);
          querySnapshot.forEach(async (doc) => {
            try {
              await deleteDoc(doc.ref);
              console.log("Previous image deleted successfully.");
            } catch (error) {
              console.error("Error deleting previous image:", error);
            }
          });
        }

        // Close the upload overlay
        setImage(downloadURL); // Set the download URL to the state

        // Store the new image URL in Firestore
        console.log("Storing image URL in Firestore...");
        await addDoc(collection(firestore, "imageskhan"), {
          url: downloadURL,
          email: auth.currentUser.email,
        });
        console.log("Image uploaded successfully.");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    if (naming) {
      try {
        console.log("Updating name in Firestore...");
        const user = auth.currentUser;
        if (user) {
          const userId = user.uid; // Get the user ID

          // Update the name in Firestore using the user's ID
          await setDoc(
            doc(firestore, "users", userId),
            {
              name: naming,
            },
            { merge: true }
          );
          console.log("Name updated successfully:", naming);
        } else {
          console.log("User is not signed in");
        }
      } catch (error) {
        console.error("Error updating name:", error);
      }
    }
  };

  const imageDiv = () => {
    setUploadImage(true);
  };

  const closing = () => {
    setUploadImage(false);
  };

  const [state, setState] = useState([
    {
      index: 1,
      name: "Friends",
      icon: faUserGroup,
      className1: "side-logo-friends",
      className2: "flogo",
      className3: "friend-Logo",
    },
    {
      index: 2,
      name: "Memories",
      icon: faClock,
      className1: "side-logo-Memories",
      className2: "Memories-Logo",
      className3: "memo-Logo",
    },
    {
      index: 3,
      name: "Saved",
      icon: faBookmark,
      className1: "side-logo-saved",
      className2: "saved-Logo",
      className3: "saving-Logo",
    },
    {
      index: 4,
      name: "Groups",
      icon: faUsersLine,
      className1: "side-logo-Groups",
      className2: "groups-Logo",
      className3: "g-Logo",
    },
    {
      index: 5,
      name: "Videos",
      icon: faTv,
      className1: "side-logo-Videos",
      className2: "videos-Logo",
      className3: "vid-Logo",
    },
    {
      index: 6,
      name: "See more",
      icon: faChevronDown,
      className1: "side-logo-Seemore",
      className2: "seemore-Logo",
      className3: "see-Logo",
    },
    {
      index: 7,
      name: "Tools",
      icon: faScrewdriverWrench,
      className1: "side-logo-Tool",
      className2: "Tlogo",
      className3: "tool-Logo",
    },
    {
      index: 8,
      name: "Settings",
      icon: faGears,
      className1: "side-logo-setting",
      className2: "settings-Logo",
      className3: "setting-Logo",
    },
    {
      index: 9,
      name: "info",
      icon: faCircleInfo,
      className1: "side-info-Logo",
      className2: "info-Logo",
      className3: "infos-Logo",
    },
    {
      index: 10,
      name: "Privacy",
      icon: faLock,
      className1: "side-logo-Privacy",
      className2: "privacy-Logo",
      className3: "lock-Logo",
    },
  ]);

  const [seeMoreOpen, setSeeMoreOpen] = useState(false);

  const togglelist = () => {
    setSeeMoreOpen(!seeMoreOpen);
  };

  const [state2, setstate2] = useState([
    {
      index: 1,
      name: "Uet Peshawar",
      image: Img2,
      className: "side-Uet-Name",
      class2Name: "Uet-Image",
      imageClassName: "u_Image",
    },
    {
      index: 2,
      name: "UET Mardan",
      image: Img3,
      className: "side-UetM-Name",
      class2Name: "Uetm-Image",
      imageClassName: "um-Image",
    },
    {
      index: 3,
      name: "UI / UX Designer & Developer",
      image: Img4,
      className: "side-Ui-Name",
      class2Name: "Ui-Image",
      imageClassName: "ux-Image",
    },
    {
      index: 4,
      name: "Software Engineering batch 5",
      image: Img5,
      className: "side-batch5-Name",
      class2Name: "batch5-Image",
      imageClassName: "B5-Image",
    },
    {
      index: 5,
      name: "8 Ball Pool",
      image: Img6,
      className: "side-8ballpool-Name",
      class2Name: "8ballpool-Image",
      imageClassName: "pool8-Image",
    },
  ]);

  return (
    <>
      <div className="whole-Sidebar" id="for-Scroll">
        <div className="side-image1-Name">
          <div className="image1">
            <img
              src={imageUrl}
              alt="Profile"
              className="tahaimg"
              onClick={imageDiv}
              onError={(e) => {
                console.error("Error loading image:", e.target.src);
              }}
            />
          </div>
          <span className="name">{name}</span>
        </div>

        {state.map((item, index) =>
          (item.name !== "Tools" &&
            item.name !== "Settings" &&
            item.name !== "Privacy" &&
            item.name !== "info") ||
          (seeMoreOpen &&
            ["Tools", "Settings", "Privacy", "info"].includes(item.name)) ? (
            <div
              key={index}
              className={item.className1}
              onClick={item.name === "See more" ? togglelist : null}
            >
              <div className={item.className2}>
                <FontAwesomeIcon icon={item.icon} className={item.className3} />
              </div>
              <span className="name">{item.name}</span>
            </div>
          ) : null
        )}

        <span className="heading"> Your shortcuts</span>

        {state2.map((things, index) => (
          <div key={index} className={things.className}>
            <div className={things.class2Name}>
              <img
                src={things.image}
                alt="Shortcut"
                className={things.imageClassName}
              />
            </div>
            <span className="name">{things.name}</span>
          </div>
        ))}

        <div className="links">
          <a href="#">Privacy </a> · <a href="#"> Terms </a> ·{" "}
          <a href="#">Advertising </a>· <a href="#"> Ad choices </a> ·{" "}
          <a href="#"> Cookies </a> ·<a href="#"> More </a> ·
          <a href="#">Meta © 2023</a>{" "}
        </div>
      </div>
      {uploadImage && (
        <div className="upload-overlay">
          <div className="upload-newDiv">
            <FontAwesomeIcon
              icon={faXmark}
              className="Xmark-Icon"
              id="hovering"
              onClick={closing}
            />
            <div className="upload-Image">
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Selected Image"
                  className="tahaimg123"
                />
              )}
            </div>

            <div className="input-div">
              {" "}
              <input
                type="text"
                className="name-changer"
                name="name-Input"
                value={naming}
                onChange={handleNameChange}
              />
              {/* <label htmlFor="fileInput"> */}
              <input
                type="file"
                className="file-Input"
                onChange={handleFileChange}
              />
              {/* Click here to select a file */}
              {/* </label> */}
            </div>

            <button onClick={handleUpload} className="post-Button">
              Upload
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Sidebar;
