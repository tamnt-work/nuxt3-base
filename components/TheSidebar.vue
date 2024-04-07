<template>
  <the-button link @click="drawer = true">
    <icon name="heroicons:bars-3-16-solid" />
  </the-button>

  <el-drawer v-model="drawer" direction="ltr" size="375" append-to-body>
    <the-menu @click="drawer = false" />
  </el-drawer>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheSidebar',
})

const drawer = ref(false)
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-sidebar.scss';
</style>
