<script setup lang="ts">
import { SITE_CONFIG, IMAGES } from '../constants'

const emit = defineEmits<{
  (e: 'open-booking'): void
}>()

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="home" class="relative h-screen min-h-[600px] overflow-hidden">
    <!-- Background Image with Slow Zoom -->
    <div class="absolute inset-0">
      <img
        :src="IMAGES.hero"
        alt="สวนส้มโอ"
        class="w-full h-full object-cover animate-slow-zoom"
      />
      <div class="hero-overlay absolute inset-0"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
      <!-- Logo Animation -->
      <div class="mb-8 animate-float">
        <img
          :src="IMAGES.logo"
          :alt="SITE_CONFIG.name"
          class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl"
        />
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg animate-fadeIn">
        {{ SITE_CONFIG.name }}
      </h1>
      <h2 class="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-6 drop-shadow-md animate-fadeIn delay-100">
        {{ SITE_CONFIG.nameThai }}
      </h2>
      <p class="text-lg md:text-xl text-white/80 max-w-2xl mb-10 animate-fadeIn delay-200">
        {{ SITE_CONFIG.tagline }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-300">
        <button
          @click="emit('open-booking')"
          class="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          จองที่พัก
        </button>
        <button
          @click="scrollToSection('about')"
          class="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-pomelo-orange text-lg px-8 py-4"
        >
          ดูรายละเอียด
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          @click="scrollToSection('about')"
          class="text-white/70 hover:text-white transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" class="w-full h-auto">
        <path
          fill="#FFF8E7"
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
</style>
