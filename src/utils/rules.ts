export const rules = {
  require: (message: string = "Обязательное поле") => ({
    required: true,
    message,
  })
}