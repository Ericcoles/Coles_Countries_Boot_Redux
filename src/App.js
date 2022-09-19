import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Countries from "./components/Countries";
import CountriesSingle from "./components/CountriesSingle";
import Layout from "./pages/Layout";
import Favorites from "./components/Favorites";

import "bootstrap-icons/font/bootstrap-icons.css";

console.log(process.env.REACT_APP_OPENWEATHER_KEY);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:single" element={<CountriesSingle />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
