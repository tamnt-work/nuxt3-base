interface State {
  user: null | Record<string, any>
}

export const useAuthStore = defineStore('auth', {
  state: (): State => ({
    user: {},
  }),

  actions: {
    /**
     * Fetch the user data
     */
    getMe() {
      // Handle fetching user data here
    },

    /**
     * Set the user
     *
     * @param user
     */
    setUser(user: Record<string, any>) {
      this.user = user
    },

    /**
     * Reset the user
     */
    resetUser() {
      this.user = null
    },

    /**
     * Login the user
     */
    login() {
      // Handle login logic here
      this.setUser({})

      const route = useRoute()
      const redirect = route.query.redirect

      try {
        navigateTo(redirect ? atob(redirect.toString()) : ROUTE_PAGE.HOME, {
          replace: true,
        })
      } catch (error) {
        navigateTo(ROUTE_PAGE.HOME, {
          replace: true,
        })
      }
    },

    /**
     * Logout the user
     */
    logout() {
      this.resetUser()
      navigateTo(ROUTE_PAGE.LOGIN, {
        replace: true,
      })
    },
  },
})
