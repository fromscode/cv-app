import "../styles/education.css";

function School({ obj, onChange, disabled }) {
  return (
    <form
      key={obj.id}
      className="school"
      style={{ display: disabled ? "none" : null }}
    >
      <div>
        <label htmlFor="school">School :</label>
        <input
          type="text"
          name="school"
          id="school"
          value={obj.schoolName}
          onChange={(e) => onChange("school", e.target.value, obj.id)}
        />
      </div>
      <div>
        <label htmlFor="course">Course : </label>
        <input
          type="text"
          name="course"
          id="course"
          value={obj.courseName}
          onChange={(e) => onChange("course", e.target.value, obj.id)}
        />
      </div>
      <div>
        <label htmlFor="grade">Grade : </label>
        <input
          type="text"
          name="grade"
          id="grade"
          value={obj.grade}
          onChange={(e) => onChange("grade", e.target.value, obj.id)}
        />
      </div>
      <div className="dates">
        <label htmlFor="start">Start Date: </label>
        <input
          type="text"
          name="start"
          id="start"
          value={obj.startDate}
          onChange={(e) => onChange("start", e.target.value, obj.id)}
        />
        <label htmlFor="end">End Date: </label>
        <input
          type="text"
          name="end"
          id="end"
          value={obj.endDate}
          onChange={(e) => onChange("end", e.target.value, obj.id)}
        />
      </div>
      <div>
        <button
          type="button"
          className="delete-btn"
          onClick={() => onChange("del", null, obj.id)}
        >
          Delete
        </button>
      </div>
    </form>
  );
}

export default function Education({
  education,
  onChange,
  disabled,
  onShowClick,
}) {
  return (
    <div className="education">
      <h3>Education</h3>
      {education.map((obj) => {
        return (
          <School
            key={obj.id}
            obj={obj}
            onChange={onChange}
            disabled={disabled}
          />
        );
      })}
      <div className="buttons">
        <button
          type="button"
          onClick={() => onChange("add")}
          style={{ display: disabled ? "none" : null }}
        >
          Add
        </button>
        <button
          type="button"
          disabled={!disabled}
          onClick={() => onShowClick(2)}
        >
          Show
        </button>
      </div>
    </div>
  );
}
