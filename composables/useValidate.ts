export interface IValidate {
  field: string
}

export function useValidate() {
  const { t } = useI18n()

  return {
    v: new Validate(t),
  }
}
