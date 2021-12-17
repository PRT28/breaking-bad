import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from "./components/Home.jsx";
import Info from "./components/Info.jsx";
 
function App() {
  return(
  <div>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/info/:id" element={<Info />} />
    </Routes>
  </div>
  );
  
}

export default App;
