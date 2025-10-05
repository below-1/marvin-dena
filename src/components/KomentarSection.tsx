import { useMemo } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { formatDistanceToNow } from "date-fns";
import { id as localeID } from "date-fns/locale";
import { MaterialSymbolsHeartSmileRounded } from "./icons/heart-smile";

export function KomentarSection() {
  const messages = useMemo(() => [
    {
      id: 1,
      name: 'Aristop Solle',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies purus eu orci condimentum, at tempor lectus cursus. Aliquam erat volutpat. Proin at ornare leo, ut feugiat erat. Cras diam sapien, bibendum quis iaculis sit amet, varius vitae orci. Praesent gravida vel mauris in sagittis. Nunc ut est vel lorem venenatis ultricies. Etiam ullamcorper lacinia nulla, non lobortis diam sollicitudin at.`,
      date: new Date()
    },
    {
      id: 2,
      name: 'Jordan meta',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies purus eu orci condimentum, at tempor lectus cursus. Aliquam erat volutpat. Proin at ornare leo, ut feugiat erat. Cras diam sapien, bibendum quis iaculis sit amet, varius vitae orci. Praesent gravida vel mauris in sagittis. Nunc ut est vel lorem venenatis ultricies. Etiam ullamcorper lacinia nulla, non lobortis diam sollicitudin at.`,
      date: new Date()
    },
    {
      id: 3,
      name: 'Ayah NBD',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies purus eu orci condimentum, at tempor lectus cursus. Aliquam erat volutpat. Proin at ornare leo, ut feugiat erat. Cras diam sapien, bibendum quis iaculis sit amet, varius vitae orci. Praesent gravida vel mauris in sagittis. Nunc ut est vel lorem venenatis ultricies. Etiam ullamcorper lacinia nulla, non lobortis diam sollicitudin at.`,
      date: new Date()
    }
  ] satisfies IKomentar[], []);

  return (
    <div id="KomentarSection" className="min-h-screen py-32 bg-secondary/30">
      <div className="mx-auto max-w-3xl flex flex-col">

        <div className="bg-neutral-100 border-4 border-white rounded-sm flex flex-col">
          <h2 className="text-xl font-bold uppercase text-center leading-12">34 Ucapan</h2>

          <div className="flex flex-col gap-6 p-4 pb-6 border-b">

            <div className="flex flex-col gap-1">
              <Input
                name="nama"
                id="nama"
                placeholder="Nama Anda..."
                className="bg-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <Textarea
                name="ucapan"
                className="bg-white"
                placeholder="Ucapan Anda..."
                rows={8}
              />
            </div>

            <Button>Kirim</Button>

          </div>

          <div className="flex flex-col divide-y">
            {messages.map(item => (
              <KomentarItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
          
        </div>

      </div>
    </div>
  )
}

type IKomentar = {
  id: number;
  name: string;
  message: string;
  date: Date;
}

type KomentarItemProps = {
  item: IKomentar;
}
function KomentarItem({ item }: KomentarItemProps) {
  const dateDisplay = useMemo(() => {
    return formatDistanceToNow(item.date, {
      locale: localeID
    })
  }, [ item ])
  return (
    <div className="flex items-start gap-2 font-sans p-4">
      <div>
        <MaterialSymbolsHeartSmileRounded
          className="size-8 text-secondary"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">{item.name}</div>
        <div className="text-sm">
          {item.message}
        </div>
        <div className="text-xs text-foreground/50 flex gap-1">
          {dateDisplay}
        </div>
      </div>
    </div>
  )
}