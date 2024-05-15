import React from 'react'
import { iProps } from './formMessage/FormMessages'

export default function Messages({ messages, setMessages }: iProps) {
  return (
    <>
      {messages.length > 0 && (
        <ul className='flex gap-4 p-6 overflow-x-auto whitespace-nowrap max-w-4xl w-full'>
          {messages.map((message, index) => (
            <li
              key={index}
              className='border-4 border-blue-900 p-4 rounded-lg bg-white w-3/5 max-w-full'
            >
              <p className='break-words max-w-full whitespace-normal'>
                <span className='font-bold'>Nome:</span>{' '}
                {message.name.substring(0, 40)}
              </p>
              <p className='break-words max-w-full whitespace-normal'>
                <span className='font-bold'>Email:</span>{' '}
                {message.email.substring(0, 40)}
              </p>
              <p className='break-words max-w-full whitespace-normal'>
                <span className='font-bold'>Assunto:</span>{' '}
                {message.subject.substring(0, 40)}
              </p>

              <p className='break-words max-w-full whitespace-normal'>
                <span className='font-bold'>Mensagem:</span>
                {message.message}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
