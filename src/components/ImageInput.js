// import React, { useState } from "react";
// import { storage, auth } from "../Firebase"; // Import Firebase storage instance
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
// import { v4 } from "uuid";
// import {  useNavigate } from "react-router-dom";
// const ImageInput = ({ currentUser }) => {
//   const [image, setImage] = useState(null);

//   // Function to handle file selection
//   const handleFileChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   // Function to handle file upload
//   const navigate = useNavigate();
//   const handleUpload = async () => {
//     if (image) {
//       try {
//         // Create a reference to the storage location where the image will be stored
//         const storageRef = ref(storage, `profile_pics/${v4()}`);
  
//         // Upload the image file to Firebase Storage
//         await uploadBytes(storageRef, image);
  
//         // Get the download URL of the uploaded image
//         const downloadURL = await getDownloadURL(storageRef);
  
//         // Log the download URL
//         console.log("Image URL:", downloadURL);
  
//         // Navigate to the desired location
//         navigate("/").catch((err) => {
//           console.error("Error navigating:", err);
//         });
  
//         // Return the download URL or any other necessary data
//         return downloadURL;
//       } catch (error) {
//         // Handle errors during the upload process
//         if (error && error.message) {
//           console.error("Error uploading image:", error.message);
//         } else {
//           console.error("Error uploading image:", error);
//         }
//       }
//     }
//   };
  
  

//   return (
//     <div className="background-Input">
//       <div className="inputimage">
//         {/* Display selected image (optional) */}
//         {image && <img src={URL.createObjectURL(image)} alt="Selected" className="imagin" />}
//       </div>
//       <div className="file-submit">
//         {/* Input field for file selection */}
//         <input type="file" className="choose-file" onChange={handleFileChange} />
//         {/* Button to trigger file upload */}
//         <button onClick={handleUpload}>Upload</button>
//       </div>
//     </div>
//   );
// };

// export default ImageInput;
