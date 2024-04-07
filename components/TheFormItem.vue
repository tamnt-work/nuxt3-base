<template>
  <el-form-item v-bind="$attrs" class="the-form-item">
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData" />
    </template>
  </el-form-item>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheFormItem',
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-form-item.scss';
</style>
