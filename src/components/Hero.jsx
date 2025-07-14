import { FaLinkedin, FaGithub, FaTelegram, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";

function useTypingAnimation(texts, speed = 150, pause = 1500) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!deleting && j <= texts[i].length) {
      timeout = setTimeout(() => {
        setText(texts[i].slice(0, j));
        setJ(j + 1);
      }, speed);
    } else if (deleting && j >= 0) {
      timeout = setTimeout(() => {
        setText(texts[i].slice(0, j));
        setJ(j - 1);
      }, speed / 2);
    } else if (j > texts[i].length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (j < 0) {
      setDeleting(false);
      setI((i + 1) % texts.length);
      setJ(0);
    }
    return () => clearTimeout(timeout);
  }, [i, j, deleting]);

  return text;
}

export default function Hero() {
  const typed = useTypingAnimation([
    "Full Stack Developer",
    "MERN Stack Expert",
    "Tech Enthusiast",
  ]);

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Glow animation background dots */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute w-60 h-60 bg-pink-500 blur-3xl opacity-20 rounded-full animate-pulse left-[10%] top-[20%]" />
        <div className="absolute w-72 h-72 bg-blue-500 blur-3xl opacity-20 rounded-full animate-pulse right-[15%] top-[40%]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-32 px-4 animate-fade-up">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-10 shadow-lg w-full max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-transparent bg-clip-text">
            Hi, I’m Abdelhalim Adem
          </h1>
          <p className="text-lg md:text-xl font-mono mt-4 h-10 text-gray-300">
            {typed}
            <span className="border-r-2 border-pink-500 animate-blink ml-1"></span>
          </p>
          <p className="mt-6 max-w-xl mx-auto text-gray-400">
            I build modern web applications with performance and design in mind — from concept to deployment.
          </p>
          <div className="mt-8 flex justify-center gap-6 text-3xl text-white">
            <a href="#"><FaLinkedin className="hover:text-pink-400 transition" /></a>
            <a href="#"><FaGithub className="hover:text-pink-400 transition" /></a>
            <a href="#"><FaTelegram className="hover:text-pink-400 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-pink-400 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-400 transition" /></a>
          </div>
        </div>
      </div>

      {/* River Shape SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[280px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,197.3C672,203,768,213,864,202.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Custom styles */}
      <style>{`
        @keyframes blink {
          0%, 100% { border-color: transparent }
          50% { border-color: #ec4899 }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        .animate-fade-up {
          animation: fadeUp 1s ease-out both;
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
