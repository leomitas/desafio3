// const [formData, setFormData] = useState<iMessages>({
//   name: '',
//   email: '',
//   subject: '',
//   message: '',
// })
// const [errors, setErrors] = useState({
//   name: '',
//   email: '',
//   subject: '',
//   message: '',
// })

// const handleChange = (
//   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => {
//   const inputEmail = e.target.value
//   setIsValid(validate(inputEmail))
//   const { name, value } = e.target
//   setFormData((prevState) => ({
//     ...prevState,
//     [name]: value,
//   }))

//   const tempData = { [name]: value }

//   try {
//     schema.parse(tempData)
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
//   } catch (error: ZodError | any) {
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: error.errors[0]?.message,
//     }))
//   }
// }

// const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault()
//   if (isValid) {
//     try {
//       schema.parse(formData)
//       setIsValid(false)
//       setMessages([...messages, formData])
//       setFormData({ name: '', email: '', subject: '', message: '' })
//       toast({
//         title: 'Mensagem enviada',
//         description: 'Mensagem enviada com sucesso',
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   } else {
//     toast({
//       title: 'Email inválido',
//       description: 'Coloque um email válido',
//       variant: 'destructive',
//     })
//   }
// }
