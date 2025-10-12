import { db } from "@/db/drizzle";
import { type IKomentarInput, komentarTable } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function loadKomentars() {
  const results = await db.select().from(komentarTable)
    .orderBy(desc(komentarTable.createdAt));
  return results;
}

export async function addKomentar(input: IKomentarInput) {
  const result = await db.insert(komentarTable)
    .values(input)
    .returning();
  if (result.length) {
    return result[0];
  }
  return null;
}

