import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  const education = [
    {
      year: "2028",
      program: "BS Information Technology",
      school: "USTP – CDO Campus"
    },
    {
      year: "2024",
      program: "Senior High School",
      school: "COC - PHINMA"
    },
    {
      year: "2022",
      program: "High School",
      school: "COC - PHINMA"
    },
    {
      year: "2018",
      program: "Elementary",
      school: "COC - PHINMA"
    }

  ];

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className='container'>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
        </button>

        <Header />
        <About />
        <Skills skills={skills} />
        <Education education={education} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
