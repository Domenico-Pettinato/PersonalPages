import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        Domenico Pettinato
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl md:text-2xl text-gray-300"
      >
        Sviluppatore Web & Designer Creativo
      </motion.p>
    </header>
  );
}

export default Header;