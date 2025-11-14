import "./style.css";

export default function CardIndicador({ valor, label, icone, background }) {
  return (
    <div
      className="card-indicador"
      style={{
        background: background || "linear-gradient(135deg, #8c73ff, #66c8ff)",
      }}
    >
      <div className="conteudo-indicador">
        <span className="valor-indicador">{valor}</span>
        <span className="label-indicador">{label}</span>
      </div>

      <div className="icone-indicador">{icone}</div>
    </div>
  );
}
