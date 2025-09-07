import "../styles/Builder.css";
import Personal from "./Personal";
import Professional from "./Professional";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Builder() {
  return (
    <div className="builder">
      <Personal />
      <Professional />
      <Education />
      <Projects />
      <Skills />
    </div>
  );
}
