import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Style.css";
import Welocme from "./components/welcom";
import Title from "./components/title";
import Cart from "./components/cart";
import Products from "./components/Products";


function App() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-10">
          <div className="font-bold text-3xl  ">logo</div>
          <div className="flex items-center gap-5 font-medium">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Shop</a>
          </div>
        </div>
        <div>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-3.5 h-3.5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            Cart
          </button>
        </div>
      </div>
      <div className="text-center bg-slate-700 py-16 mt-5 rounded-lg">
        <h2 className="text-[#fff] font-bold text-3xl mb-4 ">Shop in style</h2>
        <p className="text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <Title Children="Flash sale"/>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {/* -------------------------item------------------------ */}
        
        {Array.from({length :4}).map((_, index)=>(
          <div className="border border-gray-400 rounded-xl p-3 " key={index}>
          <div>
            <img src="anh-dep-hinh-nen-thien-nhien-2.jpg" alt="" />
          </div>
          <h3>Travel</h3>
          <p>9999999</p>
        </div>
        ))}
       
      </div>



      <Title Children='San pham'/>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {/* -------------------------item------------------------ */}
        
        {Array.from({length :14}).map((_, index)=>(
          <div className="border border-gray-400 rounded-xl p-3 " key={index}>
          <div>
            <img src="anh-dep-hinh-nen-thien-nhien-2.jpg" alt="" />
          </div>
          <h3>Travel</h3>
          <p>9999999</p>
        </div>
        ))}
       
      </div>
      <div className="bg-black p-9 mt-8">
        <h5 className="text-white text-center">copyright@</h5>
      </div>
    <Welocme data ='hello'/>
    
    <Cart/>
    <Products ></Products>

      
    </>
  );
}

export default App;

