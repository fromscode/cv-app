import "../styles/Builder.css";
import Personal from "./Personal";
import Professional from "./Professional";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Builder(props) {
  return (
    <div className="builder">
      <Personal personal={props.personal} onChange={props.onPersonalChange} />
      <Professional
        professional={props.professional}
        onChange={props.onProfessionalChange}
      />
      <Education
        education={props.education}
        onChange={props.onEducationChange}
      />
      <Projects projects={props.projects} onChange={props.onProjectChange} />
      <Skills skills={props.skills} onChange={props.onSkillChange} />
    </div>
  );
}
