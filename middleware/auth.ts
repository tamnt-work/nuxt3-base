export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()

  if (authStore.user) return

  return navigateTo(`/login?redirect=${btoa(to.fullPath)}`)
})
