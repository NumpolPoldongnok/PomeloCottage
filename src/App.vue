<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import RoomsSection from './components/RoomsSection.vue'
import GallerySection from './components/GallerySection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import BookingModal from './components/BookingModal.vue'
import HouseRulesModal from './components/HouseRulesModal.vue'

const showBookingModal = ref(false)
const showRulesModal = ref(false)

const openBookingModal = () => {
  showBookingModal.value = true
}

const closeBookingModal = () => {
  showBookingModal.value = false
}

const openRulesModal = () => {
  showRulesModal.value = true
}

const closeRulesModal = () => {
  showRulesModal.value = false
}
</script>

<template>
  <div class="min-h-screen bg-cream font-kanit">
    <Navbar @open-booking="openBookingModal" @open-rules="openRulesModal" />
    
    <main>
      <HeroSection @open-booking="openBookingModal" />
      <AboutSection />
      <RoomsSection @open-booking="openBookingModal" @open-rules="openRulesModal" />
      <GallerySection />
      <ContactSection />
    </main>
    
    <Footer />
    
    <!-- Modals -->
    <BookingModal v-if="showBookingModal" @close="closeBookingModal" />
    <HouseRulesModal v-if="showRulesModal" @close="closeRulesModal" />
  </div>
</template>

<style scoped>
</style>
