import { useState } from "react";

import "./styles/App.css";

import CV from "./components/CV";
import Builder from "./components/Builder";

import PersonalObj from "./data/PersonalObj";
import ProfessionalObj from "./data/ProfessionalObj";

function App() {
  const [personal, setPersonal] = useState(PersonalObj);
  const [professional, setProffesional] = useState(ProfessionalObj);

  function handlePersonal(key, value) {
    setPersonal({
      ...personal,
      [key]: value,
    });
  }

  function handleProfessional(key, value, id) {
    if (key === "summary") {
      setProffesional({ ...professional, summary: value });
    }
    if (key === "company") {
      const newObj = { ...professional };
      newObj.jobs = newObj.jobs.map((job) => {
        if (job.id !== id) return job;
        else {
          job.companyName = value;
          return job;
        }
      });
      setProffesional(newObj);
    }
  }

  return (
    <>
      <Builder
        personal={personal}
        onPersonalChange={handlePersonal}
        professional={professional}
        onProfessionalChange={handleProfessional}
      />
      <CV personal={personal} professional={professional} />
    </>
  );
}

export default App;
