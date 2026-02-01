<script setup lang="ts">
import { ROOM_INFO, AMENITIES, IMAGES } from '../constants'

const emit = defineEmits<{
  (e: 'open-booking'): void
  (e: 'open-rules'): void
}>()

const getAmenityIcon = (icon: string) => {
  const icons: Record<string, string> = {
    ac: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />`,
    wifi: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />`,
    cctv: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />`,
    parking: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10h3m4 0h8M5 14h3m4 0h8M3 6h18M3 18h18" />`,
    fridge: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />`,
    kettle: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a4 4 0 014 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-1a4 4 0 014-4zm0 0V4a2 2 0 012-2h4a2 2 0 012 2v6" />`,
  }
  return icons[icon] || icons.wifi
}
</script>

<template>
  <section id="rooms" class="py-20 bg-gradient-to-b from-cream to-sky-blue/10">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-ocean-blue/10 text-ocean-blue rounded-full text-sm font-medium mb-4">
          ที่พักของเรา
        </span>
        <h2 class="section-title">{{ ROOM_INFO.name }}</h2>
        <p class="section-subtitle max-w-2xl mx-auto">{{ ROOM_INFO.description }}</p>
      </div>

      <!-- Room Card -->
      <div class="max-w-5xl mx-auto">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div class="grid lg:grid-cols-2">
            <!-- Image Side -->
            <div class="relative h-[300px] lg:h-auto">
              <img
                :src="IMAGES.blueHouse"
                alt="บ้านสีฟ้า"
                class="w-full h-full object-cover"
              />
              <!-- Price Badge -->
              <div class="absolute top-4 right-4 bg-pomelo-orange text-white px-4 py-2 rounded-full font-bold shadow-lg">
                ฿{{ ROOM_INFO.pricePerNight.toLocaleString() }}/คืน
              </div>
            </div>

            <!-- Info Side -->
            <div class="p-8 lg:p-10">
              <div class="flex items-center gap-2 mb-4">
                <span class="px-3 py-1 bg-sky-blue/20 text-ocean-blue rounded-full text-sm">
                  ใต้ถุนสูง
                </span>
                <span class="px-3 py-1 bg-nature-green/20 text-nature-green rounded-full text-sm">
                  วิวสวน
                </span>
              </div>

              <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ ROOM_INFO.name }}</h3>
              
              <!-- Features -->
              <ul class="space-y-3 mb-6">
                <li
                  v-for="(feature, index) in ROOM_INFO.features"
                  :key="index"
                  class="flex items-center gap-3 text-gray-600"
                >
                  <svg class="w-5 h-5 text-nature-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>

              <!-- Amenities -->
              <div class="border-t border-gray-200 pt-6 mb-6">
                <p class="text-sm text-gray-500 mb-4">สิ่งอำนวยความสะดวก</p>
                <div class="flex flex-wrap gap-3">
                  <div
                    v-for="amenity in AMENITIES"
                    :key="amenity.icon"
                    class="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <svg class="w-5 h-5 text-ocean-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="getAmenityIcon(amenity.icon)"></svg>
                    <span class="text-sm text-gray-700">{{ amenity.label }}</span>
                  </div>
                </div>
              </div>

              <!-- Guest Info -->
              <div class="border-t border-gray-200 pt-6 mb-6">
                <div class="flex items-center gap-2 text-gray-600 mb-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>รองรับ {{ ROOM_INFO.maxGuests }} ท่าน</span>
                </div>
                <p class="text-sm text-gray-500 ml-7">
                  แขกเพิ่มเติม ฿{{ ROOM_INFO.extraGuestPrice }}/ท่าน (สูงสุด {{ ROOM_INFO.maxTotalGuests }} ท่าน)
                </p>
              </div>

              <!-- Buttons -->
              <div class="flex flex-col sm:flex-row gap-3">
                <button
                  @click="emit('open-booking')"
                  class="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  จองที่พัก
                </button>
                <button
                  @click="emit('open-rules')"
                  class="btn-outline flex-1 flex items-center justify-center gap-2"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  กฎระเบียบ
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Room Photo Gallery -->
        <div class="mt-12">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">ภาพบรรยากาศภายในบ้าน</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="relative h-48 rounded-xl overflow-hidden shadow-lg card-hover">
              <img :src="IMAGES.roomTwinBeds" alt="ห้องนอนเตียงคู่" class="w-full h-full object-cover" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p class="text-white text-sm font-medium">ห้องนอนเตียงคู่</p>
              </div>
            </div>
            <div class="relative h-48 rounded-xl overflow-hidden shadow-lg card-hover">
              <img :src="IMAGES.bathroom" alt="ห้องน้ำ" class="w-full h-full object-cover" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p class="text-white text-sm font-medium">ห้องน้ำ</p>
              </div>
            </div>
            <div class="relative h-48 rounded-xl overflow-hidden shadow-lg card-hover">
              <img :src="IMAGES.roomSingleBed" alt="ห้องนอนเตียงเดี่ยว" class="w-full h-full object-cover" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p class="text-white text-sm font-medium">ห้องนอนเตียงเดี่ยว</p>
              </div>
            </div>
            <div class="relative h-48 rounded-xl overflow-hidden shadow-lg card-hover">
              <img :src="IMAGES.livingRoom" alt="ห้องนั่งเล่น" class="w-full h-full object-cover" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p class="text-white text-sm font-medium">ห้องนั่งเล่น</p>
              </div>
            </div>
            <div class="relative h-48 rounded-xl overflow-hidden shadow-lg card-hover">
              <img :src="IMAGES.kitchen" alt="ห้องครัว" class="w-full h-full object-cover" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p class="text-white text-sm font-medium">ห้องครัว</p>
              </div>
            </div>
            <div class="relative h-48 rounded-xl overflow-hidden shadow-lg card-hover">
              <img :src="IMAGES.balcony" alt="ระเบียง" class="w-full h-full object-cover" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p class="text-white text-sm font-medium">ระเบียง</p>
              </div>
            </div>
            <div class="relative h-48 rounded-xl overflow-hidden shadow-lg card-hover">
              <img :src="IMAGES.hallway" alt="ทางเข้า" class="w-full h-full object-cover" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p class="text-white text-sm font-medium">ทางเข้า</p>
              </div>
            </div>
            <div class="relative h-48 rounded-xl overflow-hidden shadow-lg card-hover">
              <img :src="IMAGES.stairs" alt="บันได" class="w-full h-full object-cover" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p class="text-white text-sm font-medium">บันได</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
