<template>
  <div class="notifications-page"></div>
</template>

<script setup lang="ts">
defineComponent({
  name: 'NotificationsPage',
})

definePageMeta({
  middleware: 'auth',
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/notifications/index.scss';
</style>
