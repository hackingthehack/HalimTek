import { useState, useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiJavascript } from "react-icons/si";

const skillsData = {
  frontend: [
    { name: "HTML5", icon: <FaHtml5 />, percentage: 95, color: "bg-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, percentage: 90, color: "bg-blue-500" },
    { name: "JavaScript", icon: <SiJavascript />, percentage: 90, color: "bg-yellow-400" },
    { name: "React.js", icon: <FaReact />, percentage: 85, color: "bg-cyan-400" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, percentage: 80, color: "bg-sky-400" },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs />, percentage: 85, color: "bg-green-500" },
    { name: "Express.js", icon: <SiExpress />, percentage: 80, color: "bg-gray-400" },
    { name: "MongoDB", icon: <SiMongodb />, percentage: 80, color: "bg-green-400" },
    { name: "Python", icon: <FaPython />, percentage: 70, color: "bg-yellow-300" },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt />, percentage: 85, color: "bg-orange-400" },
    { name: "GitHub", icon: <FaGitAlt />, percentage: 85, color: "bg-white" },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [fade, setFade] = useState(true);
  const tabs = Object.keys(skillsData);
  const tabRefs = useRef([]);

  // Handle fade animation on tab change
  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  // Keyboard navigation for tabs
  const handleKeyDown = (e) => {
    const currentIndex = tabs.indexOf(activeTab);
    if (e.key === "ArrowRight") {
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex]);
      tabRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowLeft") {
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prevIndex]);
      tabRefs.current[prevIndex]?.focus();
    }
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-500 mb-10 text-center">
          My Skills
        </h2>

        {/* Tabs */}
        <div
          className="flex justify-center space-x-6 mb-12"
          role="tablist"
          aria-label="Skills categories"
          onKeyDown={handleKeyDown}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              tabIndex={activeTab === tab ? 0 : -1}
              ref={(el) => (tabRefs.current[i] = el)}
              onClick={() => setActiveTab(tab)}
              className={`capitalize px-5 py-2 font-semibold rounded-full transition focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                activeTab === tab
                  ? "bg-pink-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-pink-600 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills List with fade animation */}
        <div
          className={`space-y-6 max-w-3xl mx-auto transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
        >
          {skillsData[activeTab].map(({ name, icon, percentage, color }) => (
            <SkillItem
              key={name}
              icon={icon}
              name={name}
              percentage={percentage}
              color={color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillItem({ icon, name, percentage, color }) {
  const [progress, setProgress] = useState(0);

  // Animate progress bar on mount
  useEffect(() => {
    const timeout = setTimeout(() => setProgress(percentage), 100);
    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div className="flex items-center space-x-4">
      <div className={`text-3xl ${color} flex-shrink-0`}>{icon}</div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="font-semibold text-gray-200">{name}</span>
          <span className="text-gray-400">{percentage}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
          <div
            className={`${color} h-3 rounded-full transition-all duration-1000 ease-in-out`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
