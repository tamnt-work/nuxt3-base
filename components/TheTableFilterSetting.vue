<template>
  <the-form class="the-table-filter-setting">
    <div class="flex items-center mb-4">
      <the-heading tag="h4" align="left">{{
        $t('common.filter.filterSettings')
      }}</the-heading>
      <the-spacer />
      <the-button type="success">{{ $t('common.actions.confirm') }}</the-button>
    </div>
    <slot />
  </the-form>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheTableFilterSetting',
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-table-filter-setting.scss';
</style>
