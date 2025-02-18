"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle } from 'lucide-react';

const OrderPlaced = () => {
    const [timeLeft, setTimeLeft] = useState(30); // 30 सेकंड से शुरू

    useEffect(() => {
        setTimeout(()=>{
            imgshow()
        },30000)
      if (timeLeft === 0) {
        console.log("Time's up!");
        return;
      }
  
      // 1 सेकंड के बाद टाइमर को अपडेट करें
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
  
      // क्लीनअप फंक्शन (टाइमर को रोकने के लिए)
      return () => clearTimeout(timer);
    }, [timeLeft]);
    const [imga, setImga] = useState(true);

    const imgshow=()=>{
        setImga(false)
    }
    
  return (
    
    <div className="flex flex-col items-center justify-center h-screen">
      {imga && <><img 
        src="payQR.jpg" 
        alt="QR CODE" 
        className="w-40 h-40 object-cover rounded-xl shadow-lg border border-gray-300"
      />      <div>
      <h2 className="text-red-600">Time Left: {timeLeft} seconds</h2>
    </div></>  }

      {!imga && (
        <>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <CheckCircle size={80} className="text-green-500" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl font-semibold mt-4 text-gray-700"
          >
            Order Placed Successfully!
          </motion.h1>
          
        </>
      )}

<div className="flex flex-col items-center justify-center  p-4 bg-gray-100 mt-10">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-4">Get in touch with us via WhatsApp or Call.</p>
        
        <div className="flex flex-col gap-4">
          <Link 
            href="https://wa.me/919354703303" 
            target="_blank" 
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
            <MessageCircle /> Message on WhatsApp
          </Link>
          
          <Link 
            href="tel:+919354703303" 
            className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
            <Phone /> Call Now
          </Link>
        </div>
      </div>
    </div>
</div>
    
  );
};
export default OrderPlaced;
