import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Plus, Filter, Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { format } from 'date-fns'
import { ar } from 'date-fns/locale'

const reservations = [
  {
    id: 1,
    studentName: 'أحمد محمد الأمين',
    studentId: 'STU001',
    roomNumber: '205A',
    roomType: 'غرفة فردية',
    startDate: new Date('2024-09-01'),
    endDate: new Date('2025-06-30'),
    status: 'مؤكدة',
    amount: 1500,
    paymentStatus: 'مدفوعة',
    createdAt: new Date('2024-08-15'),
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 2,
    studentName: 'فاطمة بن علي',
    studentId: 'STU002',
    roomNumber: '108B',
    roomType: 'غرفة مزدوجة',
    startDate: new Date('2024-09-15'),
    endDate: new Date('2025-06-30'),
    status: 'قيد المراجعة',
    amount: 1200,
    paymentStatus: 'معلقة',
    createdAt: new Date('2024-08-20'),
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 3,
    studentName: 'محمد الطاهر',
    studentId: 'STU003',
    roomNumber: '312C',
    roomType: 'غرفة ثلاثية',
    startDate: new Date('2024-10-01'),
    endDate: new Date('2025-06-30'),
    status: 'مرفوضة',
    amount: 900,
    paymentStatus: 'غير مدفوعة',
    createdAt: new Date('2024-08-25'),
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 4,
    studentName: 'سارة الجندوبي',
    studentId: 'STU004',
    roomNumber: '201A',
    roomType: 'غرفة فردية',
    startDate: new Date('2024-09-01'),
    endDate: new Date('2025-06-30'),
    status: 'مؤكدة',
    amount: 1500,
    paymentStatus: 'مدفوعة',
    createdAt: new Date('2024-08-10'),
    avatar: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 5,
    studentName: 'يوسف الهادي',
    studentId: 'STU005',
    roomNumber: '405D',
    roomType: 'جناح',
    startDate: new Date('2024-09-10'),
    endDate: new Date('2025-06-30'),
    status: 'قيد المراجعة',
    amount: 2000,
    paymentStatus: 'معلقة',
    createdAt: new Date('2024-08-28'),
    avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
]

const Reservations = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('الكل')
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState('الكل')

  const filteredReservations = reservations.filter(reservation => {
    const matchesSearch = reservation.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reservation.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reservation.roomNumber.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'الكل' || reservation.status === selectedStatus
    const matchesPayment = selectedPaymentStatus === 'الكل' || reservation.paymentStatus === selectedPaymentStatus
    return matchesSearch && matchesStatus && matchesPayment
  })

  const getStatusIcon = (status) => {
    switch (status) {
      case 'مؤكدة':
        return <CheckCircle className="w-5 h-5 text-success" />
      case 'مرفوضة':
        return <XCircle className="w-5 h-5 text-error" />
      case 'قيد المراجعة':
        return <AlertCircle className="w-5 h-5 text-warning" />
      default:
        return <Clock className="w-5 h-5 text-textSecondary" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'مؤكدة':
        return 'bg-success/20 text-success'
      case 'مرفوضة':
        return 'bg-error/20 text-error'
      case 'قيد المراجعة':
        return 'bg-warning/20 text-warning'
      default:
        return 'bg-textSecondary/20 text-textSecondary'
    }
  }

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'مدفوعة':
        return 'bg-success/20 text-success'
      case 'غير مدفوعة':
        return 'bg-error/20 text-error'
      case 'معلقة':
        return 'bg-warning/20 text-warning'
      default:
        return 'bg-textSecondary/20 text-textSecondary'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">إدارة الحجوزات</h1>
          <p className="text-textSecondary">متابعة طلبات الحجز وحالات الدفع</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          حجز جديد
        </motion.button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-2xl font-bold text-white">{reservations.length}</p>
          <p className="text-textSecondary text-sm">إجمالي الحجوزات</p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-2xl font-bold text-success">{reservations.filter(r => r.status === 'مؤكدة').length}</p>
          <p className="text-textSecondary text-sm">حجوزات مؤكدة</p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-2xl font-bold text-warning">{reservations.filter(r => r.status === 'قيد المراجعة').length}</p>
          <p className="text-textSecondary text-sm">قيد المراجعة</p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-2xl font-bold text-primary">
            {reservations.reduce((sum, r) => sum + r.amount, 0).toLocaleString()} د.ت
          </p>
          <p className="text-textSecondary text-sm">إجمالي الإيرادات</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-surface rounded-2xl p-6 border border-border">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-textSecondary" />
            <input
              type="text"
              placeholder="البحث في الحجوزات..."
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
              <option value="مؤكدة">مؤكدة</option>
              <option value="قيد المراجعة">قيد المراجعة</option>
              <option value="مرفوضة">مرفوضة</option>
            </select>
            <select
              value={selectedPaymentStatus}
              onChange={(e) => setSelectedPaymentStatus(e.target.value)}
              className="bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            >
              <option value="الكل">جميع المدفوعات</option>
              <option value="مدفوعة">مدفوعة</option>
              <option value="معلقة">معلقة</option>
              <option value="غير مدفوعة">غير مدفوعة</option>
            </select>
            <button className="bg-background border border-border rounded-xl px-4 py-3 hover:bg-border transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Reservations List */}
      <div className="space-y-4">
        {filteredReservations.map((reservation, index) => (
          <motion.div
            key={reservation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface rounded-2xl p-6 border border-border card-hover"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              {/* Student Info */}
              <div className="flex items-center gap-4 flex-1">
                <img
                  src={reservation.avatar}
                  alt={reservation.studentName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-white">{reservation.studentName}</h3>
                  <p className="text-sm text-textSecondary">{reservation.studentId}</p>
                </div>
              </div>

              {/* Room Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-white">غرفة {reservation.roomNumber}</span>
                </div>
                <p className="text-sm text-textSecondary">{reservation.roomType}</p>
              </div>

              {/* Dates */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-textSecondary" />
                  <span className="text-sm text-white">
                    {format(reservation.startDate, 'dd/MM/yyyy', { locale: ar })}
                  </span>
                </div>
                <p className="text-xs text-textSecondary">
                  إلى {format(reservation.endDate, 'dd/MM/yyyy', { locale: ar })}
                </p>
              </div>

              {/* Amount */}
              <div className="flex-1">
                <p className="text-lg font-bold text-white">{reservation.amount.toLocaleString()} د.ت</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(reservation.paymentStatus)}`}>
                  {reservation.paymentStatus}
                </span>
              </div>

              {/* Status & Actions */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {getStatusIcon(reservation.status)}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(reservation.status)}`}>
                    {reservation.status}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  {reservation.status === 'قيد المراجعة' && (
                    <>
                      <button className="bg-success hover:bg-success/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        قبول
                      </button>
                      <button className="bg-error hover:bg-error/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        رفض
                      </button>
                    </>
                  )}
                  <button className="bg-background hover:bg-border text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    تفاصيل
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Reservations
