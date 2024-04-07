<template>
  <div class="home-page">
    <div v-if="pending">{{ $t('common.messages.loading') }}</div>

    <div v-else>
      <the-button @click="() => refresh()">{{
        $t('common.actions.refresh')
      }}</the-button>
      <pre class="whitespace-pre-wrap w-full break-all">{{ data }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserMapper } from '~/app/user/user.mapper'

const { t } = useI18n()

useHead({
  title: t('pages.home.title'),
})

const { data, pending, refresh } = useApi(
  'https://jsonplaceholder.typicode.com/users',
)

watchEffect(() => {
  if (!data.value) return

  // Test transform entity to model
  const res = UserMapper.toArrayModel(data.value)

  console.log('entity2model', JSON.stringify(res, null, 2))
  // Test transform model to entity
  const res2 = UserMapper.toEntityArray(res)

  console.log('model2entity', JSON.stringify(res2, null, 2))
})

// const { pending, data } = useAsyncData('master-data', () =>
//   Promise.all([
//     $fetch('https://jsonplaceholder.typicode.com/todos/1'),
//     $fetch('https://jsonplaceholder.typicode.com/todos/2'),
//   ]),
// )
</script>
