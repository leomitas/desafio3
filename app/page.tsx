'use client'

import { validate } from 'email-validator'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { Textarea } from './components/ui/textarea'
import { useToast } from './components/ui/use-toast'

interface iMessages {
  name: string
  email: string
  subject: string
  message: string
}

export default function Home() {
  const { toast } = useToast()

  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(false)

  const [formData, setFormData] = useState<iMessages>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [messages, setMessages] = useState<iMessages[]>([])

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value
    setEmail(inputEmail)
    setIsValid(validate(inputEmail))
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isValid) {
      setMessages([...messages, formData])
      setFormData({ name: '', email: '', subject: '', message: '' })
      console.log('Email válido:', email)
      toast({
        title: 'Mensagem enviada',
        description: 'Mensagem enviada com sucesso',
      })
    } else {
      toast({
        title: 'Email inválido',
        description: 'Coloque um email válido',
        variant: 'destructive',
      })
      console.log('Email inválido')
    }
  }
  return (
    <main className='p-6 max-w-4xl mx-auto space-y-4 w-max h-screen flex items-center flex-col justify-center'>
      <form
        className='space-y-6 border-2 border-slate-700 p-4 rounded-lg'
        onSubmit={handleSubmit}
      >
        <div className='grid grid-cols-4 items-center text-right gap-3 w-full'>
          <Label htmlFor='name' className='w-max mx-auto'>
            Nome
          </Label>
          <Input
            className='col-span-3'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='grid grid-cols-4 items-center text-right gap-3 w-full'>
          <Label htmlFor='email' className='w-max mx-auto'>
            Email
          </Label>
          <Input
            className='col-span-3'
            type='email'
            name='email'
            value={formData.email}
            onChange={(e) => {
              handleEmailChange(e)
              handleChange(e)
            }}
          />
        </div>
        <div className='grid grid-cols-4 items-center text-right gap-3 w-full'>
          <Label htmlFor='subject' className='w-max mx-auto'>
            Assunto
          </Label>
          <Input
            className='col-span-3'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className='grid grid-cols-4 items-center text-right gap-3 w-full'>
          <Label htmlFor='message' className='w-max mx-auto'>
            Mensagem
          </Label>
          <Textarea
            className='col-span-3 resize-none'
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className='w-full flex justify-center'>
          <Button type='submit' className='w-full'>
            Enviar
          </Button>
        </div>
      </form>
      {messages.length > 0 && (
        <div className='flex gap-4 justify-center'>
          {messages.map((message, index) => (
            <div
              key={index}
              className='border-2 border-slate-700 p-4 rounded-lg'
            >
              <p>
                {' '}
                <span>Nome:</span> {message.name}
              </p>
              <p>
                {' '}
                <span>Email:</span> {message.email}
              </p>
              <p>
                {' '}
                <span>Assunto:</span> {message.subject}
              </p>
              <p>
                {' '}
                <span>Mensagem:</span> {message.message.substring(0, 50)}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
