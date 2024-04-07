<template>
  <div class="the-table">
    <div class="the-table__toolbar">
      <div class="the-table__toolbar__main">
        <slot name="toolbar-prefix" />

        <div class="the-table__toolbar__content">
          <div v-if="pagination" class="the-table__toolbar__page-size">
            <span>{{
              $t('common.pagination.limit', { limit: pagination.limit })
            }}</span>

            <el-select
              v-model="pageSize"
              :placeholder="$t('common.fieldPlaceholders.select')"
              @change="onPageSizeChange"
            >
              <el-option
                v-for="item in CONSTANTS.PAGE_SIZES"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </div>
        </div>
        <slot name="toolbar-suffix" />
      </div>

      <div v-if="$slots['toolbar-extra']" class="the-table__toolbar__extra">
        <slot name="toolbar-extra" />
      </div>
    </div>
    <client-only>
      <el-table :data="data" stripe border class="w-full">
        <slot name="columns" />
      </el-table>
      <div class="mt-4 text-center">
        <el-pagination
          v-if="pagination && pagination.total > pagination.limit"
          background
          layout="prev, pager, next"
          :total="pagination.total"
          class="the-table__pagination"
          @current-change="onPageChange"
        />
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheTable',
})

const { data, pagination } = defineProps<{
  data?: any[]
  pagination?: {
    total: number
    limit: number
  }
}>()

const pageSize = ref(pagination?.limit || CONSTANTS.PAGINATION_LIMIT)

const emit = defineEmits<{
  (event: 'page-change', page: number): void
  (event: 'page-size-change', pageSize: number): void
}>()

const onPageChange = (page: number) => {
  emit('page-change', page)
}

const onPageSizeChange = (pageSize: number) => {
  emit('page-size-change', pageSize)
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-table.scss';
</style>
