<script setup lang="ts">
import { CONTACT_INFO, NEARBY_ATTRACTIONS, EMERGENCY_SERVICES } from '../constants'
</script>

<template>
  <section id="contact" class="py-20 bg-gradient-to-b from-white to-cream">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-nature-green/10 text-nature-green rounded-full text-sm font-medium mb-4">
          ติดต่อเรา
        </span>
        <h2 class="section-title">มาเยี่ยมเราได้เลย</h2>
        <p class="section-subtitle max-w-2xl mx-auto">พร้อมต้อนรับทุกท่านด้วยความยินดี</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-6">
          <!-- Phone Numbers -->
          <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-14 h-14 bg-ocean-blue rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">โทรศัพท์ติดต่อ</p>
                <p class="font-semibold text-gray-800">{{ CONTACT_INFO.phones[0].name }}</p>
              </div>
            </div>
            <div class="space-y-2 ml-[70px]">
              <a
                v-for="(phone, index) in CONTACT_INFO.phones"
                :key="index"
                :href="`tel:${phone.number}`"
                class="block text-lg font-bold text-gray-800 hover:text-ocean-blue transition-colors"
              >
                {{ phone.number }}
              </a>
            </div>
          </div>

          <!-- Line -->
          <a
            :href="CONTACT_INFO.lineUrl"
            target="_blank"
            class="block bg-[#00B900] rounded-2xl p-6 shadow-lg card-hover text-white"
          >
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </div>
              <div>
                <p class="text-white/80 text-sm">Line Official</p>
                <p class="text-xl font-bold">{{ CONTACT_INFO.lineId }}</p>
              </div>
              <svg class="w-6 h-6 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>

          <!-- Facebook -->
          <a
            :href="CONTACT_INFO.facebookUrl"
            target="_blank"
            class="block bg-[#1877F2] rounded-2xl p-6 shadow-lg card-hover text-white"
          >
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <p class="text-white/80 text-sm">Facebook Messenger</p>
                <p class="text-lg font-bold">{{ CONTACT_INFO.facebook }}</p>
              </div>
              <svg class="w-6 h-6 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>

          <!-- Address -->
          <div class="bg-white rounded-2xl p-6 shadow-lg card-hover flex items-start gap-4">
            <div class="w-14 h-14 bg-pomelo-orange rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500">ที่ตั้ง</p>
              <p class="text-gray-800 font-medium mb-1">{{ CONTACT_INFO.location }}</p>
              <p class="text-sm text-gray-600">{{ CONTACT_INFO.address }}</p>
              <a
                :href="CONTACT_INFO.googleMapUrl"
                target="_blank"
                class="inline-flex items-center gap-1 text-ocean-blue hover:text-deep-blue mt-2 text-sm"
              >
                ดูแผนที่ Google Map
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            :src="CONTACT_INFO.googleMapEmbed"
            class="w-full h-full border-0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Nearby Attractions & Emergency Services -->
      <div class="mt-16 grid md:grid-cols-2 gap-8">
        <!-- Nearby Attractions -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-nature-green rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800">สถานที่ท่องเที่ยวใกล้เคียง</h3>
          </div>
          <ul class="space-y-3">
            <li
              v-for="(attraction, index) in NEARBY_ATTRACTIONS"
              :key="index"
              class="flex items-center justify-between gap-3"
            >
              <div class="flex items-start gap-3 flex-1">
                <svg class="w-5 h-5 text-nature-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-gray-700">{{ attraction.name }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm text-ocean-blue font-medium whitespace-nowrap">{{ attraction.distance }}</span>
                <a
                  :href="attraction.mapUrl"
                  target="_blank"
                  class="text-pomelo-orange hover:text-deep-blue transition-colors"
                  title="ดูแผนที่"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <!-- Emergency Services -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800">หน่วยงานฉุกเฉิน</h3>
          </div>
          <ul class="space-y-4">
            <li
              v-for="(service, index) in EMERGENCY_SERVICES"
              :key="index"
              class="bg-gray-50 rounded-lg p-4"
            >
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-start gap-3 flex-1">
                  <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-800">{{ service.name }}</p>
                    <a 
                      :href="`tel:${service.phone}`"
                      class="text-red-600 hover:text-red-700 font-medium text-lg"
                    >
                      {{ service.phone }}
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
