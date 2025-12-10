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

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-[18px] shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-[#1c1a36] mb-4">
          {initialData ? "Editar Atuação" : "Nova Atuação"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-[#1c1a36]">Nome</label>
            <input
              {...register("nome")}
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#5a4df4]"
              placeholder="Ex: Desenvolvimento Back-end"
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">{errors.nome.message}</p>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="
                px-5 py-2 rounded-lg text-white font-medium
                bg-gradient-to-r from-[#5a4df4] to-[#6bd4ff]
                hover:opacity-90 transition
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
