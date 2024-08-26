import React from 'react';
import{Route,Routes} from 'react-router-dom'; //route between home and excercise page
import {Box} from '@mui/material'; // div for shading 

 import './App.css';

 import ExcerciseDetails from './pages/ExcerciseDetails';
 import Home from './pages/Home';
 import Navbar from './components/Navbar';
 import Footer from './components/Footer';


const App = () => {
  return (

    //sx sx={{width: {xl: '1488px'}} for responsivess m=auto for margin auto.
    <div width="400px" sx={{width: {xl: '1488px'}}} m="auto " >  
    <Navbar />
    <Routes>  
        <Route path ="/" element={<Home />} />
        <Route path="/excercise/:id" element={<ExcerciseDetails />}  /> 
    </Routes>

    <Footer></Footer>
    </div>
  )
}

export default App
