import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  talentoSchema,
  type TalentoFormData,
} from "../../../../models/request-schemas/talentos";
import type { TalentoResponse } from "../../../../services/talentos/listar";
import {
  listarAtuacoes,
  type AtuacaoResponse,
} from "../../../../services/atuacoes/listar";

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
  const [atuacoes, setAtuacoes] = useState<AtuacaoResponse[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TalentoFormData>({
    resolver: zodResolver(talentoSchema),
  });

  useEffect(() => {
    async function carregarAtuacoes() {
      const data = await listarAtuacoes();
      setAtuacoes(data);
    }

    carregarAtuacoes();
  }, []);

  useEffect(() => {
    if (!open) return;

    if (initialData)
      reset({ ...initialData, atuacaoId: initialData.atuacoes.id });
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
        atuacaoId: undefined,
      });
  }, [initialData, open, reset]);

  if (!open) return null;

  const inputClass =
    "w-full rounded-lg border border-[#d8dbe8] bg-[#f9fafb] px-3 py-2 text-sm text-[#111827] " +
    "placeholder:text-[#9ca3af] shadow-[0_1px_2px_rgba(0,0,0,0.03)] " +
    "focus:outline-none focus:ring-2 focus:ring-[#6bd4ff] focus:border-[#5a4df4] transition";

  const requiredMessage = "Campo de preenchimento obrigatório";

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-50 px-3 py-6">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 animate-fadeIn"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between gap-3 p-6 pb-2">
          <div>

            <h2 className="text-xl font-semibold text-[#111827]">
              {initialData ? "Editar Talento" : "Novo Talento"}
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

        {/* CONTAINER COM SCROLL */}
        <div className="max-h-[80vh] overflow-y-auto px-6 pb-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nome */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-[#111827]">
                  Nome <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  {...register("nome")}
                  className={inputClass}
                  placeholder="Nome completo"
                  required
                />
                {errors.nome && (
                  <p className="text-red-500 text-xs">
                    {errors.nome.message || requiredMessage}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-[#111827]">
                  E-mail <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className={inputClass}
                  placeholder="contato@email.com"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">
                    {errors.email.message || requiredMessage}
                  </p>
                )}
              </div>

              {/* Telefone */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-[#111827]">
                  Telefone <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  {...register("telefone")}
                  className={inputClass}
                  placeholder="(00) 99999-9999"
                  required
                />
                {errors.telefone && (
                  <p className="text-red-500 text-xs">
                    {errors.telefone.message || requiredMessage}
                  </p>
                )}
              </div>

              {/* Cidade */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-[#111827]">
                  Cidade <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  {...register("cidade")}
                  className={inputClass}
                  placeholder="Cidade"
                  required
                />
                {errors.cidade && (
                  <p className="text-red-500 text-xs">
                    {errors.cidade.message || requiredMessage}
                  </p>
                )}
              </div>

              {/* UF */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-[#111827]">
                  UF <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  {...register("uf")}
                  className={inputClass}
                  placeholder="Estado"
                  required
                />
                {errors.uf && (
                  <p className="text-red-500 text-xs">
                    {errors.uf.message || requiredMessage}
                  </p>
                )}
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-[#111827]">LinkedIn</label>
                <input
                  {...register("linkedin")}
                  placeholder="https://linkedin.com/in/..."
                  className={inputClass}
                />
                {errors.linkedin && (
                  <p className="text-red-500 text-xs">
                    {errors.linkedin.message || requiredMessage}
                  </p>
                )}
              </div>

              {/* Competência */}
              <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
                <label className="font-medium text-[#111827]">
                  Competência <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  {...register("competencia")}
                  className={inputClass}
                  placeholder="Ex: JavaScript, React, Node"
                  required
                />
                {errors.competencia && (
                  <p className="text-red-500 text-xs">
                    {errors.competencia.message || requiredMessage}
                  </p>
                )}
              </div>

              {/* Biografia */}
              <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
                <label className="font-medium text-[#111827]">
                  Biografia <span className="text-[#ef4444]">*</span>
                </label>
                <textarea
                  {...register("biografia")}
                  className={inputClass + " h-24 resize-none"}
                  placeholder="Conte um pouco sobre a experiência e diferenciais"
                  required
                />
                {errors.biografia && (
                  <p className="text-red-500 text-xs">
                    {errors.biografia.message || requiredMessage}
                  </p>
                )}
              </div>

              {/* Foto */}
              <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
                <label className="font-medium text-[#111827]">Foto URL</label>
                <input
                  {...register("fotoUrl")}
                  placeholder="https://..."
                  className={inputClass}
                />
                {errors.fotoUrl && (
                  <p className="text-red-500 text-xs">
                    {errors.fotoUrl.message || requiredMessage}
                  </p>
                )}
              </div>

              {/* Atuação */}
              <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
                <label className="font-medium text-[#111827]">
                  Atuações <span className="text-[#ef4444]">*</span>
                </label>
                <select
                  {...register("atuacaoId", { valueAsNumber: true })}
                  className={inputClass}
                  required
                >
                  <option value="">Selecione uma atuação</option>
                  {atuacoes.map((atuacao) => (
                    <option key={atuacao.id} value={atuacao.id}>
                      {atuacao.nome}
                    </option>
                  ))}
                </select>
                {errors.atuacaoId && (
                  <p className="text-red-500 text-xs">
                    {errors.atuacaoId.message || requiredMessage}
                  </p>
                )}
              </div>
            </div>

            {/* Botões */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-[#e5e7eb] bg-[#f9fafb] hover:bg-[#f3f4f6] text-sm font-medium text-[#111827] transition"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="
                  px-5 py-2 rounded-lg text-white font-semibold text-sm shadow-md
                  bg-gradient-to-r from-[#5a4df4] to-[#6bd4ff] shadow-[0_10px_30px_rgba(90,77,244,0.25)]
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
