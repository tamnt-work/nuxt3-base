<template>
  <el-input v-bind="$attrs" class="the-input" size="large">
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData" />
    </template>
  </el-input>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheInput',
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-input.scss';
</style>
