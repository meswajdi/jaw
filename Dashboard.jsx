import React from 'react'
import { motion } from 'framer-motion'
import { Users, Building, Calendar, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const stats = [
  {
    title: 'إجمالي الطلبة',
    value: '1,247',
    change: '+12%',
    icon: Users,
    color: 'from-primary to-secondary'
  },
  {
    title: 'الغرف المتاحة',
    value: '89',
    change: '-5%',
    icon: Building,
    color: 'from-secondary to-accent'
  },
  {
    title: 'الحجوزات الجديدة',
    value: '34',
    change: '+8%',
    icon: Calendar,
    color: 'from-accent to-primary'
  },
  {
    title: 'معدل الإشغال',
    value: '87%',
    change: '+3%',
    icon: TrendingUp,
    color: 'from-success to-secondary'
  }
]

const monthlyData = [
  { month: 'يناير', students: 1100, revenue: 45000 },
  { month: 'فبراير', students: 1150, revenue: 48000 },
  { month: 'مارس', students: 1200, revenue: 52000 },
  { month: 'أبريل', students: 1180, revenue: 49000 },
  { month: 'مايو', students: 1220, revenue: 54000 },
  { month: 'يونيو', students: 1247, revenue: 56000 }
]

const roomTypes = [
  { name: 'غرفة فردية', value: 45, color: '#9E7FFF' },
  { name: 'غرفة مزدوجة', value: 35, color: '#38bdf8' },
  { name: 'غرفة ثلاثية', value: 15, color: '#f472b6' },
  { name: 'جناح', value: 5, color: '#10b981' }
]

const recentActivities = [
  {
    id: 1,
    type: 'success',
    message: 'تم تسجيل طالب جديد: محمد الأمين',
    time: 'منذ 5 دقائق'
  },
  {
    id: 2,
    type: 'warning',
    message: 'طلب صيانة للغرفة رقم 205',
    time: 'منذ 15 دقيقة'
  },
  {
    id: 3,
    type: 'success',
    message: 'تم دفع رسوم الإقامة - سارة بن علي',
    time: 'منذ 30 دقيقة'
  },
  {
    id: 4,
    type: 'info',
    message: 'حجز جديد للفصل القادم',
    time: 'منذ ساعة'
  }
]

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-l from-primary via-secondary to-accent p-8">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-white mb-2"
          >
            مرحباً بك في نظام إدارة المبيتات
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg"
          >
            إدارة شاملة وفعالة لشؤون الطلبة في المبيتات الجامعية
          </motion.p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img
            src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="University"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface rounded-2xl p-6 border border-border hover-glow card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-success' : 'text-error'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-textSecondary text-sm">{stat.title}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Statistics */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-surface rounded-2xl p-6 border border-border"
        >
          <h3 className="text-xl font-bold text-white mb-6">إحصائيات شهرية</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
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
              <Bar dataKey="students" fill="#9E7FFF" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Room Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-surface rounded-2xl p-6 border border-border"
        >
          <h3 className="text-xl font-bold text-white mb-6">توزيع أنواع الغرف</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={roomTypes}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {roomTypes.map((entry, index) => (
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
          <div className="grid grid-cols-2 gap-4 mt-4">
            {roomTypes.map((type, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: type.color }}
                ></div>
                <span className="text-sm text-textSecondary">{type.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Activities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-surface rounded-2xl p-6 border border-border"
      >
        <h3 className="text-xl font-bold text-white mb-6">الأنشطة الأخيرة</h3>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4 p-4 bg-background rounded-xl">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activity.type === 'success' ? 'bg-success/20' :
                activity.type === 'warning' ? 'bg-warning/20' :
                'bg-secondary/20'
              }`}>
                {activity.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-success" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-warning" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">{activity.message}</p>
                <p className="text-textSecondary text-sm">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Dashboard
