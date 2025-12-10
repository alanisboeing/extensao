import { z } from "zod";

export const talentoSchema = z.object({
  nome: z.string().min(3, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(8, "Telefone inválido"),
  cidade: z.string().min(2, "Cidade obrigatória"),
  uf: z.string().min(2, "UF obrigatória"),
  linkedin: z.string().optional(),
  competencia: z.string().min(3, "Competência obrigatória"),
  biografia: z.string().min(10, "Biografia obrigatória"),
  fotoUrl: z.string().url("URL inválida").optional(),
  atuacaoId: z.string(),
});

export type TalentoFormData = z.infer<typeof talentoSchema>;
