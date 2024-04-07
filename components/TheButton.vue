<template>
  <el-button
    :class="[
      'the-button',
      {
        'is-block': block,
      },
    ]"
    v-bind="$attrs"
    @click="onClick"
  >
    <slot />
    <icon v-if="iconRight" :name="iconRight" class="the-button__suffix-icon" />
  </el-button>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheButton',
})

const { block, href } = defineProps<{
  block?: boolean
  iconRight?: string
  href?: string
}>()

const onClick = (event: MouseEvent) => {
  if (href) {
    event.preventDefault()

    return navigateTo(href)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-button.scss';
</style>
