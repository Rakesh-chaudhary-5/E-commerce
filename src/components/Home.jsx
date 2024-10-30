import DryFruitsLogo from "../img/dryfruits-logo1.png";
import BannerImg from '../img/mix-dry-fruits1.png'
import Products from "./Products";
import ProductData from "./ProductData";
import { Link } from "react-router-dom";


export default function Home() {
  
  const cartProduct = JSON.parse(localStorage.getItem("cartProduct")) || [];
  const amountDetails = JSON.parse(localStorage.getItem("amountDetails")) || {
    subTotal: 0,
    tax: 0,
    total: 0,
  };

  localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  localStorage.setItem("amountDetails", JSON.stringify(amountDetails));

  return (
    <main className="bg-[#0c0c0c] pb-28 min-h-screen">
      <div className="m-auto max-w-[1400px] px-6 sm:px-10">
        {/* main section */}
        <section className="mb-40">
          {/* sub section */}
          <div className="relative flex flex-col items-center justify-between gap-5 px-0 pt-10 sm:flex-row md:pt-20 lg:px-10">
            <div className="absolute left-6 top-28 h-44 w-40 bg-orange-600 blur-3xl md:h-60 md:w-56"></div>

            {/* text section */}
            <div className="relative mt-20 text-white sm:w-[400px] md:w-[500px]">
              <h1 className="text-4xl font-semibold sm:text-4xl lg:text-6xl">
                We are changing the way people shop
              </h1>
              <p className="my-10 leading-6 text-[#b9b8b8] md:leading-8">
                We are providing Rich quality products and Premium
                Packaging.Also we are providing return policy and good customer
                support.
              </p>
              <Link to={"/products"}>
                <button className="rounded-lg bg-[#F8230E] px-4 py-2 font-semibold">
                  Our Products
                </button>
              </Link>
            </div>

            {/* heroImg section */}

            <div>
              <img draggable="false" src={DryFruitsLogo} alt="" />
            </div>
          </div>
        </section>

        {/* product section */}
        <section className="-mt-24 text-white sm:-mt-8">
          <div className="border-b-2 pb-4">
            <h1 className="text-3xl font-bold text-[#FFA500]">
              Popular Products
            </h1>
          </div>

          {/* products */}
          <Products allData={ProductData.slice(0, 4)} />

          {/* banner */}
          <div className="relative mt-28 flex items-center justify-between gap-20 overflow-hidden rounded-lg bg-[#040000] px-10 py-2 lg:justify-around lg:px-20">
            <div className="relative hidden md:block">
              <img
                className="user-drag relative z-10 mt-5 w-64"
                draggable="false"
                src={BannerImg}
                alt="mix fruits"
              />
              <div className="absolute left-6 top-20 h-60 w-40 bg-orange-600 blur-3xl lg:w-56"></div>
            </div>
            <div className="absolute right-10 top-0 block h-60 w-24 bg-orange-600 blur-3xl sm:w-40 md:hidden"></div>

            <div className="relative w-[400px] text-white">
              <p className="text-lg font-semibold">Every type of</p>
              <h1 className="my-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
                <span className="text-orange-600">Premium</span> Dryfruits
              </h1>
              <p className="text-[#b9b8b8]">
                are available.We are providing Rich quality products and Premium
                Packaging.Also we are providing return policy and good customer
                support
              </p>
              <Link to={"/products"}>
                <button className="mt-8 rounded-xl bg-orange-700 px-4 py-2 text-sm font-semibold">
                  Purchase Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
