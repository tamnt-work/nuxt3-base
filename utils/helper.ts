import _ from 'lodash'

/**
 * Convert object keys to camelCase
 * @param obj
 * @returns
 */
const toCamelCase = <T extends object>(obj: any): T => {
  if (!obj || typeof obj !== 'object') return obj

  if (!Array.isArray(obj)) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [
        _.camelCase(key),
        toCamelCase(val),
      ]),
    ) as T
  } else {
    return obj.map((el) => toCamelCase(el)) as T
  }
}

/**
 * Convert object keys to snake_case
 * @param obj
 * @returns
 */
const toSnakeCase = <T extends object>(obj: any): T => {
  if (!obj || typeof obj !== 'object') return obj

  if (!Array.isArray(obj)) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [
        _.snakeCase(key),
        toSnakeCase(val),
      ]),
    ) as T
  } else {
    return obj.map((el) => toSnakeCase(el)) as T
  }
}

export const Helper = {
  toCamelCase,
  toSnakeCase,
}
