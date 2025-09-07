function JobList({ jobs }) {
  return jobs.map((job) => {
    return (
      <div className="job" key={job.companyName + job.jobTitle}>
        {job.companyName}
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
