
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import './index.css';
import './app.css';

import ProjectDetails from './components/ProjectsDetails';
import ScrollToTop from './components/ScrollToTop';
// import { Contact } from 'lucide-react';


function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectDetails/:id" element={<ProjectDetails />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
