import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 py-8">
        <h1 className="md:text-3xl text-2xl font-semibold">Contact Me</h1>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <BiLogoGmail className="size-6" />
            gmail:
            <span className="text-blue-300">govindpatel810329@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <FaLinkedinIn className="size-5" />
            linkedin:<Link to="https://www.linkedin.com/in/govind-patel-983b70292/" className="text-blue-300">govind9399</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
