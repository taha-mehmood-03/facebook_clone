import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImageUrl } from "./actions/actions"; // Import the action creator

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Posts from "./Posts";
import Sidebar2 from "./Sidebar2";

const Facebookmaininterface = () => {
  const dispatch = useDispatch();
  const imageUrl = useSelector((state) => state.image.imageUrl); // Get imageUrl from Redux store

  useEffect(() => {
    // Fetch imageUrl when the component mounts
    dispatch(fetchImageUrl());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar imageUrl={imageUrl} />
      <Sidebar  /> {/* Pass imageUrl to Sidebar */}
      <Posts  />
      <Sidebar2 />
    </div>
  );
};

export default Facebookmaininterface;
