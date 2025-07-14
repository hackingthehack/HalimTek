import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
// import DarkModeToggle from "./DarkModeToggle"; // Removed since hidden now

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  // Sticky shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;

    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-[999] bg-white/70 dark:bg-black/50 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-none"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-start md:justify-between items-center px-6 py-4">
          {/* Left Side: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            {/* Hamburger Icon (Mobile only) */}
            <button
              className="md:hidden text-2xl text-pink-600"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Logo */}
            <h1 className="text-2xl font-bold text-pink-600 cursor-pointer select-none">
              HalimTek
            </h1>
          </div>

          {/* Right Side: Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    spy={true}
                    activeClass="border-b-2 border-pink-600"
                    className="cursor-pointer text-black dark:text-white hover:text-pink-600 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <div
        ref={menuRef}
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out md:hidden z-50
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col p-6 space-y-6 text-pink-600 dark:text-pink-400">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onClick={() => setMenuOpen(false)}
              activeClass="text-pink-800 font-bold"
              className="cursor-pointer text-lg hover:text-pink-800 transition"
              style={{
                animation: menuOpen
                  ? `fadeInUp 0.3s ease forwards ${i * 0.1 + 0.2}s`
                  : "none",
                opacity: 0,
              }}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
