import type { AtuacoesSchema } from "../../models/request-schemas/atuacoes";
import api from "../api";

export async function atualizarAtuacao(id: number, data: AtuacoesSchema) {
  const response = await api.put(`/atuacoes/atualizar/${id}`, data);
  return response.data;
}
