// src/components/AboutMe.jsx
import qr from "../../assets/qr.png";
import { motion} from "framer-motion";


const AboutMe = () => {
  return (
    <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "auto", opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="text-gray-50 p-4 rounded-md relative flex"
  >
      <div className="flex-grow mr-8">
        <p className="text-left p-2 text-sm">
          Soy Matías, un desarrollador Full Stack apasionado por la creación. Me encanta transformar ideas en experiencias digitales. Mi curiosidad me lleva a explorar nuevos horizontes, ya sea en la música, la cocina o la programación.
        </p>
        <p className="text-left p-2 text-sm">
          Mi viaje en el desarrollo comenzó en Henry, donde descubrí mi profundo interés en el avance tecnológico. He desempeñado roles educativos, observando la necesidad de una transformación tecnológica.
        </p>
        <p className="text-left p-2 text-sm">
          Estoy en constante búsqueda de oportunidades desafiantes para crecer profesionalmente y contribuir significativamente a proyectos emocionantes. ¡Conversemos y exploremos cómo podemos trabajar juntos para lograr grandes cosas!
        </p>
      </div>
      <div className="flex-shrink-0">
        <div className="flex flex-col items-center">
          <img
            src={qr}
            alt="Contactame"
            className="w-48 h-48 rounded-md mb-2 shadow-md"
          />
          <p className="text-xs font-bold">Contactame</p>
        </div>
      </div>
      </motion.div>
  );
};

export default AboutMe;
