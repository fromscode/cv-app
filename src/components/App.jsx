import { useState } from "react";

import "../styles/App.css";

import CV from "./CV";
import Builder from "./Builder";

import PersonalObj from "../data/PersonalObj";
import ProfessionalObj from "../data/ProfessionalObj";
import EducationObj from "../data/EducationObj";
import ProjectObj from "../data/ProjectObj";
import SkillObj from "../data/SkillObj";

function App() {
  const [personal, setPersonal] = useState(PersonalObj);
  const [professional, setProffesional] = useState(ProfessionalObj);
  const [education, setEducation] = useState(EducationObj);
  const [projects, setProjects] = useState(ProjectObj);
  const [skills, setSkills] = useState(SkillObj);

  function handlePersonal(key, value, type) {
    if (type === "normal") {
      setPersonal({
        ...personal,
        [key]: value,
      });
    } else if (type === "extra-key") {
      const tempVal = personal[key];
      const newObj = { ...personal };
      delete newObj[key];
      newObj[value] = tempVal;
      setPersonal(newObj);
    } else if (type === "extra-value") {
      setPersonal({ ...personal, [key]: value });
    } else if (type === "delete") {
      const newObj = { ...personal };
      delete newObj[key];
      setPersonal(newObj);
    } else if (type === "add") {
      const newObj = { ...personal, Key: "" };
      setPersonal(newObj);
    }
  }

  function handleProfessional(key, value, id) {
    switch (key) {
      case "summary":
        setProffesional({ ...professional, summary: value });
        break;
      case "company": {
        const newObj = { ...professional };
        newObj.jobs = newObj.jobs.map((job) => {
          if (job.id !== id) return job;
          else {
            job.companyName = value;
            return job;
          }
        });
        setProffesional(newObj);
        break;
      }
      case "title": {
        const newObj = { ...professional };
        newObj.jobs = newObj.jobs.map((job) => {
          if (job.id !== id) return job;
          else {
            job.jobTitle = value;
            return job;
          }
        });
        setProffesional(newObj);
        break;
      }
      case "point": {
        const newObj = { ...professional };
        outer: for (const job of newObj.jobs) {
          for (const jobPoint of job.jobPoints) {
            if (jobPoint.id === id) {
              jobPoint.point = value;
              break outer;
            }
          }
        }
        setProffesional(newObj);
        break;
      }
    }
  }

  function handleEducation(key, value, id) {
    switch (key) {
      case "school": {
        setEducation(
          education.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.schoolName = value;
              return obj;
            }
          }),
        );
        break;
      }
      case "course": {
        setEducation(
          education.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.courseName = value;
              return obj;
            }
          }),
        );
        break;
      }
      case "start": {
        setEducation(
          education.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.startDate = value;
              return obj;
            }
          }),
        );
        break;
      }
      case "end": {
        setEducation(
          education.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.endDate = value;
              return obj;
            }
          }),
        );
        break;
      }
    }
  }

  function handleProject(key, value, id) {
    switch (key) {
      case "name": {
        setProjects(
          projects.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.projectName = value;
              return obj;
            }
          }),
        );
        break;
      }
      case "stack": {
        setProjects(
          projects.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.techStack = value;
              return obj;
            }
          }),
        );
        break;
      }
      case "start": {
        setProjects(
          projects.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.startDate = value;
              return obj;
            }
          }),
        );
        break;
      }
      case "end": {
        setProjects(
          projects.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.endDate = value;
              return obj;
            }
          }),
        );
        break;
      }
      case "point": {
        const newProj = [...projects];
        outer: for (const project of newProj) {
          for (const point of project.points) {
            if (point.id === id) {
              point.point = value;
              break outer;
            }
          }
        }

        setProjects(newProj);
      }
    }
  }

  function handleSkills(key, value) {
    const newObj = { ...skills };
    newObj[key] = value;
    setSkills(newObj);
  }

  return (
    <>
      <Builder
        personal={personal}
        onPersonalChange={handlePersonal}
        professional={professional}
        onProfessionalChange={handleProfessional}
        education={education}
        onEducationChange={handleEducation}
        projects={projects}
        onProjectChange={handleProject}
        skills={skills}
        onSkillChange={handleSkills}
      />
      <CV
        personal={personal}
        professional={professional}
        education={education}
        projects={projects}
        skills={skills}
      />
    </>
  );
}

export default App;
