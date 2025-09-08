function JobList({ jobs, onChange, disabled }) {
  return jobs.map((job) => {
    return (
      <div
        className="job"
        key={job.id}
        style={{ display: disabled ? "none" : null }}
      >
        <div>
          Company:{" "}
          <input
            type="text"
            value={job.companyName}
            onChange={(e) => onChange("company", e.target.value, job.id)}
          />
        </div>
        <div>
          Title:
          <input
            type="text"
            value={job.jobTitle}
            onChange={(e) => onChange("title", e.target.value, job.id)}
          />
        </div>
        {job.startDate}
        {job.endDate}
        <JobPoints jobPoints={job.jobPoints} onChange={onChange} />
      </div>
    );
  });
}

function JobPoints({ jobPoints, onChange }) {
  return jobPoints.map((jobPoint, index) => (
    <li key={jobPoint.id}>
      <span>Job Point {index + 1}</span>
      <input
        type="text"
        value={jobPoint.point}
        onChange={(e) => onChange("point", e.target.value, jobPoint.id)}
      />
    </li>
  ));
}

function Summary({ summary, onChange, disabled }) {
  return (
    <div
      className="summaryBuilder"
      key="summary"
      style={{ display: disabled ? "none" : null }}
    >
      <span className="summary">Summary</span>
      <textarea
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
      <h3>Professional</h3>
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
      <button onClick={() => onShowClick(1)}>Show</button>
    </div>
  );
}
