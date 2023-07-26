import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className='w-screen h-screen bg-gradient-to-tr from-blue-500 to-orange-400'>
      <div className='flex justify-center p-14'>
        <Image src={'/logo.png'} alt="logo" width={300} height={300}/>
      </div>
      <div className='flex  flex-col md:flex-row  justify-center items-center gap-10 mt-10 p-20'>
        <div >
        <Link href={'/signup'}>
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Signup</button>
        </Link >
        </div>
        <div>
          <Link href={'/Login'}>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Login</button>
          </Link>
          </div>
      </div>
    </main>
  )
}
