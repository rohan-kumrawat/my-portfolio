import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Rohan Kumrawat
            </h3>
            <p className="text-gray-400 mt-2">Full Stack Web Developer</p>
          </div>

          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/rohan-kumrawat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FiGithub className="text-2xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/rohankumrawat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FiLinkedin className="text-2xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:rohanrkmail@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FiMail className="text-2xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.instagram.com/rohan.kumrawat.rk/"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FiInstagram className="text-2xl" />
            </motion.a>
          </div>
        </motion.div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Rohan Kumrawat. Crafted with ❤️ using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}