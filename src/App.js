import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/about";
import Detail from "./pages/detail";
import Home from "./pages/home";

function App() {
  return (
    <div className="bg-gray-50 px-4">
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
