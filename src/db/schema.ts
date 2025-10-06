import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const komentarTable = sqliteTable("komentar", {
  id: int().primaryKey(),
  name: text().notNull(),
  message: text().notNull(),
  createdAt: text('created_at')
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const sendHistoryTable = sqliteTable("send_history", {
  id: int().primaryKey(),
  name: text().notNull(),
  whatsapp: text().notNull(),
  createdAt: text('created_at')
    .notNull()
    .default(sql`(current_timestamp)`),
})

export type IKomentar = typeof komentarTable.$inferSelect;
export type IKomentarInput = typeof komentarTable.$inferInsert;

export type ISendHistory = typeof sendHistoryTable.$inferSelect;
export type ISendHistoryInput = typeof sendHistoryTable.$inferInsert;