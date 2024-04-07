<template>
  <component :is="tag" :class="['the-heading', `the-heading--${align}`]">
    <slot />
  </component>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheHeading',
})

const { tag, align } = defineProps({
  tag: {
    type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
    default: 'h2',
    required: false,
  },

  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'center',
    required: false,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-heading.scss';
</style>
