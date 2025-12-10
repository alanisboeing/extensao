import {
  registerSchema,
  type RegisterFormData,
} from "../../models/request-schemas/register";
import { api } from "../api";

export async function cadastrarUsuario(data: RegisterFormData) {
  const parsedData = registerSchema.parse(data);

  try {
    const response = await api.post("/usuarios/cadastro", {
      email: parsedData.email,
      senha: parsedData.senha,
    });
    return response.data;
  } catch (error: any) {
    const message =
      error?.response?.data || error?.message || "Erro ao cadastrar usuário";

    throw new Error(message);
  }
}
