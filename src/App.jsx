import Header from './components/Header/Header';
import './App.css'
import Proyects from './components/Proyects/Proyects';
import Technologies from './components/Tecnologies/Tecnologies';
import NavBar from './components/NavBar/NavBar';
import Separador from './components/Separador/Separador';
import { Element } from 'react-scroll';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Element name="home">
        <Header />
      </Element>
      <Separador/>
      <Element name='projects'>
        <Proyects/>
      </Element>
      <Separador/>
      <Element name='technologies'>
        <Technologies/>
      </Element>
      <Separador/>
       <Element name='footer'>
      <Footer/>
      </Element>
    

    </div>
  )
}

export default App
