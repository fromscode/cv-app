function JobList({ jobs, onChange }) {
  return jobs.map((job) => {
    return (
      <div className="job" key={job.id}>
        Company:{" "}
        <input
          type="text"
          value={job.companyName}
          onChange={(e) => onChange("company", e.target.value, job.id)}
        />
        {job.jobTitle}
        {job.startDate}
        {job.endDate}
        <JobPoints jobPoints={job.jobPoints} />
      </div>
    );
  });
}

function JobPoints({ jobPoints }) {
  return jobPoints.map((jobPoint) => <li>{jobPoint}</li>);
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
