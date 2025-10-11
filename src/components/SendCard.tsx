'use client';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent, useCallback, useState } from "react";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;

const constructInviteUrl = (name: string, whatsapp: string) => {
  return `${baseURL}/invite`
}

const getWhatsappMessage = (url: string, name: string) => {
  return encodeURIComponent(`Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i *${name}* untuk menghadiri acara kami.

Berikut link undangan kami, untuk info lengkap dari acara bisa kunjungi :

${url}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Terima kasih banyak atas perhatiannya.`)
}

export function SendCard() {

  const [ error, setError ] = useState<string | null>(null)

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("here");
    const formData = new FormData(e.target as HTMLFormElement);
    const whatsapp = formData.get("whatsapp") as string;
    const nama = formData.get("nama") as string;
    const namaEncoded = encodeURIComponent( nama );
    const invitationUrl = `${baseURL}/invite?name=${namaEncoded}`
    const message = getWhatsappMessage(invitationUrl, nama);
    const whatsappUrl = `https://api.whatsapp.com/send/?text=${message}`
    console.log(whatsappUrl);
    window.open(whatsappUrl, "_blank");
    // const url = 
  }, [])

  return (
    <form
          onSubmit={onSubmit}
        >
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Form Pengiriman Undangan</CardTitle>
        <CardDescription>
          Masukan Nama dan Nomor Whatsapp tujuan
        </CardDescription>
      </CardHeader>
      <CardContent>
        
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="nama">Nama</Label>
              <Input id="nama" name="nama" required />
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Kirim
        </Button>
      </CardFooter>
    </Card>

    </form>
  )
}
