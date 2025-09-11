import "../styles/personal.css";

function Details({ details, disabled, onChange }) {
  const detailList = [];
  for (const [key, value] of Object.entries(details)) {
    detailList.push(
      <div key={key} style={{ display: disabled ? "none" : null }}>
        <label htmlFor={key} className="detailHeading">
          {key}:{" "}
        </label>
        <input
          type="text"
          name={key}
          id={key}
          value={value}
          onChange={(e) => onChange(key, e.target.value, "normal")}
          autoComplete="false"
        />
      </div>,
    );
    if (key === "Linked-in") break;
  }

  return detailList;
}

function Extras({ details, disabled, onChange }) {
  const extraList = [];
  let index = 0;
  for (const [key, value] of Object.entries(details)) {
    ++index;
    if (["Name", "Phone", "Email", "Linked-in"].includes(key)) continue;
    extraList.push(
      <div
        className="extra"
        key={index}
        style={{ display: disabled ? "none" : null }}
      >
        <input
          className="key-field"
          type="text"
          id={index + "key"}
          name={key}
          value={key}
          placeholder="Add a key"
          onChange={(e) => onChange(key, e.target.value, "extra-key")}
        />
        <span>: </span>
        <input
          type="text"
          id={index + "value"}
          name={value}
          value={value}
          placeholder="Add a hyperlink"
          onChange={(e) => onChange(key, e.target.value, "extra-value")}
        />
        <button onClick={() => onChange(key, value, "delete")}>Delete</button>
      </div>,
    );
  }
  return extraList;
}

export default function Personal({
  personal,
  onChange,
  disabled,
  onShowClick,
}) {
  return (
    <div className="personal">
      <h3 className="personalHeading">Personal Details</h3>
      <div className="details">
        <Details details={personal} onChange={onChange} disabled={disabled} />
        <Extras details={personal} onChange={onChange} disabled={disabled} />
      </div>
      <button
        className="add-btn"
        type="button"
        onClick={() => onChange(null, null, "add")}
        style={{ display: disabled ? "none" : null }}
      >
        Add
      </button>
      <button type="button" onClick={() => onShowClick(0)} disabled={!disabled}>
        Show
      </button>
    </div>
  );
}
