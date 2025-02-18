























// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import SessionWrapper from "@/components/SessionWrapper";  // ✅ Correct Import
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import { useEffect, useState } from "react";

//   const [cart, setCart] = useState({});
//   const [subTotal, setSubTotal] = useState(0);

//   useEffect(() => {
//     try {
//       if (localStorage.getItem("cart")) {
//         setCart(JSON.parse(localStorage.getItem("cart")));
//       }
//     } catch (error) {
//       console.log(error);
//       localStorage.clear();
//     }
//   }, []);

//   const saveCart = (myCart) => {
//     localStorage.setItem("cart", JSON.stringify(myCart));
//     let subt = 0;
//     let keys = Object.keys(myCart);
//     for (let i = 0; i < keys.length; i++) {
//       subt += myCart[keys[i]].price * myCart[keys[i]].qty;
//     }
//     setSubTotal(subt);
//   };

//   const addToCart = (itemCode, qty, price, name, size, variant) => {
//     let newCart = { ...cart }; // Create a new copy of cart
//     if (itemCode in newCart) {
//       newCart[itemCode].qty += qty;
//     } else {
//       newCart[itemCode] = { qty, price, name, size, variant };
//     }
//     setCart(newCart);
//     saveCart(newCart);
//   };

//   const removeFromCart = (itemCode, qty) => {
//     let newCart = { ...cart };
//     if (itemCode in newCart) {
//       newCart[itemCode].qty -= qty;
//       if (newCart[itemCode].qty <= 0) {
//         delete newCart[itemCode];
//       }
//     }
//     setCart(newCart);
//     saveCart(newCart);
//   };

//   const clearCart = () => {
//     setCart({});
//     saveCart({});
//   };
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen relative overflow-x: hidden;`}>
//         <SessionWrapper>
//           <div className="sticky top-0 z-50">
//           <Navbar
//         cart={cart}
//         addToCart={addToCart}
//         removeFromCart={removeFromCart}
//         clearCart={clearCart}
//         subTotal={subTotal}
//       />
//           </div>
//           <main className="flex-grow p-8">{children}</main> {/* ✅ Yeh push karega footer ko neeche */}
//           <Footer />
//         </SessionWrapper>
//       </body>
//     </html>
//   );
// }





"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SessionWrapper from "@/components/SessionWrapper";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen relative overflow-x-hidden`}>
        <SessionWrapper>
          <CartProvider>
            <div className="sticky top-0 z-50">
              <Navbar />
            </div>
            <main className="flex-grow p-8">{children}</main>
            <Footer />
          </CartProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}












































































// "use client";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import SessionWrapper from "@/components/SessionWrapper";
// import Footer from "@/components/Footer";
// import { useEffect, useState } from "react";
// import React from "react";
// import { CartProvider } from "./context/CartContext"; 

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }) {
//   const [cart, setCart] = useState(null); // Null initially
//   const [subTotal, setSubTotal] = useState(0);

//   useEffect(() => {
//     try {
//       const storedCart = localStorage.getItem("cart");
//       if (storedCart) {
//         setCart(JSON.parse(storedCart));
//       } else {
//         setCart({});
//       }
//     } catch (error) {
//       console.log(error);
//       localStorage.clear();
//       setCart({});
//     }
//   }, []);

//   const saveCart = (myCart) => {
//     localStorage.setItem("cart", JSON.stringify(myCart));
//     let subt = 0;
//     let keys = Object.keys(myCart);
//     for (let i = 0; i < keys.length; i++) {
//       subt += myCart[keys[i]].price * myCart[keys[i]].qty;
//     }
//     setSubTotal(subt);
//   };

//   const addToCart = (itemCode, qty, price, name, size, variant) => {
//     let newCart = { ...cart };
//     if (itemCode in newCart) {
//       newCart[itemCode].qty += qty;
//     } else {
//       newCart[itemCode] = { qty, price, name, size, variant };
//     }
//     setCart(newCart);
//     saveCart(newCart);
//   };

//   const removeFromCart = (itemCode, qty) => {
//     let newCart = { ...cart };
//     if (itemCode in newCart) {
//       newCart[itemCode].qty -= qty;
//       if (newCart[itemCode].qty <= 0) {
//         delete newCart[itemCode];
//       }
//     }
//     setCart(newCart);
//     saveCart(newCart);
//   };

//   const clearCart = () => {
//     setCart({});
//     saveCart({});
//   };

//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen relative overflow-x-hidden`}>
//         <SessionWrapper>
//           <div className="sticky top-0 z-50">
//             {cart !== null && ( // Ensure cart is loaded before rendering Navbar
//               <Navbar
//                 cart={cart}
//                 addToCart={addToCart}
//                 removeFromCart={removeFromCart}
//                 clearCart={clearCart}
//                 subTotal={subTotal}
//               />
//             )}
//           </div>
//           <main className="flex-grow p-8">
//           <CartProvider>{children}</CartProvider>
//           </main>
//           <Footer />
//         </SessionWrapper>
//       </body>
//     </html>
//   );
// }
