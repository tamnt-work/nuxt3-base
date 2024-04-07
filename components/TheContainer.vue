<template>
  <div :class="['the-container', size ? `the-container--${size}` : '']">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheContainer',
})

const { size } = defineProps<{
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}>()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-container.scss';
</style>
