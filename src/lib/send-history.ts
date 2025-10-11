import { db } from "@/db/drizzle";
import { sendHistoryTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getInvitationDetail(uniqueToken: string) {
  const result = await db.select().from(sendHistoryTable)
    .where(eq(sendHistoryTable.uniqueToken, uniqueToken));
  return result.length ? result[0] : null;
}