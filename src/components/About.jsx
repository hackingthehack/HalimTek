import { FaCode, FaProjectDiagram, FaSmile } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className=" relative w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: About text & stats */}
        <div className="space-y-8 animate-fade-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            👋 I’m <span className="font-semibold text-white">Abdelhalim Adem</span>, a dedicated full stack developer from Ethiopia.
            I specialize in creating responsive, scalable, and beautiful web apps using the MERN stack.
          </p>
          <p className="italic text-gray-400">
            “Code is the language I use to create the future.”
          </p>

          {/* Skill badges */}
          <div className="flex flex-wrap gap-3">
            {["React.js", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "JavaScript"].map(skill => (
              <span key={skill} className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm shadow">
                {skill}
              </span>
            ))}
          </div>

          {/* Stats Counters */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <Stat icon={<FaCode />} label="Projects" value="25+" />
            <Stat icon={<FaProjectDiagram />} label="Clients" value="8+" />
            <Stat icon={<FaSmile />} label="Years of Coding" value="3+" />
          </div>
        </div>

        {/* Right: Timeline + Avatar Card */}
        <div className="space-y-8 animate-fade-right">
          {/* Avatar */}
          <div className="w-full bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-xl flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
              <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold">Abdelhalim Adem</h3>
            <p className="text-gray-400 text-sm">Full Stack Developer (MERN)</p>
          </div>

          {/* Timeline */}
          <div className="space-y-6 border-l-4 border-pink-600 pl-6">
            <TimelineItem year="2021" text="Started learning HTML, CSS & JS" />
            <TimelineItem year="2022" text="Built my first full stack MERN app" />
            <TimelineItem year="2023" text="Graduated in Computer Engineering and launched AskAbdelhalimET" />
            <TimelineItem year="2024" text="Started HalimTek & building portfolio" />
          </div>
        </div>
      </div>

      {/* Optional SVG background decoration */}
      <svg className="absolute top-0 right-0 opacity-10 w-64 h-64" viewBox="0 0 200 200">
        <path fill="#ec4899" d="M45.4,-70.7C57.1,-60.6,63.7,-45.5,69.3,-30.4C74.8,-15.3,79.3,-0.1,74.6,11.9C69.9,23.9,55.9,32.6,43.1,42.1C30.3,51.6,18.6,61.8,3.4,65.2C-11.8,68.7,-30.5,65.3,-44.5,56.2C-58.5,47.1,-67.7,32.2,-70.3,16.4C-73,-0.5,-69.1,-17,-61.4,-31.5C-53.6,-46,-42,-58.6,-27.7,-66.4C-13.3,-74.3,3.8,-77.3,20.9,-75.5C37.9,-73.7,53.8,-67.1,45.4,-70.7Z" transform="translate(100 100)" />
      </svg>

      {/* Animations */}
      <style>{`
        @keyframes fadeLeft { 0% {opacity:0; transform:translateX(-30px);} 100% {opacity:1; transform:translateX(0);} }
        @keyframes fadeRight { 0% {opacity:0; transform:translateX(30px);} 100% {opacity:1; transform:translateX(0);} }
        .animate-fade-left { animation: fadeLeft 1s ease-out both; }
        .animate-fade-right { animation: fadeRight 1s ease-out both; }
      `}</style>
    </section>
  );
}

// Sub-components
function Stat({ icon, label, value }) {
  return (
    <div className="text-center">
      <div className="text-3xl text-pink-500 mb-2">{icon}</div>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

function TimelineItem({ year, text }) {
  return (
    <div className="relative pl-4">
      <div className="absolute -left-6 top-1 w-4 h-4 bg-pink-500 rounded-full border-2 border-white" />
      <p className="text-sm text-pink-400 font-bold">{year}</p>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}
