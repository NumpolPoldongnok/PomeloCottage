<script setup lang="ts">
import { ref, computed } from 'vue'
import { GALLERY_IMAGES, GALLERY_CATEGORIES, GalleryImage } from '../constants'

const activeCategory = ref('all')
const selectedImage = ref<GalleryImage | null>(null)

const filteredImages = computed(() => {
  if (activeCategory.value === 'all') {
    return GALLERY_IMAGES
  }
  return GALLERY_IMAGES.filter(img => img.category === activeCategory.value)
})

const setCategory = (categoryId: string) => {
  activeCategory.value = categoryId
}

const openLightbox = (image: GalleryImage) => {
  selectedImage.value = image
}

const closeLightbox = () => {
  selectedImage.value = null
}
</script>

<template>
  <section id="gallery" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="inline-block px-4 py-2 bg-pomelo-orange/10 text-pomelo-orange rounded-full text-sm font-medium mb-4">
          แกลเลอรี่
        </span>
        <h2 class="section-title">ภาพบรรยากาศ</h2>
        <p class="section-subtitle max-w-2xl mx-auto">สัมผัสความงดงามของบ้านสวนส้มโอผ่านภาพถ่าย</p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="category in GALLERY_CATEGORIES"
          :key="category.id"
          @click="setCategory(category.id)"
          class="px-5 py-2 rounded-full font-medium transition-all duration-300"
          :class="activeCategory === category.id 
            ? 'bg-pomelo-orange text-white shadow-lg' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
        >
          {{ category.label }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TransitionGroup
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 scale-90"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-90"
        >
          <div
            v-for="(image, index) in filteredImages"
            :key="`${image.src}-${index}`"
            class="gallery-item aspect-[4/3]"
            @click="openLightbox(image)"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p class="text-white font-medium">{{ image.alt }}</p>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>

    <!-- Lightbox -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="selectedImage"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        @click.self="closeLightbox"
      >
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 text-white/70 hover:text-white p-2"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img
          :src="selectedImage.src"
          :alt="selectedImage.alt"
          class="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
        <p class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg">
          {{ selectedImage.alt }}
        </p>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
</style>
