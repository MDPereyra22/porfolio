import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ screenshot, title, description, link }) => (
  <motion.div
    className="bg-slate-700 p-6 rounded-md shadow-md mb-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img
      src={screenshot}
      alt={`Screenshot de ${title}`}
      className="mb-4 rounded-md w-full h-32 object-cover transition-transform transform hover:scale-105"
    />
    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-orange-400 text-black py-2 px-4 rounded-md hover:bg-orange-500 transition duration-300"
    >
      Ver Proyecto
    </a>
  </motion.div>
);

export default ProjectCard;
