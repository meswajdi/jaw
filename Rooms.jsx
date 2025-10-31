import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Plus, Filter, Bed, Users, Wifi, Car, Coffee, Tv } from 'lucide-react'

const rooms = [
  {
    id: 1,
    number: '101A',
    type: 'غرفة فردية',
    floor: 1,
    capacity: 1,
    occupied: 1,
    status: 'مشغولة',
    price: 150,
    amenities: ['wifi', 'bed', 'desk'],
    student: 'أحمد محمد الأمين',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    number: '102B',
    type: 'غرفة مزدوجة',
    floor: 1,
    capacity: 2,
    occupied: 1,
    status: 'متاحة جزئياً',
    price: 120,
    amenities: ['wifi', 'bed', 'desk', 'tv'],
    student: 'فاطمة بن علي',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    number: '201A',
    type: 'غرفة فردية',
    floor: 2,
    capacity: 1,
    occupied: 0,
    status: 'متاحة',
    price: 150,
    amenities: ['wifi', 'bed', 'desk', 'coffee'],
    student: null,
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    number: '202C',
    type: 'غرفة ثلاثية',
    floor: 2,
    capacity: 3,
    occupied: 3,
    status: 'مشغولة',
    price: 100,
    amenities: ['wifi', 'bed', 'desk', 'tv', 'coffee'],
    student: 'محمد الطاهر وآخرون',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    number: '301D',
    type: 'جناح',
    floor: 3,
    capacity: 4,
    occupied: 2,
    status: 'متاحة جزئياً',
    price: 200,
    amenities: ['wifi', 'bed', 'desk', 'tv', 'coffee', 'parking'],
    student: 'سارة الجندوبي وآخرون',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 6,
    number: '302A',
    type: 'غرفة فردية',
    floor: 3,
    capacity: 1,
    occupied: 0,
    status: 'صيانة',
    price: 150,
    amenities: ['wifi', 'bed', 'desk'],
    student: null,
    image: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
]

const amenityIcons = {
  wifi: Wifi,
  bed: Bed,
  desk: Users,
  tv: Tv,
  coffee: Coffee,
  parking: Car
}

const Rooms = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('الكل')
  const [selectedFloor, setSelectedFloor] = useState('الكل')

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'الكل' || room.status === selectedStatus
    const matchesFloor = selectedFloor === 'الكل' || room.floor.toString() === selectedFloor
    return matchesSearch && matchesStatus && matchesFloor
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'متاحة':
        return 'bg-success/20 text-success'
      case 'مشغولة':
        return 'bg-error/20 text-error'
      case 'متاحة جزئياً':
        return 'bg-warning/20 text-warning'
      case 'صيانة':
        return 'bg-textSecondary/20 text-textSecondary'
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
          <h1 className="text-3xl font-bold text-white">إدارة الغرف</h1>
          <p className="text-textSecondary">إدارة غرف المبيت وحالات الإشغال</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          إضافة غرفة جديدة
        </motion.button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-2xl font-bold text-white">{rooms.length}</p>
          <p className="text-textSecondary text-sm">إجمالي الغرف</p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-2xl font-bold text-success">{rooms.filter(r => r.status === 'متاحة').length}</p>
          <p className="text-textSecondary text-sm">غرف متاحة</p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-2xl font-bold text-error">{rooms.filter(r => r.status === 'مشغولة').length}</p>
          <p className="text-textSecondary text-sm">غرف مشغولة</p>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-2xl font-bold text-warning">{rooms.filter(r => r.status === 'صيانة').length}</p>
          <p className="text-textSecondary text-sm">تحت الصيانة</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-surface rounded-2xl p-6 border border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-textSecondary" />
            <input
              type="text"
              placeholder="البحث عن غرفة..."
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
              <option value="متاحة">متاحة</option>
              <option value="مشغولة">مشغولة</option>
              <option value="متاحة جزئياً">متاحة جزئياً</option>
              <option value="صيانة">صيانة</option>
            </select>
            <select
              value={selectedFloor}
              onChange={(e) => setSelectedFloor(e.target.value)}
              className="bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            >
              <option value="الكل">جميع الطوابق</option>
              <option value="1">الطابق الأول</option>
              <option value="2">الطابق الثاني</option>
              <option value="3">الطابق الثالث</option>
            </select>
            <button className="bg-background border border-border rounded-xl px-4 py-3 hover:bg-border transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface rounded-2xl overflow-hidden border border-border card-hover"
          >
            <div className="relative h-48">
              <img
                src={room.image}
                alt={`غرفة ${room.number}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(room.status)}`}>
                  {room.status}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white font-bold">{room.price} د.ت/شهر</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">غرفة {room.number}</h3>
                  <p className="text-textSecondary">{room.type}</p>
                </div>
                <div className="text-left">
                  <p className="text-sm text-textSecondary">الطابق {room.floor}</p>
                  <p className="text-sm text-white">{room.occupied}/{room.capacity} مشغولة</p>
                </div>
              </div>

              {room.student && (
                <div className="mb-4 p-3 bg-background rounded-lg">
                  <p className="text-sm text-textSecondary">الطالب المقيم:</p>
                  <p className="text-white font-medium">{room.student}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {room.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity]
                  return (
                    <div
                      key={amenity}
                      className="flex items-center gap-1 bg-background px-2 py-1 rounded-lg"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  )
                })}
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-medium transition-colors">
                  عرض التفاصيل
                </button>
                <button className="px-4 py-2 bg-background hover:bg-border rounded-lg transition-colors">
                  تعديل
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Rooms
