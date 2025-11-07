import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Skills from "./pages/Skills";
import Projects from "./pages/projects";

const App = () => {
  return (
    <Router>
      <Navbar />

      <div className="text-white bg-gray-800 w-full h-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
