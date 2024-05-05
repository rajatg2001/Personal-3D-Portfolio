import HomePage from '../Home/HomePage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css'
import Navbar from "../Navbar/Navbar";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";
import Testimonials from "../../pages/Testimonials/Testimonials";
function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
      <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App
