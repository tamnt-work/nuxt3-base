<template>
  <div class="the-table-filter-sort-setting">
    <the-heading tag="h4" align="left">{{
      $t('common.filter.sortOrderSettings')
    }}</the-heading>

    <div class="mt-2">
      <the-button-group v-model="sortOrderValue" :data="sorts" />

      <the-divider v-if="filterBy.length" />

      <the-button-group v-model="sortByValue" :data="filterBy" is-multiple />

      <slot name="extra" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sort } from '#imports'

defineComponent({
  name: 'TheTableFilterSortSetting',
})

const { t } = useI18n()

const { filterBy, sortOrder, sortBy } = defineProps({
  filterBy: {
    type: Array as PropType<{ label: string; value: string }[]>,
    required: true,
    default: () => [],
  },

  sortOrder: {
    type: String as PropType<Sort | ''>,
    required: true,
    default: Sort.Desc,
  },

  sortBy: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => [],
  },
})

const emit = defineEmits<{
  (event: 'update:sortOrder', value: Sort | ''): void
  (event: 'update:sortBy', value: string[]): void
}>()

const sortOrderValue = computed({
  get: () => sortOrder,
  set: (value: Sort | '') => emit('update:sortOrder', value),
})

const sortByValue = computed({
  get: () => sortBy,
  set: (value: string[]) => emit('update:sortBy', value),
})

const sorts = [
  {
    label: t('common.sorting.desc'),
    value: Sort.Desc,
    icon: 'heroicons:arrow-small-down-20-solid',
  },
  {
    label: t('common.sorting.asc'),
    value: Sort.Asc,
    icon: 'heroicons:arrow-small-up-20-solid',
  },
]
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-table-filter-sort-setting.scss';
</style>
