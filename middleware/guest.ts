export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()

  if (!authStore.user) return

  return navigateTo(ROUTE_PAGE.HOME)
})
