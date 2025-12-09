import { z } from "zod";

export const registerSchema = z
  .object({
    nome: z.string().min(3, "Informe seu nome completo").optional(),
    email: z.string("E-mail inválido"),
    senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmarSenha: z.string().min(6, "Confirme sua senha").optional(),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
