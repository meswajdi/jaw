import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Home,
  Users,
  Building,
  Calendar,
  CreditCard,
  BarChart3,
  Settings,
  GraduationCap,
  X
} from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'لوحة التحكم', path: '/' },
  { icon: Users, label: 'الطلبة', path: '/students' },
  { icon: Building, label: 'الغرف', path: '/rooms' },
  { icon: Calendar, label: 'الحجوزات', path: '/reservations' },
  { icon: CreditCard, label: 'المدفوعات', path: '/payments' },
  { icon: BarChart3, label: 'التقارير', path: '/reports' },
  { icon: Settings, label: 'الإعدادات', path: '/settings' }
]

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation()

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{
          width: isOpen ? 256 : 80,
          x: 0
        }}
        className={`fixed right-0 top-0 h-full bg-surface border-l border-border z-50 transition-all duration-300`}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <h1 className="text-lg font-bold text-gradient">إدارة المبيتات</h1>
                <p className="text-xs text-textSecondary">الجامعات التونسية</p>
              </motion.div>
            )}
            {isOpen && (
              <button
                onClick={() => setIsOpen(false)}
                className="lg:hidden absolute top-4 left-4 p-2 hover:bg-background rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-primary text-white shadow-lg'
                      : 'hover:bg-background text-textSecondary hover:text-white'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'group-hover:text-primary'}`} />
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="font-medium"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* User Profile */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-6 right-6 left-6"
          >
            <div className="glass-effect rounded-xl p-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="المدير"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm">أحمد بن علي</p>
                  <p className="text-xs text-textSecondary">مدير المبيت</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  )
}

export default Sidebar
