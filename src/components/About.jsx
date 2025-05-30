import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-8 border border-slate-700"
      >
        <h2 className="text-4xl font-bold mb-6">Chi Sono</h2>
        <p className="text-xl text-slate-300">
          Ciao! Sono un appassionato sviluppatore web e designer con passione nella creazione 
          di soluzioni digitali innovative. Mi piace combinare creatività e tecnologia per 
          realizzare progetti unici e funzionali.
        </p>
      </motion.div>
    </section>
  );
}

export default About;