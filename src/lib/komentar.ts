import { db } from "@/db/drizzle";
import { IKomentarInput, komentarTable } from "@/db/schema";

export async function loadKomentars() {
  const results = await db.select().from(komentarTable);
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