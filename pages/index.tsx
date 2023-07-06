import { useRef } from "react";
import Header from "../components/Header";
import HomeProductCard from "../components/HomeProductCard";
import LeftHandedCard from "../components/LeftHandedCard";
import RightHandedCard from "../components/RightHandedCard";
import CategorySliders from "../components/CategoriesSlider"
import privacy from "../public/privacy-icon.png";
import natural from "../public/natural-icon.png";
import experience from "../public/experience-icon.png";
import { useRouter } from "next/router";
import { getProducts } from "../helpers";
import Carousel from "../components/Carousel"

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
      <CategorySliders/>
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
            <span className="block text-red-600 sm:text-6xl">El Safty</span>
          </p>
        </div>
        <LeftHandedCard
          image={privacy}
          title={"Packaging & Privacy"}
          description={
            "At our restaurant, we understand that privacy is of utmost importance to our diners. That's why we prioritize discretion when it comes to our delivery service. We offer plain packaging and discreet delivery to ensure your confidentiality is safeguarded. We want you to feel comfortable and at ease while dining with us, knowing that we respect and value your privacy."
          }
        />

        <RightHandedCard
          image={natural}
          title={"Natural Ingredients"}
          description={
            "At our restaurant, we only source the freshest natural ingredients for our dishes. We believe in using only the best quality produce that is free from harmful chemicals and additives. Our commitment to natural ingredients means that our food is not only healthy and delicious but also gentle on your digestive system."
          }
        />

        <LeftHandedCard
          image={experience}
          title={"Expertise & Experience"}
          description={
            "As a team in the restaurant industry, we have a wealth of experience in crafting delicious meals. Our passion lies in creating dishes that not only satisfy your taste buds but also support your health and well-being. We take pride in using only natural and sustainably sourced ingredients, ensuring that every meal is both nutritious and environmentally friendly. Our commitment to your satisfaction is unwavering, and we look forward to bringing our culinary expertise to your table."
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
