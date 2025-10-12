import { z } from "zod"

export const KomentarInputSchema = z.object({
  name: z.string().min(1, "Nama minimal 2 karakter"),
  message: z.string().min(1, "Pesan minimal 10 karakter"),
})

export type IKomentarInputSchema = z.infer<typeof KomentarInputSchema>;

export const SendHistorySchema = z.object({
  name: z.string()
})

export type ISendHistorySchema = z.infer<typeof SendHistorySchema>

export const SendHistoriesFilterSchema = z.object({
  keyword: z.string().optional(),
  perPage: z.coerce.number().min(10).optional(),
  page: z.coerce.number().min(0).optional(),
  sortDirection: z.enum(['desc', 'asc']).optional()
})

export type ISendHistoriesFilterSchema = z.infer<typeof SendHistoriesFilterSchema>