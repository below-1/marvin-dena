import { db } from "@/db/drizzle"
import { komentarTable } from "@/db/schema"
import { addKomentar } from "@/lib/komentar"
import { KomentarInputSchema } from "@/lib/schema"

export async function POST(request: Request) {
  const body = await request.json()
  const validationResult = await KomentarInputSchema.safeParseAsync(body)
  if (!validationResult.success) {
    return new Response(
      JSON.stringify(validationResult.error.flatten()),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
  const input = validationResult.data;
  const newKomentar = await addKomentar(input)
  if (newKomentar === null) {
    return new Response(
      JSON.stringify({
        message: "Terjadi kesalahan"
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  return new Response(
    JSON.stringify(newKomentar),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

}

export async function GET(request: Request) {
  const results = await db.select().from(komentarTable);
  const resultString = JSON.stringify(results);
  return new Response(
    resultString,
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
    // return results;
}