import type { AtuacoesSchema } from "../../models/request-schemas/atuacoes";
import api from "../api";

export async function criarAtuacao(data: AtuacoesSchema) {
  const response = await api.post("/atuacoes/criar", data);
  return response.data;
}
