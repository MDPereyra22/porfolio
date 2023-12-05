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
      <Element name='projects'>
        <Proyects></Proyects>
      </Element>
      <Element name='technologies'>
        <Technologies></Technologies>
      </Element>
      <Element name='about me'>
        <AboutMe></AboutMe>
      </Element>

    </div>
  )
}

export default App
