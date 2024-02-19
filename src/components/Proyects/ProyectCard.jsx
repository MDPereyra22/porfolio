import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ screenshot, title, description, link }) => (
  <motion.div
    className="bg-purple-800 p-6 rounded-lg shadow-lg mb-8"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative overflow-hidden rounded-lg mb-4">
      <img
        src={screenshot}
        alt={`Screenshot de ${title}`}
        className="w-full h-48 object-cover transition-transform transform hover:scale-105"
      />
      <div className="absolute inset-0 bg-black opacity-30 transition-opacity hover:opacity-20"></div>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 inline-block"
    >
      Ver Proyecto
    </a>
  </motion.div>
);

export default ProjectCard;
