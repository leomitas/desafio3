'use client'

import { useState } from 'react'
import Header from './components/Header'
import FormMessages from './components/formMessage/FormMessages'
import Messages from './components/Messages'

export interface iMessages {
  name: string
  email: string
  subject: string
  message: string
}

export default function Home() {
  const [messages, setMessages] = useState<iMessages[]>([])
  return (
    <>
      <Header />
      <main className='mx-auto space-y-4 w-screen h-screen flex items-center flex-col justify-center bg-zinc-950 pt-8'>
        <FormMessages messages={messages} setMessages={setMessages} />
        <Messages messages={messages} setMessages={setMessages} />
      </main>
    </>
  )
}
