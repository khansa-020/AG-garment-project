import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Home from "./Pages/Home"; 
import About from "./Pages/About";
import Sale from "./Pages/Sale";
import ReadyToWear from "./Pages/Ready_to_wear";
import Embroidered from './Pages/Embroidered'
import NewIn from "./Pages/New_in";
import Unstiched from "./Pages/Unstiched";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/Embroidered" element={<Embroidered />} />
         <Route path="/Ready_to_wear" element={<ReadyToWear/>} />
         <Route path="/Unstiched" element={<Unstiched/>} />
        <Route path="/New_in" element={<NewIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
