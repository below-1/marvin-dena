'use server'

import { revalidatePath } from "next/cache";
import random from "random-string-generator"
import { addKomentar, loadKomentars } from "./komentar";
import { ISendHistoryInput, sendHistoryTable } from "@/db/schema";
import { db } from "@/db/drizzle";
import { SendHistorySchema } from "./schema";
import { redirect } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;

export async function createKomentarAction(formData: FormData) {

  const name = formData.get("name");
  if (typeof name !== 'string') throw new Error("unknown value");
  const message = formData.get("message");
  if (typeof message !== 'string') throw new Error("unknown value");

  const newKomentar = await addKomentar({
    name,
    message
  });

  revalidatePath("/")
}

export async function getAllKomentars() {
  return loadKomentars()
}

export async function sendInvitation(formData: FormData) {
  let raw = Object.fromEntries( formData.entries() )
  
  const validationResult = await SendHistorySchema.safeParseAsync(raw);
  if (!validationResult.success) {
    console.log(validationResult.error)
    return {
      success: false,
      errors: [
        "validasi input gagal"
      ]
    }
  }

  const payload = validationResult.data
  const token = random(12)
  const nama = payload.name;
  const namaEncoded = encodeURIComponent( nama );
  const invitationUrl = `${baseURL}/invite?name=${namaEncoded}`
  const message = getWhatsappMessage(invitationUrl, nama);
  const whatsappUrl = `https://api.whatsapp.com/send/?text=${message}`

  const rowInput = {
    ...payload,
    uniqueToken: token,
    url: whatsappUrl,
  }

  const result = await db.insert(sendHistoryTable)
    .values(rowInput)
    .returning();
  if (!result.length) {
    return {
      success: false,
      errors: [
        "database gagal"
      ]
    }
  }

  revalidatePath("/send");
  
  return {
    success: true,
    data: result[0]
  }
}

const getWhatsappMessage = (url: string, name: string) => {
  return encodeURIComponent(`Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i *${name}* untuk menghadiri acara kami.

Berikut link undangan kami, untuk info lengkap dari acara bisa kunjungi :

${url}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Terima kasih banyak atas perhatiannya.`)
}