"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
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
    </div>
  );
};
export default OrderPlaced;
