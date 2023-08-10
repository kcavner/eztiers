import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tier from './pages/tier';
import Register from './pages/register';
import Nav from './pages/nav'

const App = () => {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/tier" element={<Tier/>}/>
        <Route path="/register" element={<Register/>}/> 
      </Routes>
    </BrowserRouter> 
  );
};

export default App
