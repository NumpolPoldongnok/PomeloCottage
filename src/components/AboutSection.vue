<script setup lang="ts">
import { ABOUT_CONTENT, IMAGES } from '../constants'

const getIconSvg = (icon: string) => {
  const icons: Record<string, string> = {
    drink: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />`,
    garden: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />`,
    nature: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />`,
  }
  return icons[icon] || icons.nature
}
</script>

<template>
  <section id="about" class="py-20 bg-cream">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-nature-green/10 text-nature-green rounded-full text-sm font-medium mb-4">
          เกี่ยวกับเรา
        </span>
        <h2 class="section-title">{{ ABOUT_CONTENT.title }}</h2>
        <p class="section-subtitle max-w-2xl mx-auto">{{ ABOUT_CONTENT.subtitle }}</p>
      </div>

      <!-- Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Image Side -->
        <div class="relative">
          <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img
              :src="IMAGES.pomeloFruit"
              alt="ผลส้มโอสด"
              class="w-full h-[400px] object-cover"
            />
          </div>
          <!-- Decorative Elements -->
          <div class="absolute -top-4 -left-4 w-24 h-24 bg-pomelo-orange/20 rounded-full blur-2xl"></div>
          <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-nature-green/20 rounded-full blur-2xl"></div>
          
          <!-- Floating Badge -->
          <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 z-20">
            <div class="flex items-center gap-3">
              <div class="w-14 h-14 bg-pomelo-orange rounded-xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <p class="font-bold text-gray-800">Welcome Drink</p>
                <p class="text-sm text-gray-600">น้ำส้มโอสดคั้น</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Text Side -->
        <div class="space-y-6">
          <p class="text-gray-600 text-lg leading-relaxed">
            {{ ABOUT_CONTENT.description }}
          </p>
          
          <p class="text-gray-600 leading-relaxed">
            ทุกครั้งที่คุณมาเยือน เราจะต้อนรับด้วย <span class="text-pomelo-orange font-semibold">น้ำส้มโอสดคั้น</span> 
            จากสวนของเราเอง หวานฉ่ำ สดชื่น เป็นการเริ่มต้นวันพักผ่อนที่ดีที่สุด
          </p>

          <!-- Highlights -->
          <div class="grid sm:grid-cols-3 gap-4 mt-8">
            <div
              v-for="(highlight, index) in ABOUT_CONTENT.highlights"
              :key="index"
              class="bg-white rounded-2xl p-6 shadow-md card-hover text-center"
            >
              <div 
                class="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                :class="index === 0 ? 'bg-pomelo-orange' : index === 1 ? 'bg-nature-green' : 'bg-ocean-blue'"
              >
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="getIconSvg(highlight.icon)"></svg>
              </div>
              <h3 class="font-bold text-gray-800 mb-2">{{ highlight.title }}</h3>
              <p class="text-sm text-gray-600">{{ highlight.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
