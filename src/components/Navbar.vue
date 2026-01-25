<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { SITE_CONFIG, NAV_LINKS, IMAGES } from '../constants'

const emit = defineEmits<{
  (e: 'open-booking'): void
  (e: 'open-rules'): void
}>()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#home" class="flex items-center gap-3 group">
          <img
            :src="IMAGES.logo"
            :alt="SITE_CONFIG.name"
            class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-300"
          />
          <div class="hidden sm:block">
            <h1 
              class="font-bold text-lg transition-colors duration-300"
              :class="isScrolled ? 'text-ocean-blue' : 'text-white'"
            >
              {{ SITE_CONFIG.name }}
            </h1>
            <p 
              class="text-xs transition-colors duration-300"
              :class="isScrolled ? 'text-gray-600' : 'text-white/80'"
            >
              {{ SITE_CONFIG.nameThai }}
            </p>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in NAV_LINKS"
            :key="link.id"
            :href="link.href"
            class="nav-link font-medium transition-colors duration-300"
            :class="isScrolled ? 'text-gray-700 hover:text-pomelo-orange' : 'text-white hover:text-warm-orange'"
          >
            {{ link.label }}
          </a>
          <button 
            @click="emit('open-booking')"
            class="btn-primary"
          >
            จองที่พัก
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg transition-colors duration-300"
          :class="isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden mt-4 bg-white rounded-2xl shadow-xl p-4 space-y-2"
        >
          <a
            v-for="link in NAV_LINKS"
            :key="link.id"
            :href="link.href"
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-700 hover:bg-cream hover:text-pomelo-orange rounded-xl transition-colors duration-300"
          >
            {{ link.label }}
          </a>
          <hr class="my-2 border-gray-200" />
          <button 
            @click="emit('open-booking'); closeMobileMenu()"
            class="w-full btn-primary"
          >
            จองที่พัก
          </button>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<style scoped>
</style>
