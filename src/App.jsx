import React from 'react'
import Layout from './components/Layout'
import TaskManager from './components/TaskManager'
import { ThemeProvider } from './components/ThemeContext' // Ensures ThemeProvider is imported

function App() {
  return (
    <ThemeProvider>
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
        <TaskManager />
      </div>
    </Layout>
    </ThemeProvider>
  )
}

export default App
