'use client'

import { validate } from 'email-validator'
import { ChangeEvent, useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { useToast } from '../ui/use-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { messagesSchema } from './messagesSchema'
import { useForm } from 'react-hook-form'
import { iMessages } from '@/app/page'

export interface iProps {
  messages: iMessages[]
  setMessages: React.Dispatch<React.SetStateAction<iMessages[]>>
}

export default function FormMessages({ messages, setMessages }: iProps) {
  const { toast } = useToast()

  const [isValid, setIsValid] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputEmail = e.target.value
    setIsValid(validate(inputEmail))
  }

  const onSubmit = (data: iMessages) => {
    if (isValid) {
      setMessages([...messages, data])
      toast({
        title: 'Mensagem enviada',
        description: 'Mensagem enviada com sucesso',
      })
      reset()
    } else {
      toast({
        title: 'Email inválido',
        description: 'Coloque um email válido',
        variant: 'destructive',
      })
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iMessages>({
    resolver: yupResolver(messagesSchema),
  })

  return (
    <form
      className='space-y-6 border-4 border-blue-900 p-4 rounded-lg bg-white'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col w-full gap-2'>
        <div className='flex items-center text-right gap-3 w-full justify-between'>
          <Label htmlFor='name' className='w-max font-bold'>
            Nome
          </Label>
          <Input className='col-span-3 w-60' {...register('name')} />
        </div>
        {errors.name?.message && (
          <p className='text-red-500 font-bold text-sm'>
            {errors.name.message}
          </p>
        )}
      </div>
      <div className='flex flex-col w-full gap-2'>
        <div className='flex items-center text-right gap-3 w-full justify-between'>
          <Label htmlFor='email' className='w-max font-bold'>
            Email
          </Label>
          <Input
            className='col-span-3 w-60'
            type='email'
            {...register('email')}
            onChange={handleChange}
          />
        </div>
        {errors.email?.message && (
          <p className='text-red-500 font-bold text-sm'>
            {errors.email.message}
          </p>
        )}
      </div>
      <div className='flex flex-col w-full gap-2'>
        <div className='flex items-center text-right gap-3 w-full justify-between'>
          <Label htmlFor='subject' className='w-max font-bold'>
            Assunto
          </Label>
          <Input className='col-span-3 w-60' {...register('subject')} />
        </div>
        {errors.subject?.message && (
          <p className='text-red-500 font-bold text-sm'>
            {errors.subject.message}
          </p>
        )}
      </div>
      <div className='flex flex-col w-full gap-2'>
        <div className='flex items-center text-right gap-3 w-full justify-between'>
          <Label htmlFor='message' className='w-max font-bold'>
            Mensagem
          </Label>
          <Textarea
            className='col-span-3 w-60 resize-none'
            {...register('message')}
          />
        </div>
        {errors.message?.message && (
          <p className='text-red-500 font-bold text-sm'>
            {errors.message.message}
          </p>
        )}
      </div>
      <div className='w-full flex justify-center'>
        <Button type='submit' className='w-full'>
          Enviar
        </Button>
      </div>
    </form>
  )
}
