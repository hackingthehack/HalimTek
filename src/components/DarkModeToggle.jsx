// import { useEffect, useState } from "react";
// import { FiSun, FiMoon } from "react-icons/fi";

// export default function DarkModeToggle() {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   return (
//     <button
//       onClick={() => setDarkMode(!darkMode)}
//       className="fixed top-4 right-4 z-50 p-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white shadow-lg transition-all duration-300"
//       aria-label="Toggle Dark Mode"
//     >
//       {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
//     </button>
//   );
// }
