<template>
  <ul class="the-menu">
    <li v-for="(link, index) in links" :key="index" class="the-menu__item">
      <nuxt-link :to="link.to" @click="onClick">{{ link.label }}</nuxt-link>

      <div v-if="link.children" class="the-menu__sub-menu">
        <el-row
          v-for="(block, subIndex) in link.children"
          :key="subIndex"
          :gutter="16"
          class="the-menu__sub-menu__block"
        >
          <el-col
            v-for="(subLink, itemIndex) in block"
            :key="itemIndex"
            :span="12"
          >
            <ul class="the-menu__sub-menu__list">
              <li
                v-for="(subItem, subItemIndex) in subLink"
                :key="subItemIndex"
                class="the-menu__sub-menu__item"
              >
                <nuxt-link
                  v-if="subItem.to"
                  :to="subItem.to"
                  @click="onClick"
                  >{{ subItem.label }}</nuxt-link
                >
                <a v-else @click="subItem.onClick">{{ subItem.label }}</a>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineComponent({
  name: 'TheMenu',
})

const { t } = useI18n()
const authStore = useAuthStore()

const links = [
  {
    label: t('common.menus.top.label'),
    to: ROUTE_PAGE.HOME,
  },
  {
    label: t('common.menus.menuItem.label'),
    to: ROUTE_PAGE.TABLE_EXAMPLE,
  },
  {
    label: t('common.menus.menuItem.label'),
    to: ROUTE_PAGE.LIST_EXAMPLE,
    children: [
      [
        [
          {
            label: t('common.menus.menuItem.children.subMenuItem'),
            to: '#',
          },
        ],
        [
          {
            label: t('common.menus.menuItem.children.subMenuItem'),
            to: '#',
          },
          {
            label: t('common.menus.menuItem.children.subMenuItem'),
            to: '#',
          },
        ],
      ],
      [
        [
          {
            label: t('common.menus.menuItem.children.subMenuItem'),
            to: '#',
          },
          {
            label: t('common.menus.menuItem.children.subMenuItem'),
            to: '#',
          },
          {
            label: t('common.menus.menuItem.children.subMenuItem'),
            to: '#',
          },
        ],
      ],
      [
        [
          {
            label: t('common.menus.menuItem.children.subMenuItem'),
            to: '#',
          },
        ],
        [
          {
            label: t('common.menus.menuItem.children.subMenuItem'),
            to: '#',
          },
          {
            label: t('common.menus.menuItem.children.subMenuItem'),
            to: '#',
          },
        ],
      ],
      [
        [
          {
            label: t('common.menus.menuItem.children.subMenuItem'),
            to: '#',
          },
        ],
        [
          {
            label: t('common.menus.menuItem.children.subMenuItem'),
            to: '#',
          },
          {
            label: t('common.menus.menuItem.children.subMenuItem'),
            to: '#',
          },
        ],
      ],
    ],
  },
  {
    label: t('common.menus.accountSettings.label'),
    to: '#',
    children: [
      [
        [
          {
            label: t('common.menus.accountSettings.children.userManagement'),
            to: ROUTE_PAGE.USERS,
          },
          {
            label: t('common.menus.accountSettings.children.logout'),
            onClick: function () {
              authStore.logout()
              this.onClick()
            },
          },
        ],
      ],
    ],
  },
]

const emit = defineEmits<{
  (event: 'click'): void
}>()

const onClick = () => {
  emit('click')
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-menu.scss';
</style>
