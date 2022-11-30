import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeContext } from './context/theme-provider';
import About from './pages/about';
import Detail from './pages/detail';
import Home from './pages/home';

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={theme.theme === 'light' ? 'bg-gray-50 px-4' : 'bg-black px-4'}
    >
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
