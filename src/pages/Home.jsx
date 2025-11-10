import { Link } from "react-router-dom";
import Skills from "./Skills";
import Contact from "./contact";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdDownload } from "react-icons/md";
import Projects from "./projects";
const Home = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className=" flex  text-start px-6 gap-1 justify-between">
          <div className="flex flex-col text-start md:pl-6 gap-1">
            <span className=" md:text-4xl md:ml-20 text-2xl font-semibold ml-2 mt-8">
              Hi ,I'm Govind 👋
            </span>
            <span className="md:text-2xl text-xl ml-2 md:ml-20 font-semibold">
              Full Stack Developer
            </span>
          </div>
          <div>
            {/* <img */}
              // src="./src/assets/photo.jpg"
              // alt="img"
              // className="w-[200px] md:[300px] rounded-[50%]  md:mr-14 mr-6 mt-4"
            // 
          </div>
        </div>
        <div className=" px-4 my-4 md:mx-10">
          <p>
            My journey in web development began with C and C++, which gave me a
            strong foundation in problem-solving and logic building. Over time,
            I developed expertise in HTML, CSS, Tailwind CSS, JavaScript, and
            React, enabling me to build dynamic and modern front-end interfaces.
            On the backend, I work with Node.js, Express.js, MongoDB, and MySQL,
            creating efficient and scalable APIs that connect everything
            seamlessly.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center md:mx-20 mx-8 my-2 mb-4">
       <a
         href="/Resume/Resume.pdf"
         download="Govind_Patel_Resume.pdf"
         className="px-4 py-2 border border-blue-400 rounded-xl font-semibold transition flex gap-2" >
          <MdDownload  className="text-2xl "/>
          Resume
       </a>
        <div className="flex gap-6 ">
          <Link to="https://github.com/govind9399">
            <FaGithub className="size-5" />
          </Link>
          <Link to="https://www.linkedin.com/in/govind-patel-983b70292/">
            <FaLinkedinIn className="size-5" />
          </Link>

          <Link to="https://leetcode.com/u/Govind-patel/">
            <SiLeetcode className="size-5" />
          </Link>
        </div>
      </div>

      <Skills />
      <Projects />
      <Contact />
    </>
  );
};
export default Home;
