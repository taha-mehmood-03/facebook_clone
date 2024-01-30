import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import Sidebar2 from './components/Sidebar2'
function App() {
  return  <div className="App">
     <Navbar/>
     <Sidebar/>
     <Posts/>
     <Sidebar2/>
    </div>
 
}

export default App;