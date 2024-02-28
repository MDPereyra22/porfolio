// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ screenshot, title, description, link, github }) => (
  <motion.div
    className="bg-purple-800 p-6 rounded-lg shadow-lg mb-8 flex flex-col"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative overflow-hidden rounded-xl mb-4">
      <a href={link}
      target="_blank"
      rel="noopener noreferrer">
      <img
        src={screenshot}
        alt={`Screenshot de ${title}`}
        className="w-full  h-48 object-cover transition-transform transform hover:scale-105"
      />
      </a>
    </div>
    <div className="flex flex-col justify-between flex-grow">
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
      <div className="flex justify-center space-x-1">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500 text-white md:w-32 w-20 text-sm md:text-base py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300 inline-block"
        >
          Ver Proyecto
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500 text-white md:w-32 w-20 text-sm md:text-base py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300 inline-block"
        >
          Ver código
        </a>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
