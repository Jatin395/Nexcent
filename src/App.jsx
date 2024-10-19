import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Clients from './Components/Clients';
import Members from './Components/Members';
import Side1 from './Components/Side1';
import Side2 from './Components/Side2';
import Gslide1 from './Components/Gslide1';
import Demo from './Components/Demo';
import Careings from './Components/Careings';
import Gslide2 from './Components/Gslide2';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>
    <Navbar/>    
    <Home/>
    <Clients/>
    <Members/>
    <Side1/>
    <Gslide1/>
    <Side2/>
    <Gslide2/>
    <Careings/>
    <Demo/>
    <Footer/>
    </>
  )
}
