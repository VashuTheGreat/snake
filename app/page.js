"use client";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/router';
// import './styles.css';
import "swiper/css/autoplay";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function App() {
  
   // Use the router hook properly

  //  const router = useRouter();
  //  const handleproduct = () => {
  //   console.log("Navigating to products...");
  //   router.push("/products");
  // };
   // Navigate to the products page

  useEffect(() => {
  
    // Function to check if an element is in the viewport
    const handleScroll = () => {
      const elements = document.querySelectorAll(".pop-slide");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        // Check if the element is in the viewport
        if (rect.top < window.innerHeight) {
          // Add 'show' class when element comes into view (first time or after scrolling up)
          if (!el.classList.contains("show")) {
            el.classList.add("show");
          }
        } else {
          // Remove 'show' class when element goes out of the viewport (to re-trigger the effect)
          el.classList.remove("show");
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll on page load to check for elements already in view
    handleScroll();

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2500 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="1.webp" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="2.webp" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="3.webp" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="4.webp" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="5.webp" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="6.webp" alt="img" />
        </SwiperSlide>
      </Swiper>
      <div className="text-center">
  <h2 className="pop-slide font-bold text-2xl mb-6  align-middle p-8">COLLECTIONS</h2>
  <div className="Collection flex flex-wrap justify-center gap-10 px-6 w-11/12">
    <Link href={`/products/${'caps'}`}><div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./caps.webp')" }} >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        Caps
      </div>
    </div></Link>
    <Link href={`/tshirts`}><div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./oversizedtshirt.webp')" }} >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        T-shirts
      </div>
    </div></Link>
    <Link href={`/tshirts`}><div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./polotshirts.webp')" }} >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        Polo T-Shirts
      </div>
    </div></Link>
    <Link href={`/pants`}><div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./pants.jpg')" }} >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        Pants
      </div>
    </div></Link>
    <Link href={`/tshirts`}><div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./tshirt.webp')" }} >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        T Shirts
      </div>
    </div></Link>
    <Link href={`/hoodies`}><div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./hoodie.webp')" }} >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        Hoodies
      </div>
    </div></Link>
    </div>
</div>



{/* //second  */}


      <div className="text-center">
  <h2 className="pop-slide font-bold text-2xl mb-6  align-middle p-8">THEMES</h2>
  <div className="Collection flex flex-wrap justify-center gap-10 px-6 w-11/12">
   <Link href={`/products/${'Life Style'}`}> <div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./lifestyle.webp')" }}  >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        Lifestyle
      </div>
    </div></Link>
    <Link  href={`/products/${'Programming'}`}><div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./programming.webp')" }}
    >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        Programming
      </div>
    </div></Link>
    <Link  href={`/tshirts`}><div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./fitness.webp')" }}
    >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        Fitness
      </div>
   </div></Link> 
    <Link  href={`/mugs`}><div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./mugs.webp')" }}
    >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        Mugs
      </div>
    </div></Link>
    <Link  href={`/products/${'Mouse pads'}`}><div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./mousepad.webp')" }}
    >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        Mouse Pads
      </div>
    </div></Link>
    <Link  href={`/products/${'Gaming'}`}><div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./gaming.webp')" }}
    >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        Gaming
      </div>
    </div></Link>
    <Link  href={`/products/${'Customized'}`}><div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./Customized.webp')" }}
    >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        Customized
      </div>
   </div></Link> 
    <Link  href={`/products/${'Combo Offers'}`}><div
      className="card pop-slide bg-cover bg-center bg-no-repeat h-80 w-80 p-6 flex items-end justify-center text-white rounded-lg shadow-lg"
      style={{ backgroundImage: "url('./combooffers.webp')" }}
    >
      <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center font-bold text-xl w-full">
        Combo Offers
      </div>
   </div></Link> 
  </div>
</div>

<div className="pop-slide">
  <img src='./siping.jpeg' alt='img'/>
</div>



    </>
  );
}











































