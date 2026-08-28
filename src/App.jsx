import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';


//component folder pages//
import HomePage from './components/HomePage';
import AddPlants from './components/AddPlants';
import AddSupplies from './components/AddSupplies';
import About from './components/About';
import NavMenu from './components/NavMenu';
import MyPlants from './components/MyPlants';
import MySupplies from './components/MySupplies';


function App() {

  const location = useLocation();

  const isAddPage = location.pathname === '/plants' || location.pathname === '/AddSupplies';
     
  return (
  <>
     {!isAddPage && <NavMenu />}
  <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<About/>} />
       <Route path="/plants" element={<AddPlants />} />
       <Route path="/MyPlants" element={<MyPlants/>} />
      <Route path="/AddSupplies" element={<AddSupplies />} />
      <Route path="/MySupplies" element={<MySupplies/>} />
    </Routes>
  </>
    

  )};
  
export default App
