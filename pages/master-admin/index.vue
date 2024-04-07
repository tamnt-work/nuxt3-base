<template>
  <div class="master-admin-page">
    <the-container size="sm">
      <the-heading>{{ $t('pages.listExample.title') }}</the-heading>
      <div class="mt-4">
        <the-nav-button href="#">
          {{ $t('pages.listExample.content.menuItem') }}
        </the-nav-button>
      </div>
      <div class="mt-4">
        <the-nav-button href="#">
          {{ $t('pages.listExample.content.menuItem') }}
        </the-nav-button>
      </div>
      <div class="mt-4">
        <the-nav-button type="warning" href="#">
          {{ $t('pages.listExample.content.menuItem') }}
        </the-nav-button>
      </div>
      <div class="mt-4">
        <the-nav-button type="danger" href="#">
          {{ $t('pages.listExample.content.menuItem') }}
        </the-nav-button>
      </div>
      <div class="mt-4">
        <the-nav-button type="success" href="#">
          {{ $t('pages.listExample.content.menuItem') }}
        </the-nav-button>
      </div>
      <div class="mt-4">
        <the-nav-button type="info" href="#">
          {{ $t('pages.listExample.content.menuItem') }}
        </the-nav-button>
      </div>
    </the-container>
  </div>
</template>

<script setup lang="ts">
defineComponent({
  name: 'MasterAdminPage',
})

definePageMeta({
  middleware: 'auth',
})

const { t } = useI18n()

useHead({
  title: t('pages.listExample.title'),
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/master-admin/index.scss';
</style>
