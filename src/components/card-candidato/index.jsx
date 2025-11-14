import Botao from "../botao";
import Chip from "../chip";
import "./style.css";

export default function CardCandidato({
  fotoPerfil,
  nomeTalento,
  areaAtuacao,
  linkPerfil,
}) {
  const handleVerPerfil = () => {
    if (!linkPerfil) return;
    window.open(linkPerfil, "_blank", "noopener,noreferrer");
  };

  const capturarIniciaisNome = () =>
    nomeTalento
      ?.split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((parte) => parte[0]?.toUpperCase())
      .join("") || "?";

  return (
    <article className="card-candidato">
      <div className="card-candidato__foto">
        {fotoPerfil ? (
          <img src={fotoPerfil} alt={`Foto de ${nomeTalento}`} />
        ) : (
          <span className="card-candidato__iniciais">{capturarIniciaisNome()}</span>
        )}
      </div>

      <h3 className="card-candidato__nome">{nomeTalento}</h3>

      <div className="card-candidato__area">
        <Chip label={areaAtuacao} />
      </div>

      <Botao label="Ver Perfil" onClick={handleVerPerfil} />
    </article>
  );
}
