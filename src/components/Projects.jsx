import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const projects = [
  {
    title: "AskAbdelhalimET",
    description: "MERN service website with admin dashboard, bookings & real-time support.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/image1.jpg",
    live: "https://askabdelhalimet.com",
    github: "https://github.com/hackingthehack/AskAbdelhalimET",
  },
  {
    title: "AbdMarketPlace",
    description: "Simple marketplace app like Jiji with full CRUD & user auth.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    image: "/image1.jpg",
    live: "https://askabdelhalimet.com",
    github: "https://github.com/hackingthehack/AskAbdelhalimET",
  },
  {
    title: "Portfolio Website",
    description: "My portfolio site with animations and responsive design.",
    tech: ["React", "Tailwind"],
    image: "/image1.jpg",
    live: "https://askabdelhalimet.com",
    github: "https://github.com/hackingthehack/AskAbdelhalimET",
  },
  {
    title: "Food Delivery App",
    description: "A full-stack app for ordering food, menu, cart & login system.",
    tech: ["React", "Node", "MongoDB"],
    image: "/projects/food-del.png",
    live: "https://askabdelhalimet.com",
    github: "https://github.com/hackingthehack/AskAbdelhalimET",
  },
  {
    title: "HalimFX",
    description: "Graphics/video editing demo site with modern UI.",
    tech: ["HTML", "CSS", "JS"],
    image: "/image1.jpg",
    live: "https://askabdelhalimet.com",
    github: "https://github.com/hackingthehack/AskAbdelhalimET",
  },
  {
    title: "HalimTek Landing",
    description: "Landing page for HalimTekET brand, animated and clean.",
    tech: ["Vite", "React", "Tailwind"],
    image: "/image1.jpg",
    live: "https://askabdelhalimet.com",
    github: "https://github.com/hackingthehack/AskAbdelhalimET",
  },
];

// Autoplay plugin for keen-slider
function Autoplay(slider) {
  let timeout;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2500);
  }
  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
  {
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 20,
      perMove: 1,   // ← scroll 1 slide at a time
    },
    breakpoints: {
      "(max-width: 1023px)": {
        slides: { perView: 2, spacing: 15, perMove: 1 },
      },
      "(max-width: 639px)": {
        slides: { perView: 1, spacing: 10, perMove: 1 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  },
  [Autoplay]
);



  return (
    <section id="projects" className="bg-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-500 mb-10 text-center">My Projects</h2>

        <div ref={sliderRef} className="keen-slider">
          {projects.map((project, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-white/5 hover:bg-white/10 transition duration-300 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-pink-600 text-white px-2 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-pink-400 underline">
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm text-green-400 underline">
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-3">
          {[...Array(projects.length).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === idx ? "bg-pink-500" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}