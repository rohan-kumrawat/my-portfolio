import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeProvider from './context/ThemeProvider'

export default function App() {
  return (
    <ThemeProvider>
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark">
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='pt-24'
      >
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </motion.main>

      <Footer />
    </div>
    </ThemeProvider>
  )
}
// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-900"> {/* Background color set hai? */}
//       <h1 className="text-white text-4xl p-8">Test Heading</h1> {/* Temporary test element */}
//       {/* Comment out all components and check */}
//     </div>
//   )
// }