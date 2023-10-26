import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { useSnapshot } from 'valtio';
import state from './store';
import Login from './pages/Login';

function App() {
  const [viewPort, setViewPort] = useState(window.innerWidth);
  
  const snap = useSnapshot(state)
  const handleScroll =()=>{
    state.scroolY = window.scrollY 
  }

  useEffect(() => {
    
    window.addEventListener("resize", handleScroll);
    
   if(viewPort < 768){
    state.deviceType = "Mobile";

   }
   else if(viewPort < 991)
   {
    state.deviceType = "Tablet";
   }
   else
   {
    state.deviceType = "Desktop"
   }

   return()=>{
    window.removeEventListener("resize", handleScroll);
   }

  }, [viewPort])


  return (
  
  <BrowserRouter>
  <ChakraProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      </ChakraProvider>
   </BrowserRouter> 
  );
}

export default App;
