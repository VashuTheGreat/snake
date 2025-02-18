// 'use client' // ✅ Make sure this is the first line

// import React from 'react'
// import { signIn, signOut, useSession } from 'next-auth/react'
// import md5 from 'md5'
// const Navbar = () => {
//   const { data: session } = useSession(); // ✅ Get session data

//   const getGravatarUrl = (email) => {
//     const gravatarBaseUrl = 'https://www.gravatar.com/avatar/';
//     const hash = md5(email.trim().toLowerCase()); // Email ka MD5 hash
//     return `${gravatarBaseUrl}${hash}?s=200&d=mp`; // 's=200' is for size, 'd=mp' is for default avatar
//   }

//   return (
//     <div className='bg-[#e3e2dd]'>
//       <ul className='navbar flex justify-between items-center gap-4 p-4'>
//         <img className='w-52' src='logoweb.jpeg' alt='Logo' />

//         <li className='w-3/4 flex'>
//           <input
//             className='border-black border-2 w-3/4 h-10 p-2'
//             placeholder='Search item'
//             type='text'
//           />
//           <div className='bg-orange-400 w-10 flex justify-center items-center'>
//             <img src='search.gif' alt='Search' className='w-6 h-6' />
//           </div>
//         </li>

//         <ul className='flex gap-8 m-5'>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>

//           {/* Check if session exists */}
//           {session ? (
//             <li className='flex items-center'>
//               {/* Gravatar Image */}
//               <img
//                 src={getGravatarUrl(session.user.email)}
//                 alt='User Avatar'
//                 className='w-8 h-8 rounded-full'
//               />
//               {/* Logout Button */}
//               <button onClick={() => signOut()} className='bg-red-500 text-white px-4 py-2 rounded ml-4'>
//                 Logout
//               </button>
//             </li>
//           ) : (
//             <li>
//               {/* Login Button */}
//               <button onClick={() => signIn('google').catch(err => console.error(err))}
//                 className='bg-blue-500 text-white px-4 py-2 rounded'>
//                 Login
//               </button>
//             </li>
//           )}
//         </ul>
//       </ul>
//     </div>
//   )
// }

// export default Navbar

// 'use client' // ✅ Make sure this is the first line

// import React from 'react'
// import { signIn, signOut, useSession } from 'next-auth/react'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { useRef } from 'react'
// const Navbar = () => {
//   const { data: session } = useSession(); // ✅ Get session data
//   const dropdownRef = useRef(null);
//   const avatarRef = useRef(null);
//   // Check if the user is logged in
//   const userName = session?.user?.name;
//   const initials = userName ? userName.charAt(0).toUpperCase() : 'V';  // Default 'V' for initials
//   const avatarBackground = `#${Math.floor(Math.random()*16777215).toString(16)}`;  // Random color for background
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         dropdownRef.current && !dropdownRef.current.contains(event.target) &&
//         avatarRef.current && !avatarRef.current.contains(event.target)
//       ) {
//         setDropdownVisible(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className='bg-[#e3e2dd]'>
//       <ul className='navbar flex justify-between items-center gap-4 p-4'>
//         <img className='w-52' src='logoweb.jpeg' alt='Logo' />

//         <li className='w-3/4 flex'>
//           <input
//             className='border-black border-2 w-3/4 h-10 p-2'
//             placeholder='Search item'
//             type='text'
//           />
//           <div className='bg-orange-400 w-10 flex justify-center items-center'>
//             <img src='search.gif' alt='Search' className='w-6 h-6' />
//           </div>
//         </li>

//         <ul className='flex gap-8 m-5'>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>

//           {session ? (
//             <li>
//               <div
//                 className="w-10 h-10 flex items-center justify-center rounded-full"
//                 style={{ backgroundColor: avatarBackground }} onClick={() => setDropdownVisible(!dropdownVisible)}
//               >
//                 <span className="text-white font-bold">{initials}</span>
//                 {dropdownVisible && (
//                 <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-40 p-2">
//                   <ul>
//                     <li className="p-2 cursor-pointer">Profile</li>
//                     <li className="p-2 cursor-pointer" onClick={() => signOut()}>Logout</li>
//                   </ul>
//                 </div>
//               )}
//               </div>
//             </li>
//           ) : (
//             <li>
//               <button onClick={() => signIn('google').catch(err => console.error(err))}
//                 className='bg-blue-500 text-white px-4 py-2 rounded'>
//                 Login
//               </button>
//             </li>
//           )}
//         </ul>
//       </ul>
//     </div>
//   )
// }

// export default Navbar

"use client"; 

import React, { useState, useEffect, useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useCart } from "@/context/CartContext";
const Navbar = () => {
  const { cart, addToCart, removeFromCart, clearCart, subTotal } = useCart();
  console.log("Cart Details:", JSON.stringify(cart, null, 2));
  const { data: session } = useSession();
  const [cartItems, setCartItems] = useState([]);

  
  // State to handle dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Refs to handle clicks outside of the dropdown
  const dropdownRef = useRef(null);
  const avatarRef = useRef(null);

  // Check if the user is logged in
  const userName = session?.user?.name;
  const initials = userName ? userName.charAt(0).toUpperCase() : "V"; // Default 'V' for initials
  const avatarBackground = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`; // Random color for background

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  // Toggle the dropdown menu
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside avatar or dropdown, close the dropdown
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        avatarRef.current &&
        !avatarRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    // Add the event listener for clicks outside
    document.addEventListener("click", handleClickOutside);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array to run only once

  const handleListItemClick = () => {
    setDropdownVisible(false); // Close dropdown when list item is clicked
  };

  return (
    <div className="bg-[#e3e2dd]">
      <ul className="navbar flex justify-between items-center gap-4 p-1">
        <Link href="/">
          <img className="w-52" src="/logoweb.jpeg" alt="Logo" />
        </Link>

        <li className="w-3/4 flex">
          <input
            className="border-black border-2 w-3/4 h-10 p-2"
            placeholder="Search item"
            type="text"
          />
          <div className="bg-orange-400 w-10 flex justify-center items-center">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </li>

        <ul className="flex gap-8 m-5">
          <li onClick={toggleCart}>
            <i className="fa-solid fa-cart-shopping fa-xl"></i>
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>

          {session ? (
            <li className="relative">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
                style={{ backgroundColor: avatarBackground }}
                ref={avatarRef} // Ref for avatar div
                onClick={toggleDropdown} // Toggle dropdown on avatar click
              >
                <span className="text-white font-bold">{initials}</span>
              </div>

              {/* Dropdown Menu */}
              {dropdownVisible && (
                <div
                  className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-40 p-2"
                  ref={dropdownRef} // Ref for dropdown div
                >
                  <ul>
                    <li
                      className="p-2 cursor-pointer"
                      onClick={handleListItemClick}
                    >
                      {" "}
                      <Link href="/profile">Profile</Link>{" "}
                    </li>
                    <li
                      className="p-2 cursor-pointer"
                      onClick={() => {
                        signOut();
                        handleListItemClick();
                      }}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <button
                onClick={() =>
                  signIn("google").catch((err) => console.error(err))
                }
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </ul>
      <div
        ref={ref}
        className="sidebar cart absolute top-0 right-0 bg-slate-400 p-10  transition-transform translate-x-full transform"
      >
        <span
          className="text-center pt-1 absolute top-0 left-0"
          onClick={toggleCart}
        >
          <i
            className="fa-solid fa-circle-xmark"
            style={{ color: "slategray", fontSize: "24px" }}
          ></i>
        </span>
        <h2 className="font-bold font-serif text-3xl">Shopping Cart</h2>
        <ol className="list-decimal font-semibold mt-1 list-item">
        {Object.keys(cart).length === 0 ? (
    <p className="text-gray-500">Your cart is empty.</p>
  ) : (
    Object.keys(cart).map((key) => (
      <li key={key} className="flex justify-between items-center border-b py-2">
        <span>{cart[key].name} ({cart[key].size}, {cart[key].variant})</span>
        <span>Qty: {cart[key].qty}</span>
        <span>₹{cart[key].price * cart[key].qty}</span>
        <button onClick={() => removeFromCart(key)} className="ml-4 px-2 bg-red-500 text-white rounded">
          -
        </button>
      </li>
    ))
  )}
          
      
         
        
        </ol>
        <div className="Checkout flex justify-center items-center gap-2">
        
          <button className="bg-stone-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-400 transition duration-300 flex gap-5 items-center justify-center">
          <i className="fa-solid fa-bag-shopping fa-2xl" style={{color: "#B176"}}></i>
  Checkout
</button>
          <button onClick={clearCart} className="bg-stone-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-400 transition duration-300 flex gap-5 items-center justify-center">
  ClearCart
</button>
</div>
      </div>
    </div>
  );
};

export default Navbar;
