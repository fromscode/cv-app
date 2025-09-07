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

export default function CV({ personal }) {
  return (
    <div className="cv">
      <div className="personalCV">
        <Personal personal={personal} />
      </div>
    </div>
  );
}
