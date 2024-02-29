/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import profileImage from "../../assets/perfil.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import cv from '../../assets/CV.pdf'
import AboutMe from "../Aboutme/AboutMe";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAboutMe = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header className="bg-gradient-to-r from-purple-800 to-indigo-900 min-h-screen flex flex-col items-center justify-center p-20 text-black text-center">
      <div className="overflow-hidden mb-8 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-3 mb-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            src={profileImage}
            alt="Profile"
            className="w-50 h-50 sm:w-56 sm:h-56 md:mr-4 md:w-60 md:h-60 rounded-full mb-4 md:mb-0 p-4 shadow-xl"
          />
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:ml-4"
            >
              Matías Daniel Pereyra
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl mb-4  md:ml-4"
            >
              Full Stack Web Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-md italic text-gray-300 mb-4 md:ml-4"
            >
              "Transformando ideas en experiencias digitales"
            </motion.p>
          </div>

          <div className="w-52">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              className={"bg-gray-500 text-white py-2 px-4 rounded-md w-40 m-2 hover:bg-gray-600 transition duration-300 inline-block"}
            >
              <a
                href={cv}
                download="MatíasPereyraCV.pdf"
                className="flex items-center justify-center"
                style={{ width: '100%', height: '100%', textDecoration: 'none' }}
              >
                <span className="mr-2">Descargar CV</span>

              </a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              onClick={toggleAboutMe}
              className={`bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300 inline-block mx-1 w-40  ${isOpen ? 'text-gray-500' : 'text-black'} hover:bg-gray-400 transition-colors duration-300`}
            >
              <span className="mr-2">
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
              </span>
              {isOpen ? "Minimizar" : "Acerca de mí"}
            </motion.button>

          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <AboutMe />
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
