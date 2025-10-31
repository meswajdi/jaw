import React from 'react'
import { motion } from 'framer-motion'
import { Menu, Bell, Search, MessageSquare } from 'lucide-react'

const Header = ({ onMenuClick }) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-surface border-b border-border p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-background rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input
              type="text"
              placeholder="البحث..."
              className="bg-background border border-border rounded-xl pr-10 pl-4 py-2 w-64 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 hover:bg-background rounded-lg transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -left-1 w-3 h-3 bg-accent rounded-full"></span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 hover:bg-background rounded-lg transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -left-1 w-3 h-3 bg-error rounded-full"></span>
          </motion.button>

          <div className="text-left">
            <p className="text-sm font-medium">مرحباً، أحمد</p>
            <p className="text-xs text-textSecondary">
              {new Date().toLocaleDateString('ar-TN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
