import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import Rooms from './pages/Rooms'
import Reservations from './pages/Reservations'
import Payments from './pages/Payments'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:mr-64' : 'lg:mr-20'}`}>
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          
          <main className="p-6">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
