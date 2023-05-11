import { useEffect, useState } from 'react'
import Image from 'next/image'
import img from '../public/hero.jpg'
import logo from '../public/logo-transparent.png'
import Link from 'next/link'
import { FaBars, FaShoppingBag } from 'react-icons/fa';
import { getToken } from '../auth'

export default function Header({ scrollHandler, whyUs }) {

  const [menuOpened, setMenuOpened] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(getToken());
  }, []);


  const handleClick = () => {
    setMenuOpened(prev => !prev);
  }
  return (
    <header className="relative h-[80vh]">
      <div className="absolute inset-x-0 bottom-0 h-1\2 bg-gray-100" />
      {menuOpened && <div className='flex flex-col items-center fixed pt-20 top-20 left-0 h-screen w-full bg-[#000000e3] text-white text-2xl font-bold z-20 sm:hidden'>
        
        {loggedIn ?
          <><Link href='/cart' className='my-5 flex text-green-400'><FaShoppingBag size={24}/> <span className='ml-2'>Cart</span></Link></>:
          <Link href='/login' className='my-5 outline outline-green-400 text-green-400 rounded p-1 px-4'>Login</Link>
        }
        <Link href="/" className='my-5 cursor-pointer'>Home</Link>
        <p onClick={scrollHandler} className='my-5 cursor-pointer'>Our Products</p>
        <Link href='/blogs' className='my-5'>Blog</Link>
        <p onClick={whyUs} className='my-5 cursor-pointer'>Why Us?</p>
      </div>}
      <div className="flex justify-between p-4 items-end fixed top-0 left-0 w-full z-10 bg-[#000000e3] text-white">
        <div className="flex items-center flex-1">
          <span className='h-12 relative'>
            <Link href="/" className='my-5 cursor-pointer'>
              <Image
                  priority
                  height={500}
                  className="h-full w-full object-contain"
                  src={logo}
                  placeholder="blur"
                  alt="Coffee grinder"
                />
            </Link>
          </span> 
        </div>
        <div className="hidden sm:flex items-center flex-row flex-1 text-base whitespace-nowrap font-semibold ">
          <Link href="/" className='mr-2 cursor-pointer'>Home</Link>
          <p onClick={scrollHandler} className='mx-2 cursor-pointer'>Our Products</p>
          <Link href='/blogs' className='mr-2'>Blog</Link>
          <p onClick={whyUs} className='mr-2 cursor-pointer'>Why Us?</p>
        </div>
        <div className="sm:hidden items-center text-green-400">
          <FaBars size={20} onClick={handleClick}/>
        </div>
        <div className="hidden sm:flex items-end">
          {loggedIn ? 
            <Link href='/cart' className='mr-4 text-green-400'><FaShoppingBag size={24}/></Link>:
            <Link href='/login' className='mr-2 outline outline-green-400 text-green-400 rounded p-1 px-4'>Login</Link>
          }
        </div>
      </div>
      <div className="mx-auto h-full">
        <div className="relative shadow-xl sm:overflow-hidden h-full flex items-end">
          <div className="absolute inset-0 h-full">
            <Image
              priority
              fill
              className="h-full w-full object-cover"
              src={img}
              placeholder="blur"
              alt="Coffee grinder"
            />
            <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="mt-1 font-bold text-gray-900 text-6xl sm:tracking-tight lg:text-8xl">
              <span className="block text-green-400">SmoothySense</span>
              <p className="relative left-0 right-0 mt-5 max-w-2xl text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-white">
                A natural way to spice up your love life.
              </p>
            </h1> 
            <div className=" mt-10 max-w-xs sm:flex sm:max-w-none">
              <button
                className="flex items-center justify-center rounded-md border border-transparent bg-transparent px-4 py-3 text-base font-medium text-green-400 outline outline-green-400 shadow-sm hover:bg-green-400 hover:text-white sm:px-8 transition"
                onClick={scrollHandler}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
