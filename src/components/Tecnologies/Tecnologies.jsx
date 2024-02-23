import { useState } from 'react';

import jsImage from '../../assets/java-script.png';
import htmlImage from '../../assets/html.png';
import cssImage from '../../assets/css.png';
import nodeImage from '../../assets/nodejs.png';
import reactImage from '../../assets/react.svg';
import reduxImage from '../../assets/redux.svg';
import sqlImage from '../../assets/sql-server.png';
import postgresImage from '../../assets/postgre.png';
import gitImage from '../../assets/github.png';
import expressImg from '../../assets/express-js.webp';
import sequelizeImg from '../../assets/sequelize.webp';
import antImg from '../../assets/antdesign.png';
import cloudyImg from '../../assets/cloudinary.png';
import figmaImg from '../../assets/figma.png';

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('Backend');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const techData = {
    Backend: [
      { name: 'Node.js', icon: nodeImage },
      { name: 'SQL', icon: sqlImage },
      { name: 'PostgreSQL', icon: postgresImage },
      { name: 'Sequelize', icon: sequelizeImg },
      { name: 'Express', icon: expressImg },
    ],
    Frontend: [
      { name: 'JavaScript', icon: jsImage },
      { name: 'HTML5', icon: htmlImage },
      { name: 'CSS', icon: cssImage },
      { name: 'React', icon: reactImage },
      { name: 'Redux', icon: reduxImage },
      { name: 'Ant Design', icon: antImg },
    ],
    Otros: [
      { name: 'Git', icon: gitImage },
      { name: 'Cloudinary', icon: cloudyImg },
      { name: 'Figma', icon: figmaImg },
    ],
  };

  return (
    <section
      className="text-center min-h-screen bg-gradient-to-r from-purple-800 to-indigo-900 p-24"
    >
      <h2 className="text-3xl font-bold mb-10 text-black">Tecnologías</h2>
      <div className="flex justify-center mb-8 space-x-4">
        {Object.keys(techData).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab ? 'bg-gray-500 text-white py-2 px-4 rounded-md ' : 'bg-gray-100 py-2 px-4 rounded-md inline-block'
            } transition-all duration-300`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techData[activeTab].map(({ name, icon }, index) => (
          <div
            key={index}
            className="bg-white p-2 w-80 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 mx-auto"
          
          >
            {icon && <img src={icon} alt={name} className="w-12 h-12 mb-4 mx-auto" />}
            <p className="text-gray-800 font-semibold text-center">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
