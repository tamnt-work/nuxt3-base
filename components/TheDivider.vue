<template>
  <el-divider class="the-divider" v-bind="$attrs">
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData" />
    </template>
  </el-divider>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheDivider',
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-divider.scss';
</style>
