// src/components/Header.jsx
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const navItems = ['Home', 'Projects', 'Skills', 'Contact']

  return (
    <header className="fixed w-full p-6 backdrop-blur-lg bg-white/50 dark:bg-gray-900/50 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <motion.span
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Rohan Kumrawat
        </motion.span>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.05 }}
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-all"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}