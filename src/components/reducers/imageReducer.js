// imageReducer.js

import { FETCH_IMAGE_URL_REQUEST, FETCH_IMAGE_URL_SUCCESS, FETCH_IMAGE_URL_FAILURE } from '../actions/actions';

// Initial state for the image reducer
const initialState = {
  imageUrl: null,
  loading: false,
  error: null,
};

// Reducer function for handling image-related actions
const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGE_URL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_IMAGE_URL_SUCCESS:
      return {
        ...state,
        loading: false,
        imageUrl: action.payload,
        error: null,
      };
    case FETCH_IMAGE_URL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
