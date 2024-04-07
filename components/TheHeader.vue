<template>
  <header class="the-header">
    <div class="the-header__inner">
      <the-sidebar />
      <div class="the-header__app-name">
        {{ $t('appName') }}
      </div>
      <the-spacer />
      <el-dropdown trigger="click" @command="handleDropdownCommand">
        <the-button link>
          <icon name="heroicons:cog-6-tooth-20-solid" />
        </the-button>
        <template #dropdown>
          <client-only>
            <el-dropdown-menu>
              <el-dropdown-item :command="ROUTE_PAGE.USERS">
                <icon name="heroicons:users" />
                <span class="ml-2">{{
                  $t('common.settingMenus.userManagement')
                }}</span>
              </el-dropdown-item>
              <el-dropdown-item divided command="logout">
                <icon name="heroicons:arrow-right-on-rectangle" />
                <span class="ml-2">{{ $t('common.settingMenus.logout') }}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </client-only>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheHeader',
})

const authStore = useAuthStore()

const handleDropdownCommand = (command: string) => {
  if (command === 'logout') {
    return authStore.logout()
  }

  navigateTo(command)
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-header.scss';
</style>
