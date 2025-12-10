import { Pencil, Trash2 } from "lucide-react";
import type { AtuacaoResponse } from "../../../../services/atuacoes/listar";

interface Props {
  atuacoes: AtuacaoResponse[];
  onEdit: (atuacao: AtuacaoResponse) => void;
  onDelete: (id: number) => void;
}

export function AtuacaoList({ atuacoes, onEdit, onDelete }: Props) {
  return (
    <div
      className="
        bg-white p-6 rounded-[18px]
        shadow-[0_10px_24px_rgba(20,20,40,0.05)]
      "
    >
      <h3 className="text-[1.3rem] font-semibold text-[#1c1a36] mb-4">
        Lista de Atuações
      </h3>

      {atuacoes.length === 0 ? (
        <p className="text-[#6c6a80]">Nenhuma atuação cadastrada.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {atuacoes.map((a) => (
            <li
              key={a.id}
              className="
                p-4 rounded-[14px] bg-[#fbfbff]
                border border-[#e3e0ff]
                flex items-center justify-between
                hover:border-[#b5b0ff] transition
              "
            >
              <span className="font-medium text-[#1c1a36]">{a.nome}</span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onEdit(a)}
                  className="text-[#5a4df4] hover:opacity-80"
                >
                  <Pencil className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onDelete(a.id)}
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
