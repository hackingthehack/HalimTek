import { FiGithub, FiLinkedin, FiSend, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-600 dark:text-white transition-colors duration-300 border-gray-700 dark:border-gray-800 py-10 px-6 border-t">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        {/* Logo or Name */}
        <div className="text-2xl font-bold text-pink-500">
          HalimTek<span className="text-black dark:text-white">.</span>
        </div>

        {/* Personal Quote */}
        <p className="italic text-gray-600 dark:text-gray-400 text-sm">
          "Building beautiful, useful things — one line at a time."
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-2">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FiLinkedin size={20} />
          </a>
          <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FiSend size={20} />
          </a>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FiFacebook size={20} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FiTwitter size={20} />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FiInstagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} HalimTek. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
