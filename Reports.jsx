import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Calendar, TrendingUp, Users, Building, CreditCard, BarChart3 } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts'

const monthlyRevenue = [
  { month: 'يناير', revenue: 45000, students: 120, occupancy: 85 },
  { month: 'فبراير', revenue: 48000, students: 125, occupancy: 88 },
  { month: 'مارس', revenue: 52000, students: 135, occupancy: 92 },
  { month: 'أبريل', revenue: 49000, students: 128, occupancy: 89 },
  { month: 'مايو', revenue: 54000, students: 140, occupancy: 95 },
  { month: 'يونيو', revenue: 56000, students: 145, occupancy: 97 }
]

const roomTypeDistribution = [
  { name: 'غرفة فردية', value: 45, color: '#9E7FFF' },
  { name: 'غرفة مزدوجة', value: 35, color: '#38bdf8' },
  { name: 'غرفة ثلاثية', value: 15, color: '#f472b6' },
  { name: 'جناح', value: 5, color: '#10b981' }
]

const paymentMethods = [
  { name: 'بطاقة ائتمان', value: 60, color: '#9E7FFF' },
  { name: 'تحويل بنكي', value: 30, color: '#38bdf8' },
  { name: 'نقداً', value: 10, color: '#f472b6' }
]

const occupancyTrend = [
  { month: 'يناير', rate: 85 },
  { month: 'فبراير', rate: 88 },
  { month: 'مارس', rate: 92 },
  { month: 'أبريل', rate: 89 },
  { month: 'مايو', rate: 95 },
  { month: 'يونيو', rate: 97 }
]

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6 أشهر')
  const [selectedReport, setSelectedReport] = useState('الكل')

  const reportTypes = [
    { id: 'revenue', name: 'تقرير الإيرادات', icon: TrendingUp, color: 'from-primary to-secondary' },
    { id: 'occupancy', name: 'تقرير الإشغال', icon: Building, color: 'from-secondary to-accent' },
    { id: 'students', name: 'تقرير الطلبة', icon: Users, color: 'from-accent to-primary' },
    { id: 'payments', name: 'تقرير المدفوعات', icon: CreditCard, color: 'from-success to-secondary' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">التقارير والإحصائيات</h1>
          <p className="text-textSecondary">تحليل شامل لأداء المبيت والإحصائيات المالية</p>
        </div>
        <div className="flex gap-2">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
          >
            <option value="شهر واحد">شهر واحد</option>
            <option value="3 أشهر">3 أشهر</option>
            <option value="6 أشهر">6 أشهر</option>
            <option value="سنة">سنة</option>
          </select>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-colors"
          >
            <Download className="w-5 h-5" />
            تصدير التقرير
          </motion.button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reportTypes.map((report, index) => {
          const Icon = report.icon
          return (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface rounded-2xl p-6 border border-border hover-glow card-hover cursor-pointer"
              onClick={() => setSelectedReport(report.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${report.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <BarChart3 className="w-5 h-5 text-textSecondary" />
              </div>
              <h3 className="font-bold text-white mb-2">{report.name}</h3>
              <p className="text-textSecondary text-sm">انقر لعرض التفاصيل</p>
            </motion.div>
          )
        })}
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-surface rounded-2xl p-6 border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">الإيرادات الشهرية</h3>
            <div className="flex items-center gap-2 text-success">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+12%</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyRevenue}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9E7FFF" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#9E7FFF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2F2F2F" />
              <XAxis dataKey="month" stroke="#A3A3A3" />
              <YAxis stroke="#A3A3A3" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#262626',
                  border: '1px solid #2F2F2F',
                  borderRadius: '12px',
                  color: '#FFFFFF'
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#9E7FFF"
                fillOpacity={1}
                fill="url(#revenueGradient)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Occupancy Rate */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-surface rounded-2xl p-6 border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">معدل الإشغال</h3>
            <div className="flex items-center gap-2 text-success">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">97%</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={occupancyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2F2F2F" />
              <XAxis dataKey="month" stroke="#A3A3A3" />
              <YAxis stroke="#A3A3A3" domain={[80, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#262626',
                  border: '1px solid #2F2F2F',
                  borderRadius: '12px',
                  color: '#FFFFFF'
                }}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#38bdf8"
                strokeWidth={3}
                dot={{ fill: '#38bdf8', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: '#38bdf8', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Distribution Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Room Type Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-surface rounded-2xl p-6 border border-border"
        >
          <h3 className="text-xl font-bold text-white mb-6">توزيع أنواع الغرف</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={roomTypeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {roomTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#262626',
                    border: '1px solid #2F2F2F',
                    borderRadius: '12px',
                    color: '#FFFFFF'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {roomTypeDistribution.map((type, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: type.color }}
                ></div>
                <span className="text-sm text-textSecondary">{type.name}</span>
                <span className="text-sm font-medium text-white">{type.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-surface rounded-2xl p-6 border border-border"
        >
          <h3 className="text-xl font-bold text-white mb-6">طرق الدفع المستخدمة</h3>
          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{method.name}</span>
                  <span className="text-textSecondary">{method.value}%</span>
                </div>
                <div className="w-full bg-background rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${method.value}%` }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                    className="h-2 rounded-full"
                    style={{ backgroundColor: method.color }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-background rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-textSecondary">إجمالي المعاملات هذا الشهر</span>
              <span className="text-xl font-bold text-white">1,247</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8" />
            <span className="text-sm opacity-90">هذا الشهر</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">56,000 د.ت</h3>
          <p className="opacity-90">إجمالي الإيرادات</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm">+12% من الشهر الماضي</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-secondary to-accent rounded-2xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <Building className="w-8 h-8" />
            <span className="text-sm opacity-90">معدل الإشغال</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">97%</h3>
          <p className="opacity-90">من إجمالي الغرف</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm">+3% من الشهر الماضي</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-br from-accent to-primary rounded-2xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8" />
            <span className="text-sm opacity-90">الطلبة النشطون</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">1,247</h3>
          <p className="opacity-90">طالب مقيم</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm">+8% من الشهر الماضي</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Reports
