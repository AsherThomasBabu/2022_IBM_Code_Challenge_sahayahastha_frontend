import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
    <div className='flex-row'>
        <img className='w-11 h-11 border-lime-700 border-2 rounded-full' src='https://www.w3schools.com/howto/img_avatar.png'></img>
    </div>
    <h1 className='text-4xl font-bold bg-purple-200 m-3'>Hi, Ajaykumar</h1>

    <nav>
    <div className="bg-white w-full  h-16 px-6 py-2 flex justify-between text-gray-font fixed bottom-0 shadow-lg z-40 border-t border-gray-99">
      <a href="/">
        <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm  flex flex-col items-center text-center text-primary">
          <i className="w-8 fas fa-home p-1">
          </i>
          <span className="mx-1 font-roboto">Home</span>
        </span>
      </a>
      <a href="/">
        <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm  flex flex-col items-center text-center">
          <i className="w-8 fas fa-envelope p-1">
          </i>
          <span className="mx-1 font-roboto">Pesan</span>
        </span>
      </a>
     <a href="/">
      <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm   flex flex-col items-center text-center">
        <i className="w-8 fas fa-user-circle p-1">
        </i>
        <span className="mx-1 font-roboto">Akun</span>
      </span>
     </a>
    </div>
    </nav>
    </>
  )
}

export default Home
