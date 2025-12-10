import { api } from "../api";

export interface AtuacaoResponse {
  id: number;
  nome: string;
}

export async function listarAtuacoes(): Promise<AtuacaoResponse[]> {
  const response = await api.get("/atuacoes/listar");
  return response.data;
}
