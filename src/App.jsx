import React from 'react';
import Header from './components/Header/Header';
import './App.css'
import Proyects from './components/Proyects/Proyects';
import Technologies from './components/Tecnologies/Tecnologies';
import AboutMe from './components/Aboutme/AboutMe';
import NavBar from './components/NavBar/NavBar';
import Separador from './components/Separador/Separador';
import { Element } from 'react-scroll';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Element name="home">
        <Header />
      </Element>
      <Separador></Separador>
      <Element name='projects'>
        <Proyects></Proyects>
      </Element>
      <Separador></Separador>
      <Element name='technologies'>
        <Technologies></Technologies>
      </Element>
      <Separador></Separador>
      <Element name='footer'>
      <Footer></Footer>
      </Element>
    

    </div>
  )
}

export default App
