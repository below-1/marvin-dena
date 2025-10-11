'use client'

import { createKomentarAction } from "@/lib/actions";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { type IKomentarInputSchema, KomentarInputSchema } from "@/lib/schema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";

export function KomentarForm() {

  const form = useForm<IKomentarInputSchema>({
    resolver: zodResolver(KomentarInputSchema),
    defaultValues: {
      message: ""
    },
  })

  const onSubmit = (data: IKomentarInputSchema) => {
    const fd = new FormData()
    fd.append("name", data.name)
    fd.append("message", data.message)
    createKomentarAction(fd)
  }

  return (
    <Form {...form}>
      <form 
        className="flex flex-col gap-6 p-4 pb-6 border-b"
        onSubmit={form.handleSubmit(onSubmit)}
      >

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nama Anda..."
                  className="bg-white"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pesan</FormLabel>
              <FormControl>
                <Textarea
                  id="message"
                  className="bg-white"
                  placeholder="Ucapan Anda..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Kirim</Button>

      </form>
    </Form>
  )
}