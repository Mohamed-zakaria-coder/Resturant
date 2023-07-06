import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import img from "../public/hero.jpg";
import logo from "../public/logo-transparent.png";
import bghero from "../public/bghero-trans.png";
// import bgvid from "../public/vid.mp4";
import Link from "next/link";
import { FaBars, FaShoppingBag } from "react-icons/fa";
import { getToken } from "../auth";
import { getCartItems } from "../helpers";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../slices/cartSlice";
import NotifyDialog from "./OrderNotifyDialog";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel";

export default function Header({ scrollHandler, whyUs }) {
  const cartItems = useSelector((state) => state.cart_items.value);
  const [notifyDialogOpened, setNotifyDialogOpened] = useState(false);
  const dispatch = useDispatch();
  const videoRef = useRef();
  const [menuOpened, setMenuOpened] = useState(false);
  const [cartOpened, setCartOpened] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // const getCart = async () => {
  //   const res = await getCartItems();
  //   dispatch(getItems(res));
  // };
  // useEffect(() => {
  //   setLoggedIn(getToken());
  //   getCart();
  //   setTimeout(() => {
  //     videoRef.current.play();
  //   }, 1000);
  // }, []);

  const handleClick = () => {
    setMenuOpened((prev) => !prev);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setCartOpened(true);
  };

  return (
    <header className="relative">
      {notifyDialogOpened && (
        <NotifyDialog setDialogOpened={setNotifyDialogOpened} />
      )}
      <div className="absolute inset-x-0 bottom-0 h-1\2 bg-gray-100" />
      {/* CART */}
      {cartOpened && (
        <Cart
          closeCart={() => setCartOpened(false)}
          cartItems={cartItems}
          openNotification={() => setNotifyDialogOpened(true)}
        />
      )}
      {/* MENU */}
      {menuOpened && (
        <div className="flex flex-col items-center fixed pt-20 top-20 left-0 h-screen w-full bg-[#000000e3] text-white text-2xl font-bold z-20 sm:hidden">
          {!loggedIn && (
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
          <p onClick={scrollHandler} className="my-5 cursor-pointer">
            Our Menu
          </p>
          <Link href="/blogs" className="my-5">
            Blog
          </Link>
          <p onClick={whyUs} className="my-5 cursor-pointer">
            Why Us?
          </p>
        </div>
      )}
      {/* NAVBAR */}
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
                alt="El Safty"
              />
            </Link>
          </span>
        </div>
        <div className="hidden sm:flex items-center flex-row flex-1 text-base whitespace-nowrap font-semibold">
          <Link href="/" className="mr-2 cursor-pointer">
            Home
          </Link>
          <p onClick={scrollHandler} className="mx-2 cursor-pointer">
            Our Menu
          </p>
          <Link href="/blogs" className="mr-2">
            Blog
          </Link>
          <p onClick={whyUs} className="mr-2 cursor-pointer">
            Why Us?
          </p>
        </div>
        <div className="sm:hidden items-center text-green-400 flex">
          {loggedIn && (
            <Link
              href="/cart"
              onClick={handleCartClick}
              className="mr-4 mb-1 text-green-400 relative"
            >
              {cartItems && cartItems.length > 0 && (
                <span className="rounded-full bg-red-600 text-white flex items-center justify-center absolute top-[-5px] left-[-8px] w-5 h-5">
                  {cartItems.length}
                </span>
              )}
              <FaShoppingBag size={24} />
            </Link>
          )}
          <FaBars size={20} onClick={handleClick} />
        </div>
        <div className="hidden sm:flex items-end">
          {loggedIn ? (
            <div className="flex relative">
              <Link
                href="/cart"
                onClick={handleCartClick}
                className="mr-4 mb-1 text-green-400"
              >
                {cartItems && cartItems.length > 0 && (
                  <span className="rounded-full bg-red-600 text-white flex items-center justify-center absolute top-[-5px] left-[-8px] w-5 h-5">
                    {cartItems.length}
                  </span>
                )}
                <FaShoppingBag size={24} />
              </Link>
            </div>
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
      <div className="header-carousel shadow-xl">
         {/* <div className="relative shadow-xl sm:overflow-hidden h-full flex items-end"> */}
          {/* <div className="absolute inset-0 h-full">
            <Image
              priority
              fill
              className="h-full w-full object-cover"
              src={img}
              placeholder="blur"
            alt="El Safty" */}
            {/* } */}
            {/* https://i.vimeocdn.com/video/810735117-9223db8da9dbc147c4873551cf481af6632c12877d7323e7f87a16d7390d8d79-d?mw=1300&mh=731&q=70 */}
            {/* <video
              ref={videoRef}
              loop
              muted
              autoPlay
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxWidth: "none",
                position: "relative",
              }}
              >
              <source src={"/vid.mp4"}></source>
            </video> */}
            {/* <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
          </div> */}
          {/* <div className="flex justify-between items-center w-full h-full pt-16 flex-col sm:flex-row">
            <div className="relative px-4 pt-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 sm:mb-10">
              <h1 className="mt-1 font-bold text-gray-900 text-5xl xs:text-6xl sm:tracking-tight sm:text-7xl md:text-8xl">
              <span className="block text-green-400">El Safty</span>
                <p className="relative left-0 right-0 max-w-2xl text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-white">
                Discover a natural and flavorful way to enhance your dining
                  experience with us.{" "}
                </p>
              </h1>
              <div className="mt-5 max-w-xs sm:flex sm:max-w-none">
              <button
              className="flex items-center justify-center rounded-md border border-transparent bg-transparent px-4 py-3 text-base font-medium text-green-400 outline outline-green-400 shadow-sm hover:bg-green-400 hover:text-white sm:px-8 transition"
              onClick={scrollHandler}
              >
              Shop now
              </button>
              </div>
              </div>
              <div className="relative h-full w-full">
              <Image
                priority
                fill
                className="h-full w-full object-contain object-left-top opacity-70"
                src={bghero}
                placeholder="blur"
                alt="El Safty"
                style={{
                  transform: "rotate(180deg)",
                }}
                />
                </div>
              </div> */}
        {/* </div> */}
      </div>
      <div className="carousel-parent">
              <Carousel />
              </div>
    </header>
  );
}
