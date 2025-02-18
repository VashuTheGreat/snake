import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
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
  );
}
