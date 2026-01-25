<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { HOUSE_RULES, SITE_CONFIG } from '../constants'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const getRuleIcon = (icon: string) => {
  const icons: Record<string, string> = {
    clock: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    'no-smoking': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />`,
    'no-pet': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />`,
    quiet: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />`,
    trash: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />`,
    garden: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />`,
    fruit: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />`,
  }
  return icons[icon] || icons.clock
}

const getIconColor = (index: number) => {
  const colors = ['bg-ocean-blue', 'bg-red-500', 'bg-red-500', 'bg-purple-500', 'bg-nature-green', 'bg-pomelo-orange', 'bg-pink-500']
  return colors[index % colors.length]
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
          <div class="bg-gradient-to-r from-pomelo-orange to-warm-orange p-6 text-white">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold">กฎระเบียบที่พัก</h2>
                <p class="text-white/80">{{ SITE_CONFIG.name }}</p>
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
          <div class="p-6">
            <p class="text-gray-600 mb-6">
              เพื่อความสุขของทุกท่าน กรุณาปฏิบัติตามกฎระเบียบดังนี้
            </p>

            <div class="space-y-4">
              <div
                v-for="(rule, index) in HOUSE_RULES"
                :key="index"
                class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div
                  class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  :class="getIconColor(index)"
                >
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="getRuleIcon(rule.icon)"></svg>
                </div>
                <p class="text-gray-700 font-medium">{{ rule.rule }}</p>
              </div>
            </div>

            <div class="mt-6 p-4 bg-sky-blue/10 rounded-xl border border-sky-blue/20">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-ocean-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-gray-600 text-sm">
                  หากมีข้อสงสัยหรือต้องการความช่วยเหลือ สามารถติดต่อเจ้าของได้ตลอด 24 ชั่วโมงค่ะ/ครับ
                </p>
              </div>
            </div>

            <button
              @click="emit('close')"
              class="w-full mt-6 btn-primary"
            >
              รับทราบ
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
</style>
