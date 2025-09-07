function Details({ details, onChange }) {
  // console.log(details);
  const detailList = [];
  for (const [key, value] of Object.entries(details)) {
    detailList.push(
      <div key={key}>
        <span className="detailHeading">{key}: </span>
        <span className="detailAnswer">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(key, e.target.value)}
          />
        </span>
      </div>,
    );
  }

  return <ul>{detailList}</ul>;
}

export default function Personal({ personal, onChange }) {
  return (
    <div className="personal">
      <h3 className="personalHeading">Personal Details</h3>
      <Details details={personal} onChange={onChange} />
    </div>
  );
}
