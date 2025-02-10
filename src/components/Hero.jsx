import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
//import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-12 mx-auto w-64 h-64 rounded-full border-4 border-primary p-1"
        >
          <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
            {/* Add profile image */}
          </div>
        </motion.div>

        <TypeAnimation
          sequence={[
            'MERN/MEAN Stack Developer',
            1500,
            'Full Stack Developer',
            1500,
            'Freelance Web Developer',
            1500,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-gray-300 mb-12"
        >
          Building enterprise-grade full-stack solutions with modern technologies
        </motion.p>
      </div>
    </section>
    
  )
}