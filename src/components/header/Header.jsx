import React from "react";
import "./header.css";
import Wallets from "../../components/wallets/Wallets";
import Navbar from "../../components/navbar/Navbar";
import Partner from "../../components/partner/Partner";
function Header() {
  return (
    <div className="nav-header w-screen">
      <Navbar />
      <section className="bg-transparent  h-auto">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 ">
            <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white justify-center">
              The most trusted cryptocurrency platform
            </h1>
            <p className=" mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>

            <Wallets />
          </div>
          <div className=" lg:mt-0 lg:col-span-5 flex justify-center ">
            <img src="cryptoimg.png" alt="mockups" />
          </div>
        </div>
      </section>
      <Partner />
    </div>
  );
}

export default Header;
