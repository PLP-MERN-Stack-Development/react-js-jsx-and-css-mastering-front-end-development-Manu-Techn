import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useTheme } from './ThemeContext'

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === 'dark'
          ? 'bg-gray-900 text-gray-100'
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      <Navbar />

      {/* Theme Toggle Button */}
      <div className="p-4 flex justify-end">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Center content vertically and horizontally */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">{children}</div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
