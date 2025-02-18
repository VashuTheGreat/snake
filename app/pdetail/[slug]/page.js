// "use client";

// import { useState } from 'react';
// import { useEffect } from 'react';
// import react from 'react';
// import { useCart } from "@/context/CartContext";
// import { Link } from 'lucide-react';
// import {signIn} from 'next-auth/react'
// import { use } from "react";
// // import Product from '@/lib/product';

// const Post = ({params}) => {
  
  
//   const { cart, addToCart, removeFromCart, clearCart, subTotal ,image,sizes,variants,titlev,pricev,product} = useCart();
//   const size = sizes.split(" ");  // Space ke basis pe alag karega

   
//   const resolvedParams = use(params); // Unwrap params Promise
//   console.log("Slug value:", resolvedParams.slug);
// console.log(image)
  
 


// const array = [1,2,3,4,5,2009,201009];
// const [pinfound,setpinfound]=useState(false);
// const [clicked,setclicked]=useState(false);
// const [pin, setPin] = useState("");
// // const colors = ["white", "gray-700", "orange-500"];
// const colors = variants.split(" ");  // Space ke basis pe alag karega
// const [selectedColor, setSelectedColor] = useState(null);

// console.log(product)

// const checkpin = (pin) => {
//   setclicked(true);
//   setPin("");
//   let low = 0;
//   let high = array.length - 1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (array[mid] > pin) {
//       high = mid - 1;
//     } else if (array[mid] < pin) {
//       low = mid + 1;
//     } else {
//       setpinfound(true);
//       return;
//     }
//   }
//   setpinfound(false);
// };

//   return <><section className="text-gray-600 body-font overflow-hidden">
//   <div className="container px-5 py-16 mx-auto">
//     <div className="lg:w-4/5 mx-auto flex flex-wrap">
//       <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"   src={image}/>
//       <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//         <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
//         <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{titlev}</h1>
//         <div className="flex mb-4">
//           <span className="flex items-center">
//             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//             </svg>
//             <span className="text-gray-600 ml-3">4 Reviews</span>
//           </span>
//           <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
//             <a className="text-gray-500">
//               <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//               </svg>
//             </a>
//             <a className="text-gray-500">
//               <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
//                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//               </svg>
//             </a>
//             <a className="text-gray-500">
//               <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
//                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//               </svg>
//             </a>
//           </span>
//         </div>
//         <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
//         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//         <div className="flex">
//       <span className="mr-3">Color</span>
      // {colors.map((color, index) => (
      //   <button
      //     key={index}
      //     onClick={() => setSelectedColor(color)}
      //     className={`border-2 rounded-full w-6 h-6 focus:outline-none ml-${index === 0 ? "0" : "1"} bg-${color} ${
      //       selectedColor === color ? "border-black" : "border-gray-300"
      //     }`}
      //   ></button>
      // ))}
//     </div>
//           <div className="flex ml-6 items-center">
//             <span className="mr-3">Size</span>
//             <div className="relative">
//               <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500 text-base pl-3 pr-10">
//                 {
//                   size.map((size, index) => (
//                     <option key={index}>{size}</option>
//                   ))
//                 }
                
//               </select>
//               <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
//                 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
//                   <path d="M6 9l6 6 6-6"></path>
//                 </svg>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="flex">
//           <span className="title-font font-medium text-2xl text-gray-900">₹{pricev}</span>
//           {signIn&&<a href='/checkout'><button className="flex ml-4 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Buy now</button></a>}
//           {!signIn&&<button onClick={()=>{alert("Login First")}} className="flex ml-4 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Buy now</button>}
          
//           <button onClick={() => {addToCart(slug, 1, 499, "Wear The", "XL", "Red")}} className="flex ml-2 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Add To Cart</button>
//           <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//             <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
//               <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
//             </svg>
//           </button>
//         </div>
//         <div className='pincode flex m-3 gap-4'>
//           <input className='border-2 border-solid border-zinc-500 shadow-lg' type='number' placeholder='Pincode'  value={pin}
//                   onChange={(e) => setPin(e.target.value)}></input>
//           <button className="flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded"onClick={() => checkpin(Number(pin))}>Check Availability</button>
//         </div>
//         {!pinfound&&clicked&&<span className='text-red-500'>Sorry! , we cannot deliver in your area</span>}
//         {pinfound&&clicked&&<span className='text-green-600'>Delivery is Availability</span>}
//       </div>
//     </div>
//   </div>
// </section></>;
// };

// export default Post;



























"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { signIn } from "next-auth/react";

const Post = ({ params }) => {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    subTotal,
    image,
    sizes,
    variants,
    titlev,
    pricev,
    product,
  } = useCart();

  const sizeList = sizes.split(" ");
  const colors = variants.split(" ");

  const [pinfound, setpinfound] = useState(false);
  const [clicked, setclicked] = useState(false);
  const [pin, setPin] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  const pinArray = [1, 2, 3, 4, 5, 2009, 201009];

  const checkpin = (pin) => {
    setclicked(true);
    setPin("");
    let low = 0,
      high = pinArray.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (pinArray[mid] > pin) {
        high = mid - 1;
      } else if (pinArray[mid] < pin) {
        low = mid + 1;
      } else {
        setpinfound(true);
        return;
      }
    }
    setpinfound(false);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{titlev}</h1>
            <p className="leading-relaxed">Description of the product goes here...</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {colors.map((color, index) => (
        <button
          key={index}
          onClick={() => setSelectedColor(color)}
          className={`border-2 rounded-full w-6 h-6 focus:outline-none ml-${index === 0 ? "0" : "1"} bg-${color} ${
            selectedColor === color ? "border-black" : "border-gray-300"
          }`}
        ></button>
      ))}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <select className="rounded border border-gray-300 py-2 text-base pl-3 pr-10">
                  {sizeList.map((size, index) => (
                    <option key={index}>{size}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">₹{pricev}</span>
              {signIn ? (
                <a href="/checkout" target="_blank">
                  <button className="ml-4 text-white bg-orange-500 border-0 py-2 px-6 hover:bg-orange-600 rounded">
                    Buy Now
                  </button>
                </a>
              ) : (
                <button
                  onClick={() => alert("Login First")}
                  className="ml-4 text-white bg-orange-500 border-0 py-2 px-6 hover:bg-orange-600 rounded"
                >
                  Buy Now
                </button>
              )}
              <button
                onClick={() => addToCart("slug", 1, pricev, titlev, "XL", "Red")}
                className="ml-2 text-white bg-orange-500 border-0 py-2 px-6 hover:bg-orange-600 rounded"
              >
                Add To Cart
              </button>
            </div>
            <div className="pincode flex m-3 gap-4">
              <input
                className="border-2 border-solid border-zinc-500 shadow-lg"
                type="number"
                placeholder="Pincode"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
              <button
                className="text-white bg-orange-500 border-0 py-2 px-6 hover:bg-orange-600 rounded"
                onClick={() => checkpin(Number(pin))}
              >
                Check Availability
              </button>
            </div>
            {clicked && (
              <span className={pinfound ? "text-green-600" : "text-red-500"}>
                {pinfound ? "Delivery is Available" : "Sorry! We cannot deliver in your area"}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
