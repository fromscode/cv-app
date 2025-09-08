import { useState } from "react";

import "../styles/Builder.css";
import Personal from "./Personal";
import Professional from "./Professional";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Builder(props) {
  const [index, setIndex] = useState(0);

  function handleChange(index) {
    setIndex(index);
  }

  return (
    <div className="builder">
      <Personal
        personal={props.personal}
        onChange={props.onPersonalChange}
        disabled={index !== 0}
        onShowClick={handleChange}
      />
      <Professional
        professional={props.professional}
        onChange={props.onProfessionalChange}
        disabled={index !== 1}
        onShowClick={handleChange}
      />
      <Education
        education={props.education}
        onChange={props.onEducationChange}
        disabled={index !== 2}
        onShowClick={handleChange}
      />
      <Projects
        projects={props.projects}
        onChange={props.onProjectChange}
        disabled={index !== 3}
        onShowClick={handleChange}
      />
      <Skills
        skills={props.skills}
        onChange={props.onSkillChange}
        disabled={index !== 4}
        onShowClick={handleChange}
      />
    </div>
  );
}
