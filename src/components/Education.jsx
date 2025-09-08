function School({ obj, onChange }) {
  return (
    <div className="education">
      School Name:
      <input
        type="text"
        value={obj.schoolName}
        onChange={(e) => onChange("school", e.target.value, obj.id)}
      />
      Course Name:{" "}
      <input
        type="text"
        value={obj.courseName}
        onChange={(e) => onChange("course", e.target.value, obj.id)}
      />
      Start-Date:{" "}
      <input
        type="text"
        value={obj.startDate}
        onChange={(e) => onChange("start", e.target.value, obj.id)}
      />
      End-Date:{" "}
      <input
        type="text"
        value={obj.endDate}
        onChange={(e) => onChange("end", e.target.value, obj.id)}
      />
    </div>
  );
}

export default function Education({ education, onChange }) {
  return (
    <div className="education">
      <h2>Education</h2>
      {education.map((obj) => {
        return <School obj={obj} onChange={onChange} />;
      })}
    </div>
  );
}
