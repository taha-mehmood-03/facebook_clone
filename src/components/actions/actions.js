// imageActions.js

import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../Firebase";

// Action type constants
export const FETCH_IMAGE_URL_REQUEST = "FETCH_IMAGE_URL_REQUEST";
export const FETCH_IMAGE_URL_SUCCESS = "FETCH_IMAGE_URL_SUCCESS";
export const FETCH_IMAGE_URL_FAILURE = "FETCH_IMAGE_URL_FAILURE";

// Action creator to fetch the image URL
export const fetchImageUrlRequest = () => ({
  type: FETCH_IMAGE_URL_REQUEST,
});

export const fetchImageUrlSuccess = (imageUrl) => ({
  type: FETCH_IMAGE_URL_SUCCESS,
  payload: imageUrl,
});

export const fetchImageUrlFailure = (error) => ({
  type: FETCH_IMAGE_URL_FAILURE,
  payload: error,
});

export const fetchImageUrl = (email) => {
  return async (dispatch) => {
    dispatch(fetchImageUrlRequest()); // Dispatch action to indicate fetching has started
    try {
      const imagesCollectionRef = collection(firestore, "imageskhan");
      const q = query(imagesCollectionRef, where("email", "==", email)); // Query by email
      const imagesSnapshot = await getDocs(q);
      let imageUrl;
      imagesSnapshot.forEach((doc) => {
        imageUrl = doc.data().url;
      });
      dispatch(fetchImageUrlSuccess(imageUrl)); // Dispatch action with fetched image URL
    } catch (error) {
      dispatch(fetchImageUrlFailure(error.message)); // Dispatch action if fetching fails
    }
  };
};
