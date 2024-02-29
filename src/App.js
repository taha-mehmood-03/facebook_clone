import React from "react";
import "./App.css";
import Facebookmaininterface from "../src/components/Facebookmaininterface";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import Error from "./components/Error";
import SignUp from "./SignUp";
import { Provider } from 'react-redux';
import store from './components/store'; // Import your Redux store
import ImageInput from "./components/ImageInput";

function App() {
  return (
    <Provider store={store}> {/* Wrap your Routes with Provider and pass the store */}
      <Routes>
        <Route exact path="/" element={<Loginpage  />} />
        <Route path="/facebook" element={<Facebookmaininterface />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/image" element={<ImageInput />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Provider>
  );
}

export default App;
