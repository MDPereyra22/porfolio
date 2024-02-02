import React, { useState } from "react";
import profileImage from "../../assets/perfil.jpg";
import computerImage from "../../assets/pc.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAboutMe = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header 
      className="bg-slate-900 min-h-screen flex flex-col items-center justify-center p-20 text-black text-center">
      <div className="rounded-lg border-2 border-orange-300 overflow-hidden shadow-md mb-8 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-4 bg-black text-white">
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            src={profileImage}
            alt="Profile"
            className="w-52 h-52 md:w-60 md:h-60 rounded-full mb-4 md:mb-0 p-4"
          />
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
            >
              Matías Daniel Pereyra
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl mb-4"
            >
              Full Stack Web Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-md italic text-gray-600 mb-4"
            >
              "Transformando ideas en experiencias digitales"
            </motion.p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleAboutMe}
            className="bg-white text-black px-4 py-2 rounded-full"
          >
            <span className="mr-2">
              <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </span>
            {isOpen ? "Minimizar" : "Acerca de mí"}
          </motion.button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-gray-800 p-4 rounded-md relative flex"
            >
              <div className="flex-grow">
                <p className="text-left p-2">
                  Hola, soy Matías, un apasionado desarrollador Full Stack con una visión creativa y una mente analítica. Mi enfoque se centra en transformar ideas en experiencias digitales cautivadoras. Con habilidades sólidas en tecnologías web y un compromiso constante con la excelencia, busco marcar la diferencia a través de la innovación.
                </p>
                <p className="text-left p-2">
                  Mi viaje en el desarrollo comenzó en Henry, donde descubrí mi profundo interés en el avance tecnológico. He desempeñado roles educativos, observando la necesidad de una transformación tecnológica. Ahora, como desarrollador, estoy decidido a aplicar mis habilidades para crear soluciones innovadoras.
                </p>
                <p className="text-left p-2">
                  Estoy en constante búsqueda de oportunidades desafiantes para crecer profesionalmente y contribuir significativamente a proyectos emocionantes. ¡Conversemos y exploremos cómo podemos trabajar juntos para lograr grandes cosas!
                </p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <img
                  src={computerImage}
                  alt="Computer"
                  className="w-32 h-auto rounded-md"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
