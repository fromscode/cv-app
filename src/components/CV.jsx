import "../styles/CV.css";

function Personal({ personal }) {
  const personalList = [];
  for (const [key, value] of Object.entries(personal)) {
    personalList.push(
      <li key={key}>
        {key}: {value}
      </li>,
    );
  }

  return personalList;
}

function Summary({ summary }) {
  return (
    <div className="summary">
      <h3>Summary</h3>
      <hr />
      <p>{summary}</p>
    </div>
  );
}

function JobList({ jobs }) {
  return (
    <div className="jobList">
      <h3>Experience</h3>
      {jobs.map((job) => {
        return (
          <div className="job" key={job.companyName + job.jobTitle}>
            <div className="companyName">{job.companyName}</div>
            <div className="jobTitle">{job.jobTitle}</div>
            <ul>
              {job.jobPoints.map((jobPoint) => (
                <li>{jobPoint}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function Professional({ professional }) {
  return (
    <>
      <Summary summary={professional.summary} />
      <JobList jobs={professional.jobs} />
    </>
  );
}

export default function CV({ personal, professional }) {
  return (
    <div className="cv">
      <div className="personalCV">
        <Personal personal={personal} />
        <Professional professional={professional} />
      </div>
    </div>
  );
}
