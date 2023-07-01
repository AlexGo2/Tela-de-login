import * as yup from "yup"

export  const loginSchema = yup
  .object({
    email: yup.string().required('esse campo é obrigatório, insira um email.'),
    password: yup.string().required('esse campo é obrigatório, insira uma senha.'),
  })
  .required()

  