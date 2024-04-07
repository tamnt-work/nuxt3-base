<template>
  <div class="home-page">
    <the-container size="sm">
      <the-heading>{{ $t('pages.home.title') }}</the-heading>
      <div class="mt-4">
        <the-nav-button :href="ROUTE_PAGE.TABLE_EXAMPLE">
          {{ $t('pages.home.content.menuItem') }}
        </the-nav-button>
      </div>
      <div class="mt-4">
        <the-nav-button :href="ROUTE_PAGE.LIST_EXAMPLE">
          {{ $t('pages.home.content.masterAdmin') }}
        </the-nav-button>
      </div>
      <div class="mt-4">
        <the-nav-button :href="ROUTE_PAGE.USERS">
          {{ $t('pages.home.content.userManagement') }}
        </the-nav-button>
      </div>
    </the-container>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  middleware: 'auth',
})

useHead({
  title: t('pages.home.title'),
})
</script>

<style lang="scss">
@import '@/assets/styles/pages/index.scss';
</style>
