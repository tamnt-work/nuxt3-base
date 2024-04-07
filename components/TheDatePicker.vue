<template>
  <el-date-picker
    class="the-date-picker"
    :editable="false"
    :clearable="false"
    v-bind="$attrs"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData" />
    </template>
  </el-date-picker>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheDatePicker',
})
</script>

<style lang="scss">
@import '@/assets/styles/components/the-date-picker.scss';
</style>
