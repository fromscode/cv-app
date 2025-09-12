import "../styles/CV.css";

function Extras({ personal }) {
  const extraList = [];
  for (const [key, value] of Object.entries(personal)) {
    if (["Name", "Phone", "Email", "Linked-in"].includes(key)) continue;
    extraList.push(
      <span key={key}>
        {" "}
        |{" "}
        {value.length === 0 ? (
          key
        ) : (
          <a
            href={value.startsWith("https://") ? value : `https://${value}`}
            target="_blank"
            rel="noreferer noopener"
          >
            {key}
          </a>
        )}
      </span>,
    );
  }

  return extraList;
}

function Personal({ personal }) {
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
        <Extras personal={personal} />
      </p>
    </div>
  );
}

function Summary({ summary }) {
  return summary.length ? (
    <div className="summary">
      <h3>Summary</h3>
      <hr />
      <p>{summary}</p>
    </div>
  ) : null;
}

function JobList({ jobs }) {
  return jobs.length > 0 ? (
    <div className="jobList">
      <h3>Experience</h3>
      <hr />
      {jobs.map((job) => {
        return (
          <div className="job" key={job.companyName + job.jobTitle}>
            <div className="companyName">{job.companyName}</div>
            <div className="jobTitle">
              {job.jobTitle}
              <div className="dates">
                <div className="start-date">{job.startDate}</div>
                {job.endDate ? <span>-</span> : null}
                <div className="end-date">{job.endDate}</div>
              </div>
            </div>
            <ul className="jobPoints">
              {job.jobPoints.map((jobPoint) => (
                <li key={jobPoint.id}>{jobPoint.point}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  ) : null;
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
  return education.length > 0 ? (
    <div className="education">
      <h3>Education</h3>
      <hr />
      {education.map((obj) => {
        return (
          <div className="school" key={obj.id}>
            <h5>{obj.schoolName}</h5>
            <p>
              <span className="course">{obj.courseName}</span>
              <span className="dates">
                <span>{obj.startDate}</span>
                {obj.endDate ? <span className="dash">-</span> : null}
                <span>{obj.endDate}</span>
              </span>
            </p>
            <p>
              {obj.grade ? (
                <span className="grade">{` ${obj.gradeType}: ${obj.grade}`}</span>
              ) : null}
            </p>
          </div>
        );
      })}
    </div>
  ) : null;
}

function Projects({ projects }) {
  return projects.length > 0 ? (
    <div className="projects">
      <h3>Projects</h3>
      <hr />
      {projects.map((obj) => {
        return (
          <div key={obj.id}>
            <div className="title">
              <h5>{obj.projectName}</h5>
              <span className="stack">
                {obj.techStack ? "(" : null}
                {obj.techStack}
                {obj.techStack ? ")" : null}
              </span>

              <span className="links">
                {obj.sourceKey.length > 0 ? (
                  <span className="source-links">
                    <span>
                      <a
                        href={
                          obj.sourceLink.startsWith("https://")
                            ? obj.sourceLink
                            : `https://${obj.sourceLink}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {obj.sourceKey}
                      </a>
                    </span>
                    {obj.endDate ? <span className="dash">-</span> : null}
                    <span>{obj.endDate}</span>
                  </span>
                ) : null}

                {obj.sourceKey.length > 0 && obj.demoKey.length > 0 ? (
                  <span className="dash">|</span>
                ) : null}

                {obj.demoKey.length > 0 ? (
                  <span className="demo-links">
                    <span>
                      <a
                        href={
                          obj.demoLink.startsWith("https://")
                            ? obj.demoLink
                            : `https://${obj.demoLink}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {obj.demoKey}
                      </a>
                    </span>
                    {obj.endDate ? <span className="dash">-</span> : null}
                    <span>{obj.endDate}</span>
                  </span>
                ) : null}
              </span>
            </div>
            <ul className="project-points">
              {obj.points.map((point) => (
                <li key={point.id}>{point.point}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  ) : null;
}

function Skills({ skills }) {
  const skillList = [];
  for (const skill of skills) {
    skillList.push(
      <li key={skill.key}>
        <b>{skill.key}:</b>
        <span> {skill.value}</span>
      </li>,
    );
  }

  return skills.length > 0 ? (
    <div className="skills">
      <h3>Skills</h3>
      <hr />
      <ul className="skill-list">{skillList}</ul>
    </div>
  ) : null;
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
