import "./style.css";

export default function Chip({ label}) {
  return (
    <button className="chip" >
      {label}
    </button>
  );
}
