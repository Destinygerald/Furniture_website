import { useState, useEffect } from 'react'
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./Components/Navbar"
import FrontPage from "./Pages/FrontPage"
import Products from "./Pages/Products"
import Footer from "./Components/Footer"
import Contact from "./Pages/Contact"
import { SliderContextProvider } from "./Context/SliderContext"


function App() {

  return (
  <SliderContextProvider>
     <div className="app">
        <Navbar />

         <Routes>
            <Route path="/" element={<FrontPage />} />

            <Route path='/product'>
               <Route index element={<Products />} />
            </Route>

            <Route path="/contact" element={<Contact />} />

         </Routes>

         <Footer />
    </div>
  </SliderContextProvider>
  )
}

export default App
