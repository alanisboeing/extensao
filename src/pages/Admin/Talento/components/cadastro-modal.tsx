import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  talentoSchema,
  type TalentoFormData,
} from "../../../../models/request-schemas/talentos";
import type { TalentoResponse } from "../../../../services/talentos/listar";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: TalentoFormData) => Promise<void>;
  initialData?: TalentoResponse | null;
}

export function TalentoFormModal({
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
  } = useForm<TalentoFormData>({
    resolver: zodResolver(talentoSchema),
  });

  useEffect(() => {
    if (initialData) reset(initialData);
    else
      reset({
        nome: "",
        email: "",
        telefone: "",
        cidade: "",
        uf: "",
        linkedin: "",
        competencia: "",
        biografia: "",
        fotoUrl: "",
        atuacaoId: "",
      });
  }, [initialData, reset]);

  if (!open) return null;

  /** ⬇ FECHAR AO CLICAR FORA DA MODAL */
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  /** ⬇ ESTILO PADRÃO PARA INPUTS */
  const inputClass =
    "border border-gray-300 rounded-lg p-2 text-sm bg-white " +
    "focus:outline-none focus:ring-2 focus:ring-[#6bd4ff] focus:border-[#5a4df4] transition";

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-50"
    >
      <div
        className="
          bg-white rounded-[18px] shadow-lg w-full max-w-xl p-5 animate-fadeIn
        "
      >
        <h2 className="text-lg font-semibold text-[#1c1a36] mb-3">
          {initialData ? "Editar Talento" : "Novo Talento"}
        </h2>

        {/* CONTAINER COM SCROLL */}
        <div className="max-h-[70vh] overflow-y-auto pr-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-3">
              {/* Nome */}
              <div className="flex flex-col gap-1">
                <label className="font-medium">Nome</label>
                <input {...register("nome")} className={inputClass} />
                {errors.nome && (
                  <p className="text-red-500 text-xs">{errors.nome.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="font-medium">E-mail</label>
                <input {...register("email")} className={inputClass} />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>

              {/* Telefone */}
              <div className="flex flex-col gap-1">
                <label className="font-medium">Telefone</label>
                <input {...register("telefone")} className={inputClass} />
              </div>

              {/* Cidade */}
              <div className="flex flex-col gap-1">
                <label className="font-medium">Cidade</label>
                <input {...register("cidade")} className={inputClass} />
              </div>

              {/* UF */}
              <div className="flex flex-col gap-1">
                <label className="font-medium">UF</label>
                <input {...register("uf")} className={inputClass} />
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col gap-1">
                <label className="font-medium">LinkedIn</label>
                <input
                  {...register("linkedin")}
                  placeholder="https://linkedin.com/in/..."
                  className={inputClass}
                />
              </div>

              {/* Competência */}
              <div className="flex flex-col gap-1 col-span-2">
                <label className="font-medium">Competência</label>
                <input {...register("competencia")} className={inputClass} />
              </div>

              {/* Biografia */}
              <div className="flex flex-col gap-1 col-span-2">
                <label className="font-medium">Biografia</label>
                <textarea
                  {...register("biografia")}
                  className={inputClass + " h-20 resize-none"}
                />
              </div>

              {/* Foto */}
              <div className="flex flex-col gap-1 col-span-2">
                <label className="font-medium">Foto URL</label>
                <input
                  {...register("fotoUrl")}
                  placeholder="https://..."
                  className={inputClass}
                />
              </div>

              {/* ID Atuação */}
              <div className="flex flex-col gap-1 col-span-2">
                <label className="font-medium">ID da Atuação</label>
                <input
                  type="string"
                  {...register("atuacaoId", { valueAsNumber: true })}
                  className={inputClass}
                />
                {errors.atuacaoId && (
                  <p className="text-red-500 text-xs">
                    {errors.atuacaoId.message}
                  </p>
                )}
              </div>
            </div>

            {/* Botões */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200 text-sm"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="
                  px-5 py-2 rounded-lg text-white font-medium text-sm
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
    </div>
  );
}
