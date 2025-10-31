import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Plus, Filter, Download, CreditCard, Calendar, TrendingUp } from 'lucide-react'
import { format } from 'date-fns'
import { ar } from 'date-fns/locale'

const payments = [
  {
    id: 1,
    studentName: 'أحمد محمد الأمين',
    studentId: 'STU001',
    roomNumber: '205A',
    amount: 150,
    type: 'رسوم شهرية',
    method: 'بطاقة ائتمان',
    status: 'مكتملة',
    date: new Date('2024-01-15'),
    transactionId: 'TXN001',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 2,
    studentName: 'فاطمة بن علي',
    studentId: 'STU002',
    roomNumber: '108B',
    amount: 120,
    type: 'رسوم شهرية',
    method: 'تحويل بنكي',
    status: 'معلقة',
    date: new Date('2024-01-14'),
    transactionId: 'TXN002',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 3,
    studentName: 'محمد الطاهر',
    studentId: 'STU003',
    roomNumber: '312C',
    amount: 100,
    type: 'رسوم شهرية',
    method: 'نقداً',
    status: 'مكتملة',
    date: new Date('2024-01-13'),
    transactionId: 'TXN003',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 4,
    studentName: 'سارة الجندوبي',
    studentId: 'STU004',
    roomNumber: '201A',
    amount: 50,
    type: 'رسوم إضافية',
    method: 'بطاقة ائتمان',
    status: 'فاشلة',
    date: new Date('2024-01-12'),
    transactionId: 'TXN004',
    avatar: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 5,
    studentName: 'يوسف الهادي',
    studentId: 'STU005',
    roomNumber: '405D',
    amount: 200,
    type: 'رسوم شهرية',
    method: 'تحويل بنكي',
    status: 'مكتملة',
    date: new Date('2024-01-11'),
    transactionId: 'TXN005',
    avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 6,
    studentName: 'أمينة الكريم',
    studentId: 'STU006',
    roomNumber: '103A',
    amount: 150,
    type: 'رسوم شهرية',
    method: 'بطاقة ائتمان',
    status: 'مكتملة',
    date: new Date('2024-01-10'),
    transactionId: 'TXN006',
    avatar: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
]

const Payments = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('الكل')
  const [selectedMethod, setSelectedMethod] = useState('الكل')

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'الكل' || payment.status === selectedStatus
    const matchesMethod = selectedMethod === 'الكل' || payment.method === selectedMethod
    return matchesSearch && matchesStatus && matchesMethod
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'مكتملة':
        return 'bg-success/20 text-success'
      case 'معلقة':
        return 'bg-warning/20 text-warning'
      case 'فاشلة':
        return 'bg-error/20 text-error'
      default:
        return 'bg-textSecondary/20 text-textSecondary'
    }
  }

  const getMethodIcon = (method) => {
    switch (method) {
      case 'بطاقة ائتمان':
        return <CreditCard className="w-4 h-4" />
      case 'تحويل بنكي':
        return <TrendingUp className="w-4 h-4" />
      default:
        return <CreditCard className="w-4 h-4" />
    }
  }

  const totalAmount = filteredPayments.reduce((sum, payment) => sum + payment.amount, 0)
  const completedPayments = filteredPayments.filter(p => p.status === 'مكتملة')
  const pendingPayments = filteredPayments.filter(p => p.status === 'معلقة')
  const failedPayments = filteredPayments.filter(p => p.status === 'فاشلة')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">إدارة المدفوعات</h1>
          <p className="text-textSecondary">متابعة المدفوعات والمعاملات المالية</p>
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-colors"
          >
            <Download className="w-5 h-5" />
            تصدير التقرير
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-colors"
          >
            <Plus className="w-5 h-5" />
            إضافة دفعة
          </motion.button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-2xl font-bold text-white">{totalAmount.toLocaleString()} د.ت</p>
          <p className="text-textSecondary text-sm">إجمالي المدفوعات</p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-2xl font-bold text-success">{completedPayments.length}</p>
          <p className="text-textSecondary text-sm">مدفوعات مكتملة</p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-2xl font-bold text-warning">{pendingPayments.length}</p>
          <p className="text-textSecondary text-sm">مدفوعات معلقة</p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-2xl font-bold text-error">{failedPayments.length}</p>
          <p className="text-textSecondary text-sm">مدفوعات فاشلة</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-surface rounded-2xl p-6 border border-border">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-textSecondary" />
            <input
              type="text"
              placeholder="البحث في المدفوعات..."
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
              <option value="مكتملة">مكتملة</option>
              <option value="معلقة">معلقة</option>
              <option value="فاشلة">فاشلة</option>
            </select>
            <select
              value={selectedMethod}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            >
              <option value="الكل">جميع الطرق</option>
              <option value="بطاقة ائتمان">بطاقة ائتمان</option>
              <option value="تحويل بنكي">تحويل بنكي</option>
              <option value="نقداً">نقداً</option>
            </select>
            <button className="bg-background border border-border rounded-xl px-4 py-3 hover:bg-border transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-surface rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background">
              <tr>
                <th className="text-right p-4 font-medium text-textSecondary">الطالب</th>
                <th className="text-right p-4 font-medium text-textSecondary">الغرفة</th>
                <th className="text-right p-4 font-medium text-textSecondary">المبلغ</th>
                <th className="text-right p-4 font-medium text-textSecondary">النوع</th>
                <th className="text-right p-4 font-medium text-textSecondary">طريقة الدفع</th>
                <th className="text-right p-4 font-medium text-textSecondary">التاريخ</th>
                <th className="text-right p-4 font-medium text-textSecondary">الحالة</th>
                <th className="text-right p-4 font-medium text-textSecondary">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment, index) => (
                <motion.tr
                  key={payment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-t border-border hover:bg-background/50 transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={payment.avatar}
                        alt={payment.studentName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-white">{payment.studentName}</p>
                        <p className="text-sm text-textSecondary">{payment.studentId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-medium text-white">{payment.roomNumber}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-bold text-white">{payment.amount.toLocaleString()} د.ت</span>
                  </td>
                  <td className="p-4">
                    <span className="text-textSecondary">{payment.type}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {getMethodIcon(payment.method)}
                      <span className="text-textSecondary">{payment.method}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-textSecondary" />
                      <span className="text-textSecondary">
                        {format(payment.date, 'dd/MM/yyyy', { locale: ar })}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="bg-background hover:bg-border text-white px-3 py-1 rounded-lg text-sm transition-colors">
                        عرض
                      </button>
                      {payment.status === 'معلقة' && (
                        <button className="bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                          تأكيد
                        </button>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
}

export default Payments
