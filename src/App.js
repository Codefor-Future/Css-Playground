import './App.css';

import FlexWrap from './components/FlexWrap.js';
import BoxShadow from './components/BoxShadow'
import Home from './components/Home'
import Navbar from './components/Navbar'

import { Routes, Route, Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory()
  const location = useLocation();
  const [showDesktopWarning, setShowDesktopWarning] = useState(false)
  const [bgClass, setbgClass] = useState("bg-blue")
  const findBgColor = ()=>{
    let route = history.location.pathname
    let el = document.querySelector(".App")
    if(route==="/box-shadow") el.style.backgroundColor = "#D82148"
    else if(route==="/flex/wrap") el.style.backgroundColor = "rgba(53, 214, 155, 0.91)"
    else el.style.backgroundColor = "#00918E"
  }
  useEffect(() => {
    if (window.innerWidth >= 700)
      setShowDesktopWarning(true)
    findBgColor()
  }, [location])
  return (
    // <div className="App py-10 px-8 bg-yellow-50">
    //   {/* <FlexWrap /> */}
    //   <BoxShadow />
    // </div>
    <div
      className={`App py-10 px-8 ${''}`}
    >
      {
        showDesktopWarning ?
          <div className='flex justify-center items-center font-bold text-gray-200 h-screen text-center'>
            <div>
              <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 m-auto text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              Sorry, this website is only available on mobile devices.
            </div>
          </div>
          :
          <div>
            <Navbar />
            <Routes>
              <Route path="/flex/wrap" element={<FlexWrap />} />
              <Route path="/box-shadow" element={<BoxShadow />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
      }
    </div>
  );
}

export default App;
