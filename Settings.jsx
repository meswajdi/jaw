import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Database, 
  Mail, 
  Phone, 
  MapPin,
  Save,
  Eye,
  EyeOff
} from 'lucide-react'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    reservations: true,
    payments: true,
    maintenance: false
  })

  const tabs = [
    { id: 'profile', label: 'الملف الشخصي', icon: User },
    { id: 'notifications', label: 'الإشعارات', icon: Bell },
    { id: 'security', label: 'الأمان', icon: Shield },
    { id: 'appearance', label: 'المظهر', icon: Palette },
    { id: 'system', label: 'النظام', icon: Database }
  ]

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="الصورة الشخصية"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <button className="absolute bottom-0 left-0 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors">
                  <User className="w-4 h-4" />
                </button>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">أحمد بن علي</h3>
                <p className="text-textSecondary">مدير المبيت الجامعي</p>
                <button className="mt-2 text-primary hover:text-primary/80 text-sm font-medium">
                  تغيير الصورة
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  defaultValue="أحمد بن علي"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">المنصب</label>
                <input
                  type="text"
                  defaultValue="مدير المبيت"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">البريد الإلكتروني</label>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-textSecondary" />
                  <input
                    type="email"
                    defaultValue="ahmed.benali@university.tn"
                    className="w-full bg-background border border-border rounded-xl pr-12 pl-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">رقم الهاتف</label>
                <div className="relative">
                  <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-textSecondary" />
                  <input
                    type="tel"
                    defaultValue="+216 98 123 456"
                    className="w-full bg-background border border-border rounded-xl pr-12 pl-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-2">العنوان</label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-3 w-5 h-5 text-textSecondary" />
                  <textarea
                    defaultValue="المبيت الجامعي، جامعة تونس، تونس العاصمة"
                    rows={3}
                    className="w-full bg-background border border-border rounded-xl pr-12 pl-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">إعدادات الإشعارات</h3>
              <p className="text-textSecondary mb-6">اختر كيفية تلقي الإشعارات</p>
            </div>

            <div className="space-y-4">
              <div className="bg-background rounded-xl p-4">
                <h4 className="font-medium text-white mb-3">طرق الإشعار</h4>
                <div className="space-y-3">
                  {[
                    { key: 'email', label: 'البريد الإلكتروني', desc: 'تلقي الإشعارات عبر البريد الإلكتروني' },
                    { key: 'sms', label: 'الرسائل النصية', desc: 'تلقي الإشعارات عبر الرسائل النصية' },
                    { key: 'push', label: 'إشعارات المتصفح', desc: 'تلقي الإشعارات في المتصفح' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">{item.label}</p>
                        <p className="text-sm text-textSecondary">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications[item.key]}
                          onChange={() => handleNotificationChange(item.key)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background rounded-xl p-4">
                <h4 className="font-medium text-white mb-3">أنواع الإشعارات</h4>
                <div className="space-y-3">
                  {[
                    { key: 'reservations', label: 'الحجوزات الجديدة', desc: 'إشعار عند وصول حجز جديد' },
                    { key: 'payments', label: 'المدفوعات', desc: 'إشعار عند تلقي دفعة جديدة' },
                    { key: 'maintenance', label: 'طلبات الصيانة', desc: 'إشعار عند طلب صيانة' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">{item.label}</p>
                        <p className="text-sm text-textSecondary">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications[item.key]}
                          onChange={() => handleNotificationChange(item.key)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">الأمان وكلمة المرور</h3>
              <p className="text-textSecondary mb-6">إدارة إعدادات الأمان لحسابك</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">كلمة المرور الحالية</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 pl-12 focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">كلمة المرور الجديدة</label>
                <input
                  type="password"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">تأكيد كلمة المرور الجديدة</label>
                <input
                  type="password"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="bg-background rounded-xl p-4">
                <h4 className="font-medium text-white mb-3">المصادقة الثنائية</h4>
                <p className="text-textSecondary text-sm mb-4">
                  أضف طبقة حماية إضافية لحسابك
                </p>
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  تفعيل المصادقة الثنائية
                </button>
              </div>

              <div className="bg-background rounded-xl p-4">
                <h4 className="font-medium text-white mb-3">الجلسات النشطة</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white">المتصفح الحالي</p>
                      <p className="text-sm text-textSecondary">Chrome على Windows - تونس</p>
                    </div>
                    <span className="text-success text-sm">نشط الآن</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white">هاتف محمول</p>
                      <p className="text-sm text-textSecondary">Safari على iOS - تونس</p>
                    </div>
                    <button className="text-error text-sm hover:underline">إنهاء الجلسة</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'appearance':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">المظهر والتخصيص</h3>
              <p className="text-textSecondary mb-6">تخصيص مظهر التطبيق حسب تفضيلاتك</p>
            </div>

            <div className="space-y-4">
              <div className="bg-background rounded-xl p-4">
                <h4 className="font-medium text-white mb-3">السمة</h4>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'dark', name: 'داكن', preview: 'bg-gray-900' },
                    { id: 'light', name: 'فاتح', preview: 'bg-white' },
                    { id: 'auto', name: 'تلقائي', preview: 'bg-gradient-to-r from-gray-900 to-white' }
                  ].map((theme) => (
                    <div key={theme.id} className="text-center">
                      <div className={`w-full h-16 rounded-lg ${theme.preview} border-2 border-primary mb-2`}></div>
                      <p className="text-sm text-white">{theme.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background rounded-xl p-4">
                <h4 className="font-medium text-white mb-3">اللغة</h4>
                <select className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors">
                  <option value="ar">العربية</option>
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                </select>
              </div>

              <div className="bg-background rounded-xl p-4">
                <h4 className="font-medium text-white mb-3">حجم الخط</h4>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-textSecondary">صغير</span>
                  <input
                    type="range"
                    min="12"
                    max="20"
                    defaultValue="16"
                    className="flex-1"
                  />
                  <span className="text-sm text-textSecondary">كبير</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 'system':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">إعدادات النظام</h3>
              <p className="text-textSecondary mb-6">إدارة إعدادات النظام والبيانات</p>
            </div>

            <div className="space-y-4">
              <div className="bg-background rounded-xl p-4">
                <h4 className="font-medium text-white mb-3">النسخ الاحتياطي</h4>
                <p className="text-textSecondary text-sm mb-4">
                  آخر نسخة احتياطية: اليوم في 03:00 ص
                </p>
                <div className="flex gap-2">
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    إنشاء نسخة احتياطية
                  </button>
                  <button className="bg-surface hover:bg-border text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    استعادة البيانات
                  </button>
                </div>
              </div>

              <div className="bg-background rounded-xl p-4">
                <h4 className="font-medium text-white mb-3">تصدير البيانات</h4>
                <p className="text-textSecondary text-sm mb-4">
                  تصدير جميع بيانات النظام بصيغة CSV أو PDF
                </p>
                <div className="flex gap-2">
                  <button className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    تصدير CSV
                  </button>
                  <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    تصدير PDF
                  </button>
                </div>
              </div>

              <div className="bg-background rounded-xl p-4">
                <h4 className="font-medium text-white mb-3">معلومات النظام</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-textSecondary">إصدار النظام:</span>
                    <span className="text-white">v2.1.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-textSecondary">آخر تحديث:</span>
                    <span className="text-white">15 يناير 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-textSecondary">حجم قاعدة البيانات:</span>
                    <span className="text-white">2.4 GB</span>
                  </div>
                </div>
              </div>

              <div className="bg-error/10 border border-error/20 rounded-xl p-4">
                <h4 className="font-medium text-error mb-3">منطقة الخطر</h4>
                <p className="text-textSecondary text-sm mb-4">
                  هذه الإجراءات لا يمكن التراجع عنها
                </p>
                <button className="bg-error hover:bg-error/90 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  حذف جميع البيانات
                </button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">الإعدادات</h1>
        <p className="text-textSecondary">إدارة إعدادات النظام والحساب الشخصي</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-surface rounded-2xl p-4 border border-border">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-background text-textSecondary hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-surface rounded-2xl p-6 border border-border">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderTabContent()}
            </motion.div>

            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex justify-end gap-4">
                <button className="px-6 py-3 bg-background hover:bg-border text-white rounded-xl font-medium transition-colors">
                  إلغاء
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  حفظ التغييرات
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Settings
