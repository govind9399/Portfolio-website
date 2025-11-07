import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { useEffect, useState } from "react";
import { SiC, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
    level: 90,
  },
  { name: "React", icon: <FaReact className="text-blue-400" />, level: 80 },
  {
    name: "React Native",
    icon: <SiReact className="text-indigo-400" />,
    level: 70,
  },
];

const skills2 = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-400" />,
    level: 80,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    level: 75,
  },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" />, level: 70 },
];

const Language = [
  { name: "C", icon: <SiC  className="text-blue-600"/>, level: 70 },
  { name: "C++", icon: <SiCplusplus className="text-blue-200" />, level: 90 },
];

const ProgressBar = ({ level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setWidth(level), 300);
    return () => clearTimeout(timeout);
  }, [level]); 

  return (
    <div className="w-full bg-gray-500 h-2 rounded-full mt-2">
      <div
        className="h-2 bg-blue-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <div className="md:border-none border-1 border-blue-600 mx-2 rounded-xl text-white py-6 md:py-8 px-2 md:px-20">
        <h2 className=" md:text-3xl text-2xl px-2 font-bold text-center md:mb-10 mb-2">
          Frontend Development Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-2xl flex flex-col  py-2  md:py-4 shadow-lg"
            >
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{skill.icon}</span>
                  <h3 className="text-xl ">{skill.name}</h3>
                </div>
                <p className="text-sm">{skill.level}%</p>
              </div>
              <div className="px-4">
                <ProgressBar level={skill.level} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" md:border-none border-1 border-blue-600 md:mx-8 mx-2 rounded-xl md:py-8  py-6 md:px-20 my-6 md:my-8 text-white px-2">
        <h2 className="md:text-3xl  text-2xl px-3 font-bold text-center md:mb-10">
          Backend Development Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-2">
          {skills2.map((skill2, index) => (
            <div key={index} className="bg-gray-700 py-2 md:py-4 rounded-xl">
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{skill2.icon}</span>
                  <h3 className="text-xl">{skill2.name}</h3>
                </div>
                <h3>{skill2.level}%</h3>
              </div>
              <div className="px-4">
                <ProgressBar level={skill2.level} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" md:border-none border-1 border-blue-600 md:mx-8 mx-2 rounded-xl md:py-8  py-6 md:px-20 my-6 md:my-8 text-white px-2">
        <h2 className="md:text-3xl  text-2xl px-3 font-bold text-center md:mb-10">
          Languages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
          {Language.map((langues, index) => (
            <div key={index} className="bg-gray-700 py-2 md:py-4 rounded-xl">
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{langues.icon}</span>
                  <h2 className="text-2xl font-semibold">{langues.name}</h2>
                </div>
                <h2>{langues.level}%</h2>
              </div>
              <div className="px-4">
                <ProgressBar level={langues.level} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
