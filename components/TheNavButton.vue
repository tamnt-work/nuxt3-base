<template>
  <the-button
    type="primary"
    icon-right="heroicons:chevron-right"
    block
    class="the-nav-button"
    v-bind="$attrs"
  >
    <slot />
  </the-button>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheNavButton',
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-nav-button.scss';
</style>
