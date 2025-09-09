import "../styles/professional.css";

function JobList({ jobs, onChange, disabled }) {
  return jobs.map((job) => {
    return (
      <form
        className="job"
        key={job.id}
        style={{ display: disabled ? "none" : null }}
      >
        <div>
          <label htmlFor="company">Company: </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="company"
            value={job.companyName}
            onChange={(e) => onChange("company", e.target.value, job.id)}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            autoComplete="title"
            value={job.jobTitle}
            onChange={(e) => onChange("title", e.target.value, job.id)}
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            autoComplete="startDate"
            value={job.startDate}
            onChange={(e) => onChange("startDate", e.target.value, job.id)}
          />

          <label htmlFor="endDate">End Date:</label>
          <input
            type="text"
            id="endDate"
            name="endDate"
            autoComplete="endDate"
            value={job.endDate}
            onChange={(e) => onChange("endDate", e.target.value, job.id)}
          />
        </div>
        <JobPoints job={job} onChange={onChange} />
      </form>
    );
  });
}

function JobPoints({ job, onChange }) {
  return (
    <fieldset>
      <legend>Job Points</legend>
      {job.jobPoints.map((jobPoint, index) => (
        <div key={jobPoint.id}>
          <label htmlFor={jobPoint.id + ""}>Job Point {index + 1}: </label>
          <input
            type="text"
            id={jobPoint.id + ""}
            name="jobPoint"
            autoComplete="jobPoint"
            value={jobPoint.point}
            onChange={(e) => onChange("point", e.target.value, jobPoint.id)}
          />
          <button className="delete-btn" type="button">
            Delete
          </button>
        </div>
      ))}
      <button type="button" onClick={() => onChange("add-point", null, job.id)}>
        Add point
      </button>
    </fieldset>
  );
}

function Summary({ summary, onChange, disabled }) {
  return (
    <div
      className="summaryBuilder"
      key="summary"
      style={{ display: disabled ? "none" : null }}
    >
      <label for="summary">Summary: </label>
      <textarea
        name="summary"
        id="summary"
        value={summary}
        onChange={(e) => onChange("summary", e.target.value)}
      ></textarea>
    </div>
  );
}

export default function Professional({
  professional,
  onChange,
  disabled,
  onShowClick,
}) {
  return (
    <div className="professional">
      <h3>Professional Details</h3>
      <Summary
        summary={professional.summary}
        onChange={onChange}
        disabled={disabled}
      />
      <JobList
        jobs={professional.jobs}
        onChange={onChange}
        disabled={disabled}
      />
      <button
        className="add-btn"
        type="button"
        /* onClick={() => onChange(null, null, "add")} */
        style={{ display: disabled ? "none" : null }}
      >
        Add Experience
      </button>
      <button type="button" onClick={() => onShowClick(1)} disabled={!disabled}>
        Show
      </button>
    </div>
  );
}
