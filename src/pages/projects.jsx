import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div className="w-full h-auto pb-8 ">
      <h1 className="text-center text-2xl font-semibold py-5">
        Featured Projects
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-4" >
        <div className="bg-gray-700 pr-3 h-[400px]">
          <div className="flex w-full h-[50%] justify-center items-center">
            <h1 className="text-2xl font-semibold">Progress</h1>
          </div>

          <h2 className="pl-5">
            Digital Learning Platform —
            <p>
              A full-stack web app built with React.js, Tailwind CSS, Node.js,
              Express, and MongoDB offering interactive courses, user progress
              tracking, and a smooth, responsive learning experience.
            </p>
          </h2>
          <div className="pl-5 my-3 flex ">
            <Link
              to="https://github.com/govind9399/Digital_Education"
              className="text-sky-500 flex gap-2"
            >
              <FaGithub className="size-5" />
              Code
            </Link>
            <Link to="#" className="text-sky-500 ml-7">
              Live Demo
            </Link>
          </div>
        </div>

        <div className="bg-gray-700 pr-3 h-[400px]">
          <div className="flex w-full h-[50%] justify-center items-center">
            <h1 className="text-2xl font-semibold">Live Preview</h1>
          </div>
          <h2 className="pl-5">
            Amazon Clone —
            <p>
              An e-commerce website built with HTML and CSS, replicating
              Amazon’s homepage layout with clean design, product sections, and
              a user-friendly interface.
            </p>
          </h2>
          <div className="pl-5 my-3 flex ">
            <Link
              to="https://github.com/govind9399/Amazon-clone"
              className="text-sky-500 flex gap-2"
            >
              <FaGithub className="size-5" />
              Code
            </Link>
            <Link
              to="https://govind9399.github.io/Amazon-clone/"
              className="text-sky-500 ml-7"
            >
              Live Demo
            </Link>
          </div>
        </div>

        <div className="bg-gray-700 pr-3 h-[400px]">
          <div className="flex w-full h-[50%] justify-center items-center">
            <h1 className="text-2xl font-semibold">Live Preview</h1>
          </div>
          <h2 className="pl-5">
            PW Skills Clone —{" "}
            <p>
              A responsive website built with React.js and Tailwind CSS,
              replicating PW Skills’ design with clean components, modern
              layout, and smooth user experience.
            </p>{" "}
          </h2>

          <div className="pl-5 my-3 flex">
            <Link
              to="https://github.com/govind9399/pw-skills"
              className="text-sky-500 flex gap-2"
            >
              <FaGithub className="size-5" />
              Code
            </Link>
            <Link to="#" className="text-sky-500 ml-7">
              Live Demo
            </Link>
          </div>
        </div>

        <div className="bg-gray-700 pr-3 h-[400px]">
          <div className="flex w-full h-[50%] justify-center items-center">
            <h1 className="text-2xl font-semibold">Live Preview</h1>
          </div>
          <h2 className="pl-5">
            Netflix Cards —
            <p>
              A modern UI project built with React.js and Tailwind CSS,
              featuring responsive and animated movie cards inspired by
              Netflix’s design.
            </p>
          </h2>
          <div className="pl-5 my-3 flex ">
            <Link
              to="https://govind9399.github.io/Netflix-cards/"
              className="text-sky-500 flex gap-2"
            >
              <FaGithub className="size-5" />
              Code
            </Link>
            <Link
              to="netflix-cards-omega.vercel.app"
              className="text-sky-500 ml-7"
            >
              Live Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
