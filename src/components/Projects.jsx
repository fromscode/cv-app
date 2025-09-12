import "../styles/projects.css";

function Project({ project, onChange, disabled }) {
  return (
    <form style={{ display: disabled ? "none" : null }}>
      <div>
        <label htmlFor="project">Name: </label>
        <input
          id="project"
          type="text"
          value={project.projectName}
          onChange={(e) => onChange("name", e.target.value, project.id)}
        />
      </div>
      <div>
        <label htmlFor="stack">Stack: </label>
        <input
          id="stack"
          type="text"
          value={project.techStack}
          onChange={(e) => onChange("stack", e.target.value, project.id)}
        />
      </div>
      <div className="source">
        <input
          className="key-field"
          type="text"
          id="source-key"
          value={project.sourceKey}
          onChange={(e) => onChange("source-key", e.target.value, project.id)}
          placeholder="Github"
        />
        <span>:</span>
        <input
          className="value-field"
          id="source-link"
          type="text"
          value={project.sourceLink}
          onChange={(e) => onChange("source-link", e.target.value, project.id)}
          placeholder="www.github.com/username/repo-name"
        />
      </div>
      <div className="demo">
        <input
          className="key-field"
          type="text"
          id="demo-key"
          value={project.demoKey}
          onChange={(e) => onChange("demo-key", e.target.value, project.id)}
          placeholder="Live Demo"
        />
        <span>:</span>
        <input
          className="value-field"
          id="demo-link"
          type="text"
          value={project.demoLink}
          onChange={(e) => onChange("demo-link", e.target.value, project.id)}
          placeholder="www.website.com"
        />
      </div>
      <fieldset>
        <legend>Project Points</legend>
        {project.points.map((point, index) => {
          return (
            <div key={point.id}>
              <label htmlFor={"point" + index + 1}>Point {index + 1}:</label>
              <input
                id={"point" + index + 1}
                type="text"
                value={point.point}
                onChange={(e) => onChange("point", e.target.value, point.id)}
              />
              <button
                type="button"
                className="delete-btn"
                onClick={() => onChange("del-point", null, point.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => onChange("add-point", null, project.id)}
        >
          Add Point
        </button>
      </fieldset>
      <div>
        <button
          type="button"
          className="delete-btn"
          onClick={() => onChange("del", null, project.id)}
        >
          Delete Project
        </button>
      </div>
    </form>
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
        <Project
          key={project.id}
          project={project}
          onChange={onChange}
          disabled={disabled}
        />
      ))}
      <div className="buttons">
        <button
          style={{ display: disabled ? "none" : null }}
          type="button"
          onClick={() => onChange("add", null, null)}
        >
          Add Project
        </button>
        <button
          type="button"
          onClick={() => onShowClick(3)}
          disabled={!disabled}
        >
          Show
        </button>
      </div>
    </div>
  );
}
