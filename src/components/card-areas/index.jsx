import Chip from "../chip";
import "./style.css";

export default function CardAreas({
  titulo = "Areas de Atuacao",
  areas = [],
}) {
  const listaAreas = Array.isArray(areas) ? areas : [];

  return (
    <section className="card-areas">
      <h3 className="card-areas__titulo">{titulo}</h3>

      {listaAreas.length > 0 ? (
        <div className="card-areas__lista">
          {listaAreas.map((area) => (
            <Chip key={area} label={area} />
          ))}
        </div>
      ) : (
        <span className="card-areas__vazio">
          Nenhuma area de atuacao informada.
        </span>
      )}
    </section>
  );
}
