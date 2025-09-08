import "../styles/CV.css";

function Personal({ personal }) {
  console.log(personal);
  const personalList = [];
  for (const [key, value] of Object.entries(personal)) {
    personalList.push(
      <li key={key}>
        {key}: {value}
      </li>,
    );
  }

  return (
    <div className="personal">
      <h3 className="name">{personal.Name}</h3>
      <p className="details">
        <span className="phone">{personal.Phone} </span>
        <span className="email">
          {" "}
          | <a href={`mailto:${personal.Email}`}> {personal.Email}</a>{" "}
        </span>
        <span
          className="linked-in"
          style={{ display: personal["Linked-in"] ? null : "none" }}
        >
          |{" "}
          <a
            href={
              personal["Linked-in"].startsWith("https://")
                ? personal["Linked-in"]
                : `https://${personal["Linked-in"]}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Linked-in
          </a>
        </span>
      </p>
    </div>
  );
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
                <li key={jobPoint.id}>{jobPoint.point}</li>
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

function Education({ education }) {
  return (
    <>
      <h3>Education</h3>
      {education.map((obj) => {
        return (
          <div key={obj.id}>
            <h5>{obj.schoolName}</h5>
            <p>
              <span>{obj.courseName}</span>
              <span>{obj.grade}</span>
              <span>{obj.startDate}</span>
              <span>{obj.endDate}</span>
            </p>
          </div>
        );
      })}
    </>
  );
}

function Projects({ projects }) {
  return (
    <>
      <h3>Projects</h3>
      {projects.map((obj) => {
        return (
          <div key={obj.id}>
            <h5>{obj.projectName}</h5>
            <span>({obj.techStack})</span>
            <p>
              <span>{obj.startDate}</span>
              <span>{obj.endDate}</span>
            </p>
            <ul>
              {obj.points.map((point) => (
                <li key={point.id}>{point.point}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}

function Skills({ skills }) {
  const skillList = [];
  for (const [key, value] of Object.entries(skills)) {
    skillList.push(
      <li key={key}>
        {key}: {value}
      </li>,
    );
  }

  return (
    <ul>
      <h3>Skills</h3>
      {skillList}
    </ul>
  );
}

export default function CV({
  personal,
  professional,
  education,
  projects,
  skills,
}) {
  return (
    <div className="cv">
      <Personal personal={personal} />
      <Professional professional={professional} />
      <Education education={education} />
      <Projects projects={projects} />
      <Skills skills={skills} />
    </div>
  );
}
