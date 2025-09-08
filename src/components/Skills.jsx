function Skill({ key_, value, onChange }) {
  console.log(key_ + " " + typeof key);
  return (
    <li key={key_}>
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
    console.log(typeof key + " " + value);
    skillList.push(<Skill key_={key} value={value} onChange={onChange} />);
  }
  return (
    <div className="skills">
      <h3>Skills</h3>
      <ul style={{ display: disabled ? "none" : null }}>{skillList}</ul>
      <button onClick={() => onShowClick(4)}>Show</button>
    </div>
  );
}
