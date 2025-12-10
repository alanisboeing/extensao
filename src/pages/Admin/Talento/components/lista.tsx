import { Pencil, Trash2 } from "lucide-react";
import type { TalentoResponse } from "../../../../services/talentos/listar";

interface Props {
  talentos: TalentoResponse[];
  onEdit: (talento: TalentoResponse) => void;
  onDelete: (id: number) => void;
}

export function TalentoList({ talentos, onEdit, onDelete }: Props) {
  return (
    <div
      className="
        bg-white p-6 rounded-[18px]
        shadow-[0_10px_24px_rgba(20,20,40,0.05)]
      "
    >
      <h3 className="text-[1.3rem] font-semibold text-[#1c1a36] mb-4">
        Lista de Talentos
      </h3>

      {talentos.length === 0 ? (
        <p className="text-[#6c6a80]">Nenhum talento cadastrado.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {talentos.map((t) => (
            <li
              key={t.id}
              className="
                p-4 rounded-[14px] bg-[#fbfbff]
                border border-[#e3e0ff]
                flex items-center justify-between
                hover:border-[#b5b0ff] transition
              "
            >
              <div className="flex flex-col">
                <span className="font-medium text-[#1c1a36]">{t.nome}</span>
                <span className="text-sm text-[#6c6a80]">{t.competencia}</span>
                <span className="text-xs text-[#9a98b5]">
                  {t.cidade} / {t.uf}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onEdit(t)}
                  className="text-[#5a4df4] hover:opacity-80"
                >
                  <Pencil className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onDelete(t.id)}
                  className="text-red-500 hover:opacity-80"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
