import type { TalentoFormData } from "../models/request-schemas/talentos";
import type { Talento } from "../models/response-types/talentos";
import api from "./api";

export const talentoService = {
  listar: async (): Promise<Talento[]> => {
    const { data } = await api.get("/talentos/listar");
    return data;
  },

  criar: async (entrada: TalentoFormData) => {
    const { data } = await api.post("/talentos/criar", entrada);
    return data;
  },

  atualizar: async (id: number, entrada: TalentoFormData) => {
    const { data } = await api.put(`/talentos/atualizar/${id}`, entrada);
    return data;
  },

  deletar: async (id: number) => {
    return api.delete(`/talentos/deletar/${id}`);
  },
};
