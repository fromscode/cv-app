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
      const newObj = { ...personal, "": "" };
      setPersonal(newObj);
    }
  }

  function handleProfessional(type, value, id) {
    switch (type) {
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
      case "startDate": {
        const newObj = { ...professional };
        newObj.jobs = newObj.jobs.map((job) => {
          if (job.id !== id) return job;
          else {
            job.startDate = value;
            return job;
          }
        });
        setProffesional(newObj);
        break;
      }
      case "endDate": {
        const newObj = { ...professional };
        newObj.jobs = newObj.jobs.map((job) => {
          if (job.id !== id) return job;
          else {
            job.endDate = value;
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
      case "add-point": {
        const newObj = { ...professional };
        newObj.jobs = newObj.jobs.map((job) => {
          if (job.id !== id) return job;
          else {
            job.jobPoints.push({
              id: crypto.randomUUID(),
              point: "",
            });
            return job;
          }
        });
        setProffesional(newObj);
        break;
      }
      case "del-point": {
        const newObj = { ...professional };
        for (const job of newObj.jobs) {
          for (const jobPoint of job.jobPoints) {
            if (jobPoint.id === id) {
              job.jobPoints = job.jobPoints.filter(
                (jobPoint) => jobPoint.id !== id,
              );
            }
          }
        }
        setProffesional(newObj);
        break;
      }
      case "del-job": {
        const newObj = { ...professional };
        newObj.jobs = newObj.jobs.filter((job) => job.id !== id);
        setProffesional(newObj);
        break;
      }
      case "add-exp": {
        const newObj = { ...professional };
        newObj.jobs.push({
          id: crypto.randomUUID(),
          companyName: "",
          jobTitle: "",
          startDate: "",
          endDate: "",
          jobPoints: [],
        });
        setProffesional(newObj);
        break;
      }
    }
  }

  function handleEducation(type, value, id) {
    switch (type) {
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
      case "grade": {
        setEducation(
          education.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.grade = value;
              return obj;
            }
          }),
        );
        break;
      }
      case "grade-type": {
        setEducation(
          education.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.gradeType = value;
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
      case "add": {
        const newEdu = [...education];
        newEdu.push({
          id: crypto.randomUUID(),
          schoolName: "",
          courseName: "",
          grade: "",
          startDate: "",
          endDate: "",
        });
        setEducation(newEdu);
        break;
      }
      case "del": {
        setEducation(education.filter((school) => school.id !== id));
        break;
      }
    }
  }

  function handleProject(type, value, id) {
    switch (type) {
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
      case "source-key": {
        setProjects(
          projects.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.sourceKey = value;
              return obj;
            }
          }),
        );
        break;
      }
      case "source-link": {
        setProjects(
          projects.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.sourceLink = value;
              return obj;
            }
          }),
        );
        break;
      }
      case "demo-key": {
        setProjects(
          projects.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.demoKey = value;
              return obj;
            }
          }),
        );
        break;
      }
      case "demo-link": {
        setProjects(
          projects.map((obj) => {
            if (obj.id !== id) return obj;
            else {
              obj.demoLink = value;
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
        break;
      }
      case "add": {
        const newProj = [...projects];
        newProj.push({
          id: crypto.randomUUID(),
          projectName: "",
          techStack: "",
          startDate: "",
          endDate: "",
          points: [],
        });
        setProjects(newProj);
        break;
      }
      case "add-point": {
        setProjects(
          projects.map((project) => {
            if (project.id !== id) return project;
            else {
              project.points.push({
                id: crypto.randomUUID(),
                point: "",
              });
              return project;
            }
          }),
        );
        break;
      }
      case "del-point": {
        const newProj = [...projects];
        for (const project of newProj) {
          project.points = project.points.filter((point) => point.id !== id);
        }
        setProjects(newProj);
        break;
      }
      case "del": {
        setProjects(projects.filter((project) => project.id !== id));
        break;
      }
    }
  }

  function handleSkills(type, key, value) {
    switch (type) {
      case "key": {
        setSkills(
          skills.map((skill) => {
            if (skill.id !== key) return skill;
            else {
              skill.key = value;
              return skill;
            }
          }),
        );
        break;
      }
      case "change": {
        setSkills(
          skills.map((skill) => {
            if (skill.id !== key) return skill;
            else {
              skill.value = value;
              return skill;
            }
          }),
        );
        break;
      }
      case "del": {
        setSkills(skills.filter((skill) => skill.id !== key));
        break;
      }
      case "add": {
        const newObj = [...skills];
        newObj.push({
          id: crypto.randomUUID(),
          key: "",
          value: "",
        });
        setSkills(newObj);
        break;
      }
    }
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
