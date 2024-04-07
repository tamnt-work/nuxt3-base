<template>
  <div v-show="value" class="the-table-filter">
    <div v-if="$slots.before" class="the-table-filter__before">
      <slot name="before" />
    </div>

    <div v-if="$slots.after" class="the-table-filter__after">
      <slot name="after" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheTableFilter',
})

const value = defineModel<boolean>()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-table-filter.scss';
</style>
