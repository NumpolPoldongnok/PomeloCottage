<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { ROOM_INFO, CONTACT_INFO, SITE_CONFIG } from '../constants'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const checkInDate = ref('')
const checkOutDate = ref('')
const guestCount = ref(2)

// Set minimum date to today
const today = new Date().toISOString().split('T')[0]

// Calculate minimum checkout date (day after checkin)
const minCheckoutDate = computed(() => {
  if (!checkInDate.value) return today
  const date = new Date(checkInDate.value)
  date.setDate(date.getDate() + 1)
  return date.toISOString().split('T')[0]
})

// Calculate number of nights
const numberOfNights = computed(() => {
  if (!checkInDate.value || !checkOutDate.value) return 0
  const start = new Date(checkInDate.value)
  const end = new Date(checkOutDate.value)
  const diff = end.getTime() - start.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
})

// Calculate total price
const totalPrice = computed(() => {
  return numberOfNights.value * ROOM_INFO.pricePerNight
})

// Format date for Thai display
const formatThaiDate = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('th-TH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Reset checkout if it's before checkin
watch(checkInDate, (newVal) => {
  if (checkOutDate.value && new Date(checkOutDate.value) <= new Date(newVal)) {
    checkOutDate.value = ''
  }
})

// Generate booking message
const generateBookingMessage = () => {
  const message = `สวัสดีค่ะ/ครับ 🍊

ต้องการจองที่พัก ${SITE_CONFIG.name}

📅 วันเช็คอิน: ${formatThaiDate(checkInDate.value)}
📅 วันเช็คเอาท์: ${formatThaiDate(checkOutDate.value)}
🌙 จำนวน: ${numberOfNights.value} คืน
👥 จำนวนผู้เข้าพัก: ${guestCount.value} ท่าน
💰 ราคารวม: ฿${totalPrice.value.toLocaleString()}

ขอบคุณค่ะ/ครับ`

  return encodeURIComponent(message)
}

// Open Line with message
const bookViaLine = () => {
  if (!checkInDate.value || !checkOutDate.value) {
    alert('กรุณาเลือกวันเช็คอิน-เช็คเอาท์')
    return
  }
  const message = generateBookingMessage()
  window.open(`https://line.me/R/oaMessage/${CONTACT_INFO.lineId.replace('@', '')}/?${message}`, '_blank')
}

// Open Facebook Messenger with message
const bookViaFacebook = () => {
  if (!checkInDate.value || !checkOutDate.value) {
    alert('กรุณาเลือกวันเช็คอิน-เช็คเอาท์')
    return
  }
  window.open(CONTACT_INFO.facebookUrl, '_blank')
}

// Close on escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition
    appear
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div class="modal-backdrop" @click.self="emit('close')">
      <Transition
        appear
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 scale-90 translate-y-4"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-90 translate-y-4"
      >
        <div class="modal-content">
          <!-- Header -->
          <div class="bg-gradient-to-r from-ocean-blue to-sky-blue p-6 text-white">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold">จองที่พัก</h2>
                <p class="text-white/80">{{ ROOM_INFO.name }}</p>
              </div>
              <button
                @click="emit('close')"
                class="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Body -->
          <div class="p-6 space-y-6">
            <!-- Date Picker -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  วันเช็คอิน
                </label>
                <input
                  v-model="checkInDate"
                  type="date"
                  :min="today"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-blue focus:border-ocean-blue transition-all"
                />
                <p v-if="checkInDate" class="text-sm text-gray-500 mt-1">
                  {{ formatThaiDate(checkInDate) }}
                </p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  วันเช็คเอาท์
                </label>
                <input
                  v-model="checkOutDate"
                  type="date"
                  :min="minCheckoutDate"
                  :disabled="!checkInDate"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-blue focus:border-ocean-blue transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <p v-if="checkOutDate" class="text-sm text-gray-500 mt-1">
                  {{ formatThaiDate(checkOutDate) }}
                </p>
              </div>
            </div>

            <!-- Guest Count -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                จำนวนผู้เข้าพัก
              </label>
              <div class="flex items-center gap-4">
                <button
                  @click="guestCount = Math.max(1, guestCount - 1)"
                  class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                  </svg>
                </button>
                <span class="text-2xl font-bold text-gray-800 w-12 text-center">{{ guestCount }}</span>
                <button
                  @click="guestCount = Math.min(ROOM_INFO.maxGuests, guestCount + 1)"
                  class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <span class="text-sm text-gray-500">(สูงสุด {{ ROOM_INFO.maxGuests }} ท่าน)</span>
              </div>
            </div>

            <!-- Summary -->
            <div v-if="numberOfNights > 0" class="bg-cream rounded-xl p-4 space-y-2">
              <div class="flex justify-between text-gray-600">
                <span>ราคาต่อคืน</span>
                <span>฿{{ ROOM_INFO.pricePerNight.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>จำนวนคืน</span>
                <span>{{ numberOfNights }} คืน</span>
              </div>
              <hr class="border-gray-300" />
              <div class="flex justify-between text-lg font-bold text-gray-800">
                <span>ราคารวม</span>
                <span class="text-pomelo-orange">฿{{ totalPrice.toLocaleString() }}</span>
              </div>
            </div>

            <!-- Booking Buttons -->
            <div class="space-y-3">
              <button
                @click="bookViaLine"
                :disabled="!checkInDate || !checkOutDate"
                class="w-full py-4 bg-[#00B900] hover:bg-[#00A000] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                จองผ่าน Line
              </button>
              <button
                @click="bookViaFacebook"
                :disabled="!checkInDate || !checkOutDate"
                class="w-full py-4 bg-[#1877F2] hover:bg-[#1565C0] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                จองผ่าน Facebook
              </button>
            </div>

            <p class="text-center text-sm text-gray-500">
              หลังกดจอง ระบบจะสร้างข้อความอัตโนมัติส่งไปยัง Line/Facebook
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
</style>
