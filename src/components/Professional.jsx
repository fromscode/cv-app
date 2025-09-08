function JobList({ jobs, onChange }) {
  return jobs.map((job) => {
    return (
      <div className="job" key={job.id}>
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

function Summary({ summary, onChange }) {
  return (
    <div className="summaryBuilder" key="summary">
      <span className="summary">Summary</span>
      <textarea
        value={summary}
        onChange={(e) => onChange("summary", e.target.value)}
      ></textarea>
    </div>
  );
}

export default function Professional({ professional, onChange }) {
  return (
    <div className="professional">
      <h3>Professional</h3>
      <Summary summary={professional.summary} onChange={onChange} />
      <JobList jobs={professional.jobs} onChange={onChange} />
    </div>
  );
}
