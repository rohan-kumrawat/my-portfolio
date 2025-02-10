// src/components/ThemeToggle.jsx
import { FiSun, FiMoon } from 'react-icons/fi'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
    >
      {theme === 'dark' ? (
        <FiSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <FiMoon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  )
}