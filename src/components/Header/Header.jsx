import React from "react";
import profileImage from "../../assets/perfil.jpg"
import { motion } from "framer-motion";

const Header = () => {
    return (
        <motion.header

            className="bg-gradient-to-r min-h-screen  flex flex-col items-center justify-center from-amber-300 via-amber-200 to-amber-100 p-8 text-black text-center">
            <div className="rounded border-black flex items-center justify-center mb-4 my-10">
                <motion.img
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    src={profileImage}
                    alt="Profile"
                    className="w-64 h-64 rounded-full mr-4"
                />
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.4 }} className="text-6xl font-bold mb-4">Matías Daniel Pereyra</motion.h1>
                    <motion.p initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }} className="text-xl mb-4">Full Stack Web Developer</motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-lg italic text-gray-600"
                    >
                        "Transformando ideas en experiencias digitales"
                    </motion.p>
                    {/* <a
                        href="https://github.com/MDPereyra22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-300 mx-6"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/matipere"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-300 mx-6 "
                    >
                        LinkedIn
                    </a> */}

                </div>
            </div>

        </motion.header>
    )
}

export default Header;
