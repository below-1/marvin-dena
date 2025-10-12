import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ISendHistorySchema, SendHistorySchema } from "@/lib/schema";
import { sendInvitation } from "@/lib/actions";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";


export function SendInvitationDialog() {
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
      <Dialog>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <DialogTrigger asChild>
              <Button>Kirim Undangan</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Kirim Undangan</DialogTitle>
                <DialogDescription>
                  Masukan nama penerima undangan
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
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
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button
                  onClick={async () => {
                    console.log("here");
                    const vals = form.getValues();
                    await form.trigger();
                    if (vals.name) {
                      await onSubmit(vals);
                    }
                      // if (form.formState.isValid) onSubmit(); // Call the `onSubmit` function if the form is validated
                  }}
                >Kirim</Button>
              </DialogFooter>
            </DialogContent>
          </form>
      </Dialog>
    </Form>
  )
}