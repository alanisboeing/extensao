import { api } from "../api";

export interface TalentoResponse {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  cidade?: string;
  uf?: string;
  linkedin?: string;
  competencia?: string;
  biografia: string;
  fotoUrl?: string;
  atuacoes: {
    id: number;
    nome: string;
  };
}

export async function listarTalentos(): Promise<TalentoResponse[]> {
  const response = await api.get("/talentos/listar");
  return response.data;
}

