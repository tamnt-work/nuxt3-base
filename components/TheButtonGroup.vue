<template>
  <el-button-group class="the-button-group">
    <el-button
      v-for="item in data"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :type="selected.includes(item.value) ? 'primary' : 'default'"
      @click="onClick(item.value)"
    >
      {{ item.label }}
      <icon v-if="item.icon" :name="item.icon" />
    </el-button>
  </el-button-group>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheButtonGroup',
})

const { data, isMultiple, modelValue } = defineProps<{
  data: {
    label: string
    value: string
    icon?: string
  }[]

  modelValue?: string | string[]

  isMultiple?: boolean
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string[] | string): void
}>()

const selected = ref<string[]>(
  modelValue ? (Array.isArray(modelValue) ? modelValue : [modelValue]) : [],
)

const onClick = (value: string) => {
  if (isMultiple) {
    if (selected.value.includes(value)) {
      selected.value = selected.value.filter((v) => v !== value)
    } else {
      selected.value = [...selected.value, value]
    }

    emit('update:modelValue', selected.value)
  } else {
    selected.value = selected.value.includes(value) ? [] : [value]

    emit('update:modelValue', selected.value[0] || '')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-button-group.scss';
</style>
