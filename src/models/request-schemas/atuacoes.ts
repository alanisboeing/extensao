import { z } from "zod";

export const atuacoesSchema = z.object({
  nome: z.string().min(1, "Campo de preenchimento obrigatório."),
});

export type AtuacoesSchema = z.infer<typeof atuacoesSchema>;
