import { useState } from "react";

import "./styles/App.css";

import CV from "./components/CV";
import Builder from "./components/Builder";

import PersonalObj from "./data/PersonalObj";
import ProfessionalObj from "./data/ProfessionalObj";
import EducationObj from "./data/EducationObj";

function App() {
  const [personal, setPersonal] = useState(PersonalObj);
  const [professional, setProffesional] = useState(ProfessionalObj);
  const [education, setEducation] = useState(EducationObj);

  function handlePersonal(key, value) {
    setPersonal({
      ...personal,
      [key]: value,
    });
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

  return (
    <>
      <Builder
        personal={personal}
        onPersonalChange={handlePersonal}
        professional={professional}
        onProfessionalChange={handleProfessional}
        education={education}
        onEducationChange={handleEducation}
      />
      <CV
        personal={personal}
        professional={professional}
        education={education}
      />
    </>
  );
}

export default App;
