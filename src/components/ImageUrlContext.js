import React, { createContext, useState, useContext } from 'react';

const ImageUrlContext = createContext();

export const useImageUrl = () => useContext(ImageUrlContext);

export const ImageUrlProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <ImageUrlContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </ImageUrlContext.Provider>
  );
};