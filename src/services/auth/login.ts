import type { LoginSchema } from "../../models/request-schemas/login";
import { api } from "../api";

export async function loginUsuario(data: LoginSchema) {
  const response = await api.post("/usuarios/login", data);
  return response.data;
}
