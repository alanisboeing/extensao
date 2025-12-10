import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  atuacoesSchema,
  type AtuacoesSchema,
} from "../../../../models/request-schemas/atuacoes";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: AtuacoesSchema) => Promise<void>;
  initialData?: { nome: string } | null;
}

export function AtuacaoFormModal({
  open,
  onClose,
  onSubmit,
  initialData,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AtuacoesSchema>({
    resolver: zodResolver(atuacoesSchema),
  });

  useEffect(() => {
    if (initialData) reset(initialData);
    else reset({ nome: "" });
  }, [initialData, reset]);

  if (!open) return null;

  const requiredMessage = "Campo de preenchimento obrigatório";
  const inputClass =
    "w-full rounded-lg border border-[#d8dbe8] bg-[#f9fafb] px-3 py-2 text-sm text-[#111827] " +
    "placeholder:text-[#9ca3af] shadow-[0_1px_2px_rgba(0,0,0,0.03)] " +
    "focus:outline-none focus:ring-2 focus:ring-[#6bd4ff] focus:border-[#5a4df4] transition";

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-3 py-6">
      <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 w-full max-w-md">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>

            <h2 className="text-xl font-semibold text-[#1c1a36]">
              {initialData ? "Editar Atuação" : "Nova Atuação"}
            </h2>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="h-9 w-9 rounded-full bg-[#f3f4f6] text-[#111827] hover:bg-[#e5e7eb] transition flex items-center justify-center"
            aria-label="Fechar modal"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-[#1c1a36]">
              Nome <span className="text-[#ef4444]">*</span>
            </label>
            <input
              {...register("nome")}
              className={inputClass}
              placeholder="Ex: Desenvolvimento Back-end"
              required
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">
                {errors.nome.message || requiredMessage}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-[#e5e7eb] bg-[#f9fafb] hover:bg-[#f3f4f6] font-medium text-[#111827] transition"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="
                px-5 py-2 rounded-lg text-white font-medium shadow-md
                bg-gradient-to-r from-[#5a4df4] to-[#6bd4ff]
                hover:opacity-90 transition shadow-[0_10px_30px_rgba(90,77,244,0.25)]
              "
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
