import { useState } from "react";

import "./styles/App.css";

import CV from "./components/CV";
import Builder from "./components/Builder";

import PersonalObj from "./data/PersonalObj";

function App() {
  const [personal, setPersonal] = useState(PersonalObj);

  function handlePersonal(key, value) {
    setPersonal({
      ...personal,
      [key]: value,
    });
  }

  return (
    <>
      <Builder personal={personal} onPersonalChange={handlePersonal} />
      <CV personal={personal} />
    </>
  );
}

export default App;
