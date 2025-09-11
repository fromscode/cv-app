import "../styles/skills.css";

function Skill({ skill, onChange }) {
  return (
    <div>
      <input
        className="key-field"
        type="text"
        id={skill.id + "key"}
        value={skill.key}
        placeholder="Add a key"
        onChange={(e) => onChange("key", skill.id, e.target.value)}
      />
      <span>: </span>
      <input
        type="text"
        id={skill.id + "value"}
        value={skill.value}
        placeholder="Add skills"
        onChange={(e) => onChange("change", skill.id, e.target.value)}
      />
      <button
        type="button"
        className="delete-btn"
        onClick={() => onChange("del", skill.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default function Skills({ skills, onChange, disabled, onShowClick }) {
  const skillList = [];
  for (const skill of skills) {
    skillList.push(<Skill key={skill.id} skill={skill} onChange={onChange} />);
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
