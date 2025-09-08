function Project({ project, onChange, disabled }) {
  return (
    <div style={{ display: disabled ? "none" : null }}>
      Project Name:{" "}
      <input
        type="text"
        value={project.projectName}
        onChange={(e) => onChange("name", e.target.value, project.id)}
      />
      Tech Stack:{" "}
      <input
        type="text"
        value={project.techStack}
        onChange={(e) => onChange("stack", e.target.value, project.id)}
      />
      Start-Date:{" "}
      <input
        type="text"
        value={project.startDate}
        onChange={(e) => onChange("start", e.target.value, project.id)}
      />
      End-Date:{" "}
      <input
        type="text"
        value={project.endDate}
        onChange={(e) => onChange("end", e.target.value, project.id)}
      />
      <ul>
        {project.points.map((point, index) => {
          return (
            <li key={point.id}>
              Point {index + 1}:
              <input
                type="text"
                value={point.point}
                onChange={(e) => onChange("point", e.target.value, point.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Projects({
  projects,
  onChange,
  disabled,
  onShowClick,
}) {
  return (
    <div className="projects">
      <h3>Projects</h3>
      {projects.map((project) => (
        <Project project={project} onChange={onChange} disabled={disabled} />
      ))}
      <button onClick={() => onShowClick(3)}>Show</button>
    </div>
  );
}
