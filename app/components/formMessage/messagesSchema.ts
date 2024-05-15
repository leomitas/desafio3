import * as yup from 'yup'

export const messagesSchema = yup.object().shape({
  name: yup
    .string()
    .required('O nome é obrigatório!')
    .min(3, 'O nome precisa ter pelo 3 caracteres.')
    .max(200, 'O nome pode ter no máximo 200 caracteres.'),
  email: yup
    .string()
    .required('O email é obrigatório')
    .email('É necessário fornecer um email válido.'),
  subject: yup
    .string()
    .required('O assunto é obrigatório!')
    .min(3, 'O assunto precisa ter pelo 3 caracteres.')
    .max(200, 'O assunto pode ter no máximo 200 caracteres.'),
  message: yup
    .string()
    .required('A mensagem é obrigatória!')
    .min(3, 'A mensagem precisa ter pelo 3 caracteres.')
    .max(200, 'A mensagem pode ter no máximo 200 caracteres.'),
})
