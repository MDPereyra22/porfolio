import React from 'react';
import Header from './components/Header/Header';
import './App.css'
import Proyects from './components/Proyects/Proyects';
import Technologies from './components/Tecnologies/Tecnologies';
import AboutMe from './components/Aboutme/AboutMe';
import NavBar from './components/NavBar/NavBar';
import { Element } from 'react-scroll';

function App() {
  return (
   <div>
    <NavBar></NavBar>
    <Element name="home">
        <Header />
      </Element>
    <Proyects></Proyects>
    <Technologies></Technologies>
    <AboutMe></AboutMe>
   </div>
  )
}

export default App
