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

  return (
    <>
      <Builder
        personal={personal}
        onPersonalChange={handlePersonal}
        professional={professional} /* onProfessionalChange={handleProfessi} */
      />
      <CV personal={personal} professional={professional} />
    </>
  );
}

export default App;
