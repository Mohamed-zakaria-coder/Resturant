import { useRef } from "react";
import Header from "../components/Header";
import HomeProductCard from "../components/HomeProductCard";
import LeftHandedCard from "../components/LeftHandedCard";
import RightHandedCard from "../components/RightHandedCard";
import privacy from "../public/privacy-icon.png";
import natural from "../public/natural-icon.png";
import experience from "../public/experience-icon.png";
import { useRouter } from "next/router";
import { getProducts } from "../helpers";

export default function Gallery({ products }) {
  let productsRef = useRef<HTMLDivElement>();
  let whyUsRef = useRef<HTMLDivElement>();
  const router = useRouter();

  const scrollHandler = (e) => {
    e.preventDefault();

    if (router.pathname === "/") {
      // @ts-ignore
      return productsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    router.push("/#products");
  };

  const whyUsScroll = (e) => {
    e.preventDefault();
    if (router.pathname === "/") {
      // @ts-ignore
      return whyUsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    router.push("/#whyus");
  };
  return (
    <>
      <Header scrollHandler={scrollHandler} whyUs={whyUsScroll} />
      <div
        className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        ref={productsRef}
        id="products"
      >
        <div className="mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Our Loved Products
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product) => (
              <HomeProductCard product={product} key={product._id} />
            ))}
        </div> */}
        <div className="flex flex-col gap-y-20 gap-x-6 ">
          {products &&
            products.map((product) => (
              <HomeProductCard product={product} key={product._id} />
            ))}
        </div>
        <div className="text-center" ref={whyUsRef} id="whyus">
          <p className="mt-1 text-4xl font-extrabold uppercase text-gray-900 sm:text-5xl sm:tracking-tight py-28 pb-4">
            Why Choose{" "}
            <span className="block text-red-600 sm:text-6xl">SmoothySense</span>
          </p>
        </div>
        <LeftHandedCard
          image={privacy}
          title={"Packaging & Privacy"}
          description={
            "We understand the importance of privacy and discretion when it comes to intimate care products. That's why use plain packaging and discreet shipping to ensure your privacy is protected."
          }
        />

        <RightHandedCard
          image={natural}
          title={"Natural Ingredients"}
          description={
            "We use only the finest natural ingredients in our products, free from harsh chemicals and artificial fragrances. Our lubricants and enhancers are gentle on your skin, so you can enjoy intimacy without worrying about irritation or discomfort."
          }
        />

        <LeftHandedCard
          image={experience}
          title={"Expertise & Experience"}
          description={
            "Our team of experts has years of experience in developing and manufacturing intimate care products. We are dedicated to creating products that enhance your pleasure and improve your sexual health."
          }
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      products: products,
    },
  };
}
