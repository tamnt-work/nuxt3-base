<template>
  <div class="login-page">
    <div class="login-page__inner">
      <div class="login-page__heading">
        <span>{{ $t('appName') }}</span>
        <span>{{ $t('pages.login.title') }}</span>
      </div>
      <the-form
        ref="ruleFormRef"
        class="login-page__form"
        :model="form"
        :rules="rules"
        @submit.prevent="onSubmit"
      >
        <the-form-item :label="$t('common.fields.loginId')" prop="loginId">
          <the-input
            v-model="form.loginId"
            :placeholder="$t('common.fieldPlaceholders.loginId')"
          />
        </the-form-item>
        <the-form-item :label="$t('common.fields.password')" prop="password">
          <the-input
            v-model="form.password"
            :placeholder="$t('common.fieldPlaceholders.password')"
            type="password"
            show-password
          />
        </the-form-item>

        <div class="flex items-center justify-between mt-4">
          <the-form-item prop="isRemember">
            <el-checkbox
              v-model="form.isRemember"
              :label="$t('common.fields.rememberPassword')"
              size="large"
            />
          </the-form-item>
          <the-button
            native-type="submit"
            type="primary"
            icon-right="heroicons:chevron-right-20-solid"
            size="large"
            round
          >
            {{ $t('common.actions.login') }}
          </the-button>
        </div>

        <div class="text-center mt-4">
          <el-link href="#">{{
            $t('pages.login.content.forgotIdOrPassword')
          }}</el-link>
        </div>
      </the-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import type { AuthLoginDto } from '~/app/auth/dto/login-auth.dto'

const { t } = useI18n()

defineComponent({
  name: 'LoginPage',
})

definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

useHead({
  title: t('pages.login.title'),
})

const { v } = useValidate()
const authStore = useAuthStore()

const ruleFormRef = ref<FormInstance>()

const form = reactive<AuthLoginDto>({
  loginId: '',
  password: '',
  isRemember: false,
})

const rules = reactive<FormRules<AuthLoginDto>>({
  loginId: v.field(t('common.fields.loginId')).required().getRules(),
  password: v.field(t('common.fields.password')).required().getRules(),
})

const onSubmit = () => {
  if (!ruleFormRef?.value) return

  ruleFormRef.value.validate((valid) => {
    if (!valid) return

    authStore.login()
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/login/index.scss';
</style>
