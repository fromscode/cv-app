function Skill({ key_, value, onChange }) {
  return (
    <li>
      {key_}:
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(key_, e.target.value)}
      />
    </li>
  );
}

export default function Skills({ skills, onChange, disabled, onShowClick }) {
  const skillList = [];
  for (const [key, value] of Object.entries(skills)) {
    skillList.push(
      <Skill key={key} key_={key} value={value} onChange={onChange} />,
    );
  }
  return (
    <div className="skills">
      <h3>Skills</h3>
      <ul style={{ display: disabled ? "none" : null }}>{skillList}</ul>
      <button onClick={() => onShowClick(4)}>Show</button>
    </div>
  );
}
