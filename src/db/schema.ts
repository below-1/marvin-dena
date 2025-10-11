import { sql } from "drizzle-orm";
import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const komentarTable = sqliteTable("komentar", {
  id: int().primaryKey(),
  name: text().notNull(),
  message: text().notNull(),
  createdAt: integer({ mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`)
});

export const sendHistoryTable = sqliteTable("send_history", {
  id: int().primaryKey(),
  uniqueToken: text().notNull().unique(),
  name: text().notNull(),
  url: text().notNull(),
  attempt: integer().notNull().default(0),
  createdAt: integer({ mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`)
})

export type IKomentar = typeof komentarTable.$inferSelect;
export type IKomentarInput = typeof komentarTable.$inferInsert;

export type ISendHistory = typeof sendHistoryTable.$inferSelect;
export type ISendHistoryInput = typeof sendHistoryTable.$inferInsert;