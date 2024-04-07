<template>
  <div class="users-page">
    <the-container size="lg">
      <the-heading>{{ $t('pages.users.title') }}</the-heading>
      <div class="mt-4">
        <the-table
          :data="dataList"
          :pagination="pagination"
          @page-change="onPageChange"
          @page-size-change="onPageSizeChange"
        >
          <template #toolbar-prefix>
            <the-button
              size="large"
              :type="filterVisible ? 'primary' : 'default'"
              round
              @click="onToggleFilter"
              >{{ $t('common.actions.sortOrderNarrowDown') }}</the-button
            >
          </template>

          <template #toolbar-suffix>
            <the-button
              type="success"
              size="large"
              icon-right="heroicons:plus-16-solid"
              @click="onSignup"
              >{{ $t('common.actions.signUp') }}</the-button
            >
          </template>

          <template #toolbar-extra>
            <the-table-filter v-model="filterVisible">
              <template #before>
                <the-table-filter-sort-setting
                  v-model:sort-order="filter.sortOrder"
                  v-model:sort-by="filter.sortBy"
                  :filter-by="filterBy"
                />
              </template>

              <template #after>
                <the-table-filter-setting>
                  <el-row :gutter="16" class="mt-auto">
                    <el-col :xs="24" :sm="12">
                      <the-form-item
                        :label="$t('pages.users.content.registrationDateRange')"
                      >
                        <div class="flex items-center">
                          <the-date-picker
                            v-model="filter.dateFrom"
                            type="date"
                            :placeholder="$t('common.fieldPlaceholders.select')"
                          />
                          <span class="mx-1">{{
                            $t('common.specialCharacter.tilde')
                          }}</span>
                          <the-date-picker
                            v-model="filter.dateTo"
                            type="date"
                            :placeholder="$t('common.fieldPlaceholders.select')"
                          />
                        </div>
                      </the-form-item>
                    </el-col>
                  </el-row>
                </the-table-filter-setting>
              </template>
            </the-table-filter>
          </template>

          <template #columns>
            <el-table-column
              prop="edit"
              :label="$t('pages.users.content.edit')"
              width="180"
            />
            <el-table-column
              prop="name"
              :label="$t('pages.users.content.firstAndLastName')"
              width="180"
            />
            <el-table-column
              prop="email"
              :label="$t('pages.users.content.email')"
            />
            <el-table-column
              prop="other"
              :label="$t('pages.tableExample.content.other')"
            />
          </template>
        </the-table>
      </div>
    </the-container>
  </div>
</template>

<script setup lang="ts">
import type { Sort } from '#imports'

defineComponent({
  name: 'UsersPage',
})

definePageMeta({
  middleware: 'auth',
})

const { t } = useI18n()

useHead({
  title: t('pages.users.title'),
})

const tableData = [
  {
    registrationDate: '2016-05-03',
    name: 'Tom John',
    email: 'test@example.com',
    other: 'Note',
  },
  {
    registrationDate: '2016-05-02',
    name: 'Tom John',
    email: 'test@example.com',
    other: 'Note',
  },
  {
    registrationDate: '2016-05-04',
    name: 'Tom John',
    email: 'test@example.com',
    other: 'Note',
  },
  {
    registrationDate: '2016-05-01',
    name: 'Tom John',
    email: 'test@example.com',
    other: 'Note',
  },
  {
    registrationDate: '2016-05-03',
    name: 'Tom John',
    email: 'test@example.com',
    other: 'Note',
  },
  {
    registrationDate: '2016-05-02',
    name: 'Tom John',
    email: 'test@example.com',
    other: 'Note',
  },
  {
    registrationDate: '2016-05-04',
    name: 'Tom John',
    email: 'test@example.com',
    other: 'Note',
  },
  {
    registrationDate: '2016-05-01',
    name: 'Tom John',
    email: 'test@example.com',
    other: 'Note',
  },
  {
    registrationDate: '2016-05-03',
    name: 'Tom John',
    email: 'test@example.com',
    other: 'Note',
  },
  {
    registrationDate: '2016-05-02',
    name: 'Tom John',
    email: 'test@example.com',
    other: 'Note',
  },
  {
    registrationDate: '2016-05-04',
    name: 'Tom John',
    email: 'test@example.com',
    other: 'Note',
  },
  {
    registrationDate: '2016-05-01',
    name: 'Tom John',
    email: 'test@example.com',
    other: 'Note',
  },
]

const filterBy = [
  {
    label: t('pages.users.content.firstAndLastName'),
    value: 'name',
  },
  {
    label: t('pages.users.content.email'),
    value: 'email',
  },
  {
    label: t('pages.tableExample.content.other'),
    value: 'other',
  },
]

const pagination = reactive({
  total: tableData.length,
  limit: CONSTANTS.PAGINATION_LIMIT,
  page: 1,
})

const filterVisible = ref(false)

const filter = reactive<{
  sortOrder: Sort | ''
  sortBy: string[]
  dateFrom: Date
  dateTo: Date
}>({
  sortOrder: '',
  sortBy: [],
  dateFrom: new Date(),
  dateTo: new Date(),
})

const dataList = computed(() => {
  return tableData.slice(
    (pagination.page - 1) * pagination.limit,
    pagination.page * pagination.limit,
  )
})

const onPageChange = (page: number) => {
  pagination.page = page
}

const onPageSizeChange = (pageSize: number) => {
  pagination.limit = pageSize
  pagination.page = 1
}

const onToggleFilter = () => {
  filterVisible.value = !filterVisible.value
}

const onSignup = () => {
  console.log('Signup')
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/users/index.scss';
</style>
