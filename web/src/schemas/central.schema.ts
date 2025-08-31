import { z } from 'zod';

export const centralSchema = z.object({
  name: z.string()
    .min(1, { message: 'O nome é obrigatório.' })
    .max(255, { message: 'O nome deve ter no máximo 255 caracteres.' }),
    
  mac: z.string()
    .regex(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/, { message: 'Formato de MAC inválido.' }),

  modelId: z.coerce.number({
    invalid_type_error: 'Selecione um modelo válido.',
  }).int({ message: 'O ID do modelo deve ser um número inteiro.' })
    .positive({ message: 'Selecione um modelo válido.' })
});

export type CreateCentralFormSchema = z.infer<typeof centralSchema>;