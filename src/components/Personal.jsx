function Details({ details, disabled, onChange }) {
  const detailList = [];
  for (const [key, value] of Object.entries(details)) {
    detailList.push(
      <div key={key} style={{ display: disabled ? "none" : null }}>
        <span className="detailHeading">{key}: </span>
        <span className="detailAnswer">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(key, e.target.value, "normal")}
          />
        </span>
      </div>,
    );
    if (key === "Linked-in") break;
  }

  return <ul>{detailList}</ul>;
}

function Extras({ details, disabled, onChange }) {
  const extraList = [];
  let index = 0;
  for (const [key, value] of Object.entries(details)) {
    ++index;
    if (["Name", "Phone", "Email", "Linked-in"].includes(key)) continue;
    extraList.push(
      <div key={index} style={{ display: disabled ? "none" : null }}>
        <span className="detailHeading">
          <input
            type="text"
            value={key}
            onChange={(e) => onChange(key, e.target.value, "extra-key")}
          />
          :{" "}
        </span>
        <span className="detailAnswer">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(key, e.target.value, "extra-value")}
          />
        </span>
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
      <Details details={personal} onChange={onChange} disabled={disabled} />
      <Extras details={personal} onChange={onChange} disabled={disabled} />
      <button>Add</button>
      <button onClick={() => onShowClick(0)}>Show</button>
    </div>
  );
}
