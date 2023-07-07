import * as yup from "yup"

export  const loginSchema = yup.object({
    email: yup.string().required('esse campo é obrigatório, insira um email.'),
    password: yup.string().required('esse campo é obrigatório, insira uma senha.'),
  })
  .required()

  

  export  const signUpSchema = yup
  .object({
    fullName: yup.string().required('esse campo é obrigatório, insira seu nome completo.'),
    email: yup.string().required('esse campo é obrigatório, insira um email.'),
    password: yup.string().min(4, 'a senha deve ter no mínimo 4 cataracteres.').required('esse campo é obrigatório, insira uma senha.'),
    repeatPassword: yup.string().min(4, 'a senha deve ter no mínimo 4 cataracteres.').required('esse campo é obrigatório, insira uma senha.').oneOf([yup.ref('password')], 'As senhas não se combinam.')
  });
  