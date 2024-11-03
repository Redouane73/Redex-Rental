// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import CarsList from "./Components/CarsList";
import Contact from "./Components/Contact";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="Redex-Rental" element={<Home />}></Route>
        <Route path="about" element={<AboutUs />}></Route>
        <Route path="/carslist" element={<CarsList />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
