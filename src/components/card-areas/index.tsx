import React from "react";
import { Chip } from "../chip/index.js";

interface CardAreasProps {
  titulo?: string;
  areas?: string[];
}

export default function CardAreas({
  titulo = "Areas de Atuacao",
  areas = [],
}: CardAreasProps) {
  const listaAreas = Array.isArray(areas) ? areas : [];

  return (
    <section
      className="
        w-full
        p-[28px_32px_32px]
        rounded-[20px]
        bg-white
        shadow-[0_12px_30px_rgba(20,20,40,0.06)]
        flex flex-col
        items-center
        gap-[18px]
        text-center
      "
    >
      <h3 className="m-0 text-[1.3rem] text-[#1f1a3d]">{titulo}</h3>

      {listaAreas.length > 0 ? (
        <div
          className="
            w-full
            flex flex-wrap
            justify-center
            gap-x-4 gap-y-3
            px-1
          "
        >
          {listaAreas.map((area) => (
            <div key={area} className="min-w-[150px]">
              <Chip label={area} />
            </div>
          ))}
        </div>
      ) : (
        <span className="text-[#8a88a5] text-[0.95rem]">
          Nenhuma area de atuacao informada.
        </span>
      )}
    </section>
  );
}
