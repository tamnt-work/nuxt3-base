<template>
  <el-form
    ref="formRef"
    v-bind="$attrs"
    class="the-form"
    scroll-to-error
    require-asterisk-position="right"
    label-position="top"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData" />
    </template>
  </el-form>
</template>

<script setup lang="ts">
import type { FormInstance, FormValidateCallback } from 'element-plus'

defineComponent({
  name: 'TheForm',
})

const formRef = ref<FormInstance>()

const validate = (callback?: FormValidateCallback) => {
  return formRef.value?.validate(callback)
}

const validateField = (prop: string, callback?: FormValidateCallback) => {
  return formRef.value?.validateField(prop, callback)
}

const resetFields = () => {
  return formRef.value?.resetFields()
}

const scrollToField = (prop: string) => {
  return formRef.value?.scrollToField(prop)
}

const clearValidate = (prop: string) => {
  return formRef.value?.clearValidate(prop)
}

defineExpose({
  validate,
  validateField,
  resetFields,
  scrollToField,
  clearValidate,
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-form.scss';
</style>
