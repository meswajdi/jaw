import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Plus, Filter, MoreVertical, Edit, Trash2, Eye, Phone, Mail } from 'lucide-react'

const students = [
  {
    id: 1,
    name: 'أحمد محمد الأمين',
    studentId: 'STU001',
    email: 'ahmed.amine@email.com',
    phone: '+216 98 123 456',
    room: '205A',
    status: 'نشط',
    university: 'جامعة تونس',
    year: 'السنة الثالثة',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'فاطمة بن علي',
    studentId: 'STU002',
    email: 'fatima.benali@email.com',
    phone: '+216 97 234 567',
    room: '108B',
    status: 'نشط',
    university: 'جامعة المنار',
    year: 'السنة الثانية',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'محمد الطاهر',
    studentId: 'STU003',
    email: 'mohamed.taher@email.com',
    phone: '+216 96 345 678',
    room: '312C',
    status: 'معلق',
    university: 'جامعة قرطاج',
    year: 'السنة الأولى',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 4,
    name: 'سارة الجندوبي',
    studentId: 'STU004',
    email: 'sara.jendoubi@email.com',
    phone: '+216 95 456 789',
    room: '201A',
    status: 'نشط',
    university: 'جامعة صفاقس',
    year: 'السنة الرابعة',
    avatar: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 5,
    name: 'يوسف الهادي',
    studentId: 'STU005',
    email: 'youssef.hadi@email.com',
    phone: '+216 94 567 890',
    room: '405D',
    status: 'نشط',
    university: 'جامعة سوسة',
    year: 'السنة الثالثة',
    avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
]

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('الكل')
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.studentId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'الكل' || student.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">إدارة الطلبة</h1>
          <p className="text-textSecondary">إدارة بيانات الطلبة المقيمين في المبيت</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddModal(true)}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          إضافة طالب جديد
        </motion.button>
      </div>

      {/* Filters */}
      <div className="bg-surface rounded-2xl p-6 border border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-textSecondary" />
            <input
              type="text"
              placeholder="البحث عن طالب..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-background border border-border rounded-xl pr-12 pl-4 py-3 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            >
              <option value="الكل">جميع الحالات</option>
              <option value="نشط">نشط</option>
              <option value="معلق">معلق</option>
              <option value="متخرج">متخرج</option>
            </select>
            <button className="bg-background border border-border rounded-xl px-4 py-3 hover:bg-border transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student, index) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface rounded-2xl p-6 border border-border card-hover"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-white">{student.name}</h3>
                  <p className="text-sm text-textSecondary">{student.studentId}</p>
                </div>
              </div>
              <div className="relative">
                <button className="p-2 hover:bg-background rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-textSecondary" />
                <span className="text-textSecondary">{student.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-textSecondary" />
                <span className="text-textSecondary">{student.phone}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-textSecondary">الغرفة:</span>
                <span className="text-white font-medium">{student.room}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-textSecondary">الجامعة:</span>
                <span className="text-white">{student.university}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-textSecondary">السنة:</span>
                <span className="text-white">{student.year}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                student.status === 'نشط' 
                  ? 'bg-success/20 text-success' 
                  : student.status === 'معلق'
                  ? 'bg-warning/20 text-warning'
                  : 'bg-error/20 text-error'
              }`}>
                {student.status}
              </span>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-background rounded-lg transition-colors">
                  <Eye className="w-4 h-4 text-textSecondary hover:text-primary" />
                </button>
                <button className="p-2 hover:bg-background rounded-lg transition-colors">
                  <Edit className="w-4 h-4 text-textSecondary hover:text-secondary" />
                </button>
                <button className="p-2 hover:bg-background rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-textSecondary hover:text-error" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-surface rounded-xl p-4 border border-border text-center">
          <p className="text-2xl font-bold text-primary">{students.length}</p>
          <p className="text-textSecondary text-sm">إجمالي الطلبة</p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-border text-center">
          <p className="text-2xl font-bold text-success">{students.filter(s => s.status === 'نشط').length}</p>
          <p className="text-textSecondary text-sm">طلبة نشطون</p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-border text-center">
          <p className="text-2xl font-bold text-warning">{students.filter(s => s.status === 'معلق').length}</p>
          <p className="text-textSecondary text-sm">طلبة معلقون</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Students
