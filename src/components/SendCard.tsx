'use client';

import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent, useCallback, useState } from "react";
import { ISendHistorySchema, SendHistorySchema } from "@/lib/schema";
import { sendInvitation } from "@/lib/actions";

export function SendCard() {

  const [ error, setError ] = useState<string | null>(null)

  const form = useForm<ISendHistorySchema>({
    resolver: zodResolver(SendHistorySchema),
    defaultValues: {
      name: ""
    },
  })

  const onSubmit = async (data: ISendHistorySchema) => {
    const fd = new FormData()
    fd.append("name", data.name)

    const result = await sendInvitation(fd)
    if (!result || !result.success) {
      console.error("terjadi kesalahan");
      return;
    }

    window.open(result.data?.url, "_blank");
  }


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Form Pengiriman Undangan</CardTitle>
            <CardDescription>
              Masukan Nama dan Nomor Whatsapp tujuan
            </CardDescription>
          </CardHeader>
          <CardContent>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nama Penerima"
                      className="bg-white"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Kirim
            </Button>
          </CardFooter>
        </Card>

      </form>
    </Form>
  )
}
