import api from "../api";

export async function excluirAtuacao(id: number) {
  const response = await api.delete(`/atuacoes/deletar/${id}`);
  return response.data;
}
