import type { UseFetchOptions } from '#app'
import { defu } from 'defu'

export function useApi<T = any>(url: string, options?: UseFetchOptions<T>) {
  const config = useRuntimeConfig()

  const defaultOptions: UseFetchOptions<T> = {
    baseURL: config.public.apiUrl,
    retry: 3,
    server: false,
    lazy: false,

    transform(input) {
      return Helper.toCamelCase(input) as T
    },

    onRequest({ options }) {
      const token = useCookie(CONSTANTS.COOKIES_NAME.ACCESS_TOKEN).value

      options.headers = {
        ...options.headers,
        Authorization: token ? `Bearer ${token}` : '',
      }

      if (options.body) {
        options.params = Helper.toSnakeCase(options.params)
      }

      if (options.query) {
        options.query = Helper.toSnakeCase(options.query)
      }
    },
  }

  return useFetch(url, defu(options, defaultOptions))
}
