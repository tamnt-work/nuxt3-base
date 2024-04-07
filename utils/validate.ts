import type { FormItemRule } from 'element-plus'

export class Validate {
  private f?: string
  private t: any
  private rules: FormItemRule[] = []

  constructor(t: any) {
    this.t = t
  }

  field(field: string): Validate {
    this.f = field

    return this
  }

  /**
   * Add required rule
   *
   * @returns
   */
  required(message?: string): Validate {
    this.rules.push({
      required: true,
      message:
        message ||
        this.t('common.validate.required', {
          field: this.f,
        }),
    })

    return this
  }

  /**
   * Check min length
   *
   * @param length
   * @param message
   * @returns
   */
  minLength(length: number, message?: string): Validate {
    this.rules.push({
      validator: (_rule, value, callback) => {
        if (value.length < length) {
          callback(
            new Error(
              message ||
                this.t('common.validate.minLength', {
                  field: this.f,
                  length,
                }),
            ),
          )
        } else {
          callback()
        }
      },
    })

    return this
  }

  /**
   * Check max length
   *
   * @param length
   * @param message
   * @returns
   */
  maxLength(length: number, message?: string): Validate {
    this.rules.push({
      validator: (_rule, value, callback) => {
        if (value.length > length) {
          callback(
            new Error(
              message ||
                this.t('common.validate.maxLength', {
                  field: this.f,
                  length,
                }),
            ),
          )
        } else {
          callback()
        }
      },
    })

    return this
  }

  /**
   * Check max file size
   *
   * @param size
   * @param message
   * @returns
   */
  maxSize(size: number, message?: string): Validate {
    this.rules.push({
      validator: (_rule, value, callback) => {
        if (value.size > size) {
          callback(
            new Error(
              message ||
                this.t('common.validate.maxSize', {
                  field: this.f,
                  size,
                }),
            ),
          )
        } else {
          callback()
        }
      },
    })

    return this
  }

  /**
   * Check match value
   *
   * @param field
   * @param value
   * @param message
   * @returns
   */
  matchValue(field: string, value: any, message?: string): Validate {
    this.rules.push({
      validator: (_rule, value2, callback) => {
        if (value !== value2) {
          callback(
            new Error(
              message ||
                this.t('common.validate.notMatch', {
                  field: this.f,
                  matchField: field,
                }),
            ),
          )
        } else {
          callback()
        }
      },
    })

    return this
  }

  /**
   * Check password with pattern minimum 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character
   *
   * @param message
   * @returns
   */
  password(message?: string): Validate {
    this.rules.push({
      validator: (_rule, value, callback) => {
        const pattern =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/

        if (!pattern.test(value)) {
          callback(
            new Error(
              message ||
                this.t('common.validate.password', {
                  field: this.f,
                }),
            ),
          )
        } else {
          callback()
        }
      },
    })

    return this
  }

  /**
   * Get rules
   *
   * @returns
   */
  getRules(): FormItemRule[] {
    return this.rules
  }
}
