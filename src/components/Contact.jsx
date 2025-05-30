import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-8 border border-slate-700"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Contattami</h2>
        <p className="text-center text-xl mb-2">
          Sei interessato a collaborare o hai domande sui miei progetti?
        </p>
        <p className="text-center text-xl mb-8">
          Email:{' '}
          <a
            href="mailto:mimmo.pettinato@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            mimmo.pettinato@gmail.com
          </a>
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Il tuo nome"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="La tua email"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Il tuo messaggio"
              rows="5"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Invia Messaggio
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;