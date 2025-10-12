import { db } from "@/db/drizzle";
import { sendHistoryTable } from "@/db/schema";
import { and, asc, count, desc, eq, like, sql } from "drizzle-orm";

export async function getInvitationDetail(uniqueToken: string) {
    const result = await db.select().from(sendHistoryTable)
    .where(eq(sendHistoryTable.uniqueToken, uniqueToken));
    return result.length ? result[0] : null;
}


type GetSendHistoriesParams = {
    perPage: number;
    page: number;
    keyword?: string;
    sortDirection: 'desc' | 'asc';
}

export type SendHistoriesData = Awaited<ReturnType<typeof getSendHistories>>;

export async function getSendHistories({
    perPage,
    page,
    keyword,
    sortDirection
}: GetSendHistoriesParams) {
    const offset = page * perPage;

    const totals = await db.select({ total: count() })
        .from(sendHistoryTable)
        .where(
            and(...[
                keyword 
                    ? like(
                        sql`lower(${sendHistoryTable.name})`,
                        `%${keyword.toUpperCase()}%`)
                    : null
            ].filter(v => !!v))
        );
    if (!totals.length) {
        throw new Error("fails to count total invitation");
    }
    const [ total ] = totals

    const items = await db.select()
        .from(sendHistoryTable)
        .where(
            and(...[
                keyword 
                    ? like(
                        sql`lower(${sendHistoryTable.name})`,
                        `%${keyword.toUpperCase()}%`)
                    : null
            ].filter(v => !!v))
        )
        .orderBy( 
            sortDirection == 'asc'
                ? asc(sendHistoryTable.createdAt)
                : desc(sendHistoryTable.createdAt)
        )
        .limit(perPage)
        .offset(offset);
    return {
        page,
        total: total.total,
        items
    }
}