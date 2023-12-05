// src/components/Technologies.jsx
import React from 'react';
import jsImage from '../../assets/java-script.png'
import htmlImage from '../../assets/html.png'
import cssImage from '../../assets/css.png'
import nodeImage from '../../assets/nodejs.png'
import reactImage from '../../assets/react.svg'
import reduxImage from '../../assets/redux.svg'
import sqlImage from '../../assets/sql-server.png'
import postgresImage from '../../assets/postgre.png'
import gitImage from '../../assets/github.png'
import expressImg from '../../assets/express-js.webp'
import sequelizeImg from '../../assets/sequelize.webp'
import antImg from '../../assets/antdesign.png'
import cloudyImg from '../../assets/cloudinary.png'
import figmaImg from '../../assets/figma.png'

const Technologies = () => {
  return (
    <section className="my-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Tecnologías</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <TechBadge name="JavaScript" icon={jsImage}/>
        <TechBadge name="HTML5" icon={htmlImage}/>
        <TechBadge name="CSS"icon={cssImage} />
        <TechBadge name="Node.js" icon={nodeImage}/>
        <TechBadge name="React" icon={reactImage}/>
        <TechBadge name="Redux" icon={reduxImage} />
        <TechBadge name="SQL" icon={sqlImage}/>
        <TechBadge name="PostgreSQL" icon={postgresImage}/>
        <TechBadge name="Git" icon={gitImage}/>
        <TechBadge name="Sequelize"icon={sequelizeImg}/>
        <TechBadge name="Express" icon={expressImg} />
        <TechBadge name="Ant Design" icon={antImg} />
        <TechBadge name="Cloudinary" icon={cloudyImg}/>
        <TechBadge name="Figma" icon={figmaImg}/>
      </div>
    </section>
  );
};

const TechBadge = ({ name, icon: Icon }) => (
    <div className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-gray-800">
      {Icon && <img src={Icon} alt={name} className="w-6 h-6 mr-2" />}
      {name}
    </div>
  );
export default Technologies;
