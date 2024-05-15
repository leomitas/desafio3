import { FaGithub } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='w-full py-6 bg-zinc-900 fixed'>
      <div className='flex justify-center gap-8'>
        <h3 className='font-bold text-xl text-blue-700'>Leonardo Abreu</h3>
        <div className='bg-white w-max flex justify-center items-center gap-2 p-1 rounded-sm'>
          <FaGithub />
          <a href='https://github.com/leomitas/desafio3' target='_blank'>
            Repositório
          </a>
        </div>
      </div>
    </header>
  )
}
