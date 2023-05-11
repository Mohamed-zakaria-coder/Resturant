import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/logo-transparent.png";
import Link from "next/link";
import { FaBars, FaShoppingBag } from "react-icons/fa";
import { getToken } from "../auth";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(getToken());
  }, []);

  const handleClick = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <>
      {menuOpened && (
        <div className="flex flex-col items-center fixed pt-20 top-20 left-0 h-screen w-full bg-[#000000e3] text-white text-2xl font-bold z-20 sm:hidden">
          {loggedIn ? (
            <Link href="/cart" className="my-5 flex text-green-400">
              <FaShoppingBag size={24} /> <span className="ml-2">Cart</span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="my-5 outline outline-green-400 text-green-400 rounded p-1 px-4"
            >
              Login
            </Link>
          )}
          <Link href="/" className="my-5 cursor-pointer">
            Home
          </Link>
          <Link href="/#products" className="my-5 cursor-pointer">
            Our Products
          </Link>
          <Link href="/blogs" className="my-5">
            Blog
          </Link>
          <Link href="/#whyus" className="my-5 cursor-pointer">
            Why Us?
          </Link>
        </div>
      )}
      <div className="flex justify-between p-4 items-end fixed top-0 left-0 w-full z-10 bg-[#000000e3] text-white">
        <div className="flex items-center flex-1">
          <span className="h-12 relative">
            <Link href="/" className="my-5 cursor-pointer">
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
          <Link href="/" className="mx-2 cursor-pointer">
            Home
          </Link>
          <Link href="/#products" className="mx-2 cursor-pointer">
            Our Products
          </Link>
          <Link href="/blogs" className="mr-2">
            Blog
          </Link>
          <Link href="/#whyus" className="mr-2 cursor-pointer">
            Why Us?
          </Link>
        </div>
        <div className="sm:hidden items-center text-green-400">
          <FaBars size={20} onClick={handleClick} />
        </div>
        <div className="hidden sm:flex items-end">
          {loggedIn ? (
            <Link href="/cart" className="mr-4 text-green-400">
              <FaShoppingBag size={24} />
            </Link>
          ) : (
            <Link
              href="/login"
              className="mr-2 outline outline-green-400 text-green-400 rounded p-1 px-4"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
