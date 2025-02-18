import { FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 invert">
      <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between md:items-center">
        {/* Logo & Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">VashuCoderStyle</h2>
          <p className="text-gray-400 mt-2">Code | Innovate | Inspire</p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 md:mt-0 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Projects</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
        </nav>

        {/* Social Links */}
        <div className="mt-6 md:mt-0 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Section with Heart */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        <p>
          Made with <FaHeart className="inline text-red-500 animate-pulse" /> by VashuCoderStyle
        </p>
        <p>© {new Date().getFullYear()} VashuCoderStyle. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
