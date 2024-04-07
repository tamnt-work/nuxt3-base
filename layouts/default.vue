<template>
  <div class="default-layout">
    <TheHeader />
    <div class="default-layout__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/layouts/default.scss';
</style>
