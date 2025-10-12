import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ISendHistorySchema, SendHistorySchema } from "@/lib/schema";
import { sendInvitation } from "@/lib/actions";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { useActionState, useMemo, useState } from "react";
import { Spinner } from "./ui/spinner";
import { Whatsapp } from "./icons/whatsapp";

export function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}


export function SendInvitationDialog() {
  const inSafari = useMemo(() => {
    return isSafari()
  }, [])
  const [ open, setOpen ] = useState(false)
  const form = useForm<ISendHistorySchema>({
    resolver: zodResolver(SendHistorySchema),
    defaultValues: {
      name: ""
    },
  })
  const [ sendLinkForIOS, setSendLinkForIOS ] = useState("")

  const [ loading, setLoading ] = useState(false)

  const onSubmit = async (data: ISendHistorySchema) => {
    setLoading(true)
    const fd = new FormData()
    fd.append("name", data.name)

    try {
      const result = await sendInvitation(fd)
      if (!result || !result.success) {
        console.error("terjadi kesalahan");
        return;
      }
  
      if (isSafari()) {
        setSendLinkForIOS(result.data?.url || "")
      } else {
        window.open(result.data?.url, "_blank")
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Form {...form}>
      <Dialog 
        open={open}
        onOpenChange={o => {
          setOpen(o)
        }}
      >
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
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setOpen(false)
                      setSendLinkForIOS("")
                    }}
                  >Cancel</Button>
                </DialogClose>
                {(inSafari && sendLinkForIOS)
                  ? (
                    <Button
                      asChild
                      className="bg-[#075E54] text-white"
                      onClick={async () => {
                        console.log("here");
                        const vals = form.getValues();
                        await form.trigger();
                        if (vals.name) {
                          await onSubmit(vals);
                        }
                          // if (form.formState.isValid) onSubmit(); // Call the `onSubmit` function if the form is validated
                      }}
                    >
                      <a href={sendLinkForIOS} target="_blank">
                        <Whatsapp className="size-5" />
                        Kirim
                      </a>
                    </Button>
                  )
                  : (
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
                    >
                      {loading 
                        ? <Spinner />
                        : (inSafari ? "Dapatkan Link" : "Kirim")
                      }
                    </Button>
                  )
                }
                
              </DialogFooter>
            </DialogContent>
          </form>
      </Dialog>
    </Form>
  )
}