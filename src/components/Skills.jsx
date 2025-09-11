import "../styles/skills.css";

function Skill({ index, key_, value, onChange }) {
  return (
    <div>
      <input
        className="key-field"
        type="text"
        id={index + "key"}
        value={key_}
        placeholder="Add a key"
        onChange={(e) => onChange("key", key_, e.target.value)}
      />
      <span>: </span>
      <input
        type="text"
        id={index + "value"}
        name={value}
        value={value}
        placeholder="Add skills"
        onChange={(e) => onChange("change", key_, e.target.value)}
      />
      <button
        type="button"
        className="delete-btn"
        onClick={() => onChange("del", key_)}
      >
        Delete
      </button>
    </div>
  );
}

export default function Skills({ skills, onChange, disabled, onShowClick }) {
  const skillList = [];
  let index = 0;
  for (const [key, value] of Object.entries(skills)) {
    skillList.push(
      <Skill
        index={index++}
        key={key}
        key_={key}
        value={value}
        onChange={onChange}
      />,
    );
  }
  return (
    <div className="skills">
      <h3>Skills</h3>
      <form style={{ display: disabled ? "none" : null }}>{skillList}</form>
      <button
        style={{ display: disabled ? "none" : null }}
        type="button"
        onClick={() => onChange("add")}
      >
        Add Skill
      </button>
      <button onClick={() => onShowClick(4)}>Show</button>
    </div>
  );
}
