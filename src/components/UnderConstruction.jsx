import { motion } from 'framer-motion';

function UnderConstruction() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative my-20 p-12 bg-slate-800/70 backdrop-blur-sm rounded-lg border border-yellow-500/50 overflow-hidden"
    >
      <div className="absolute -top-10 -left-10 rotate-45 bg-yellow-500 text-slate-900 py-2 px-20 font-bold">
        WORK IN PROGRESS
      </div>
      
      <div className="text-center mt-8">
        <div className="flex justify-center gap-6 text-6xl mb-8">
          <motion.span
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            🚧
          </motion.span>
          <motion.span
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 1, delay: 0.2, repeat: Infinity }}
          >
            ⚒️
          </motion.span>
          <motion.span
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 1, delay: 0.4, repeat: Infinity }}
          >
            🚧
          </motion.span>
        </div>
        <h2 className="text-3xl font-bold mb-4">Sito in costruzione</h2>
        <p className="text-xl text-slate-300">
          Sto lavorando per completare il mio portfolio. Torna presto per vedere i miei progetti!
        </p>
      </div>
    </motion.div>
  );
}

export default UnderConstruction;