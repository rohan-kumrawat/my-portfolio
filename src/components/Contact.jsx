import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-primary">Let&apos;s Connect!</h3>
              <p className="text-gray-300">
                Have a project in mind? Let&apos;s discuss how I can help you bring it to life.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-2xl text-secondary">📍</span>
                <span className="text-gray-300">Indore, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl text-secondary">📧</span>
                <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-primary transition-colors">
                  rohanrkmail@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 text-white"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}