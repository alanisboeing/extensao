import { Botao } from "../botao";
import { Chip } from "../chip";

interface CardCandidatoProps {
  id: number;
  fotoPerfil?: string | null;
  nomeTalento?: string | null;
  areaAtuacao?: string | null;
}

export function CardCandidato({
  id,
  fotoPerfil = null,
  nomeTalento = "Talento",
  areaAtuacao = "—",
}: CardCandidatoProps) {
  const navigatePerfil = () => {
    window.location.href = `/talento?id=${id}`;
  };

  const capturarIniciaisNome = (): string =>
    nomeTalento
      ?.split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((parte: string) => parte[0]?.toUpperCase())
      .join("") || "?";

  return (
    <article
      className="
        w-[240px]
        p-[28px_24px_24px]
        rounded-[20px]
        bg-white
        shadow-[0_12px_28px_rgba(20,20,40,0.06)]
        flex flex-col items-center
        gap-3
        text-center
        font-inter
      "
    >
      <div
        className="
          w-[110px] h-[110px]
          rounded-full
          border-[4px] border-[#f0f0f0]
          overflow-hidden
          flex items-center justify-center
          bg-[#f7f7fb]
        "
      >
        {fotoPerfil ? (
          <img
            src={fotoPerfil}
            alt={`Foto de ${nomeTalento ?? "perfil"}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-[1.6rem] font-semibold text-[#6a5af9]">
            {capturarIniciaisNome()}
          </span>
        )}
      </div>

      <h3 className="m-0 text-[1.15rem] font-semibold text-[#1f1a3d]">
        {nomeTalento}
      </h3>

      <div className="mb-[4px] pointer-events-none">
        <Chip label={areaAtuacao ?? "—"} />
      </div>

      <div className="w-full mt-[4px]">
        <Botao label="Ver Perfil" onClick={navigatePerfil} />
      </div>
    </article>
  );
}
