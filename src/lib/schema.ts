import { z } from "zod"

export const KomentarInputSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
})

export type IKomentarInputSchema = z.infer<typeof KomentarInputSchema>;

export const SendHistorySchema = z.object({
  name: z.string()
})

export type ISendHistorySchema = z.infer<typeof SendHistorySchema>