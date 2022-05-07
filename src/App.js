import './App.css';

import FlexWrap from './components/FlexWrap.js';
import BoxShadow from './components/BoxShadow'
import Navbar from './components/Navbar'

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // <div className="App py-10 px-8 bg-yellow-50">
    //   {/* <FlexWrap /> */}
    //   <BoxShadow />
    // </div>
    <div className="App py-10 px-8">
      <Navbar />
      <Routes>
        <Route path="/flex/wrap" element={<FlexWrap />} />
        <Route path="/box-shadow" element={<BoxShadow />} />
      </Routes>
    </div>
  );
}

export default App;
