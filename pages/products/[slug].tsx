import Image from 'next/image'
import Navbar from "../../components/Navbar";
import CartDialog from "../../components/CartDialog";
import { getProducts, getProduct } from '../../helpers'
import { useState, useEffect } from 'react'
import { getToken } from "../../auth";
import NotifyDialog from '../../components/NotifyDialog';
import AddToCartBtn from '../../components/AddToCartBtn';


export default function Product({ product }) {
  const [dialogOpened, setDialogOpened] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);
  const [notifyDialogOpened, setNotifyDialogOpened] = useState(false)
  useEffect(() => {
    setLoggedIn(getToken());
  }, []);

  
  const handleClick = ()=> {
    if (loggedIn) {
      return setDialogOpened(true)
    }
    setNotifyDialogOpened(true);
  }


  return (
    <>
      <Navbar />
      <div className="flex mt-12 flex-col justify-between">
        <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto flex flex-col sm:flex-row">
            <Image
              alt={product.slug}
              className="rounded-lg"
              src={product.image}
              width={560}
              height={640}
            />
            <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
              <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
                {product.title}
              </h1>
              <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
                ${product.price}
              </h1>
              <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
                Description
              </div>
              <p className="max-w-xl">{product.description}</p>
              <AddToCartBtn handleClick={handleClick}/>
              {
                dialogOpened && (
                  <CartDialog product={product} setDialogOpened={setDialogOpened}/>
                )
              }
              {
                notifyDialogOpened && (
                  <NotifyDialog setDialogOpened={setNotifyDialogOpened}/>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug)

  return {
    props: {
      product: product,
    },
  }
}

export async function getStaticPaths() {
  const products = await getProducts()

  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths: paths,
    fallback: false,
  }
}
