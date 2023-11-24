import React from 'react';

const ProjectCard = ({ screenshot, title, description, link }) => (
  <div className="bg-white p-6 rounded-md shadow-md mb-4">
     <img
      src={screenshot}
      alt={`Screenshot de ${title}`}
      className="mb-4 rounded-md w-full h-32 object-cover"
    />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
    >
      Ver Proyecto
    </a>
  </div>
);

export default ProjectCard;