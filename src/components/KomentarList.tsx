import { id as localeID } from "date-fns/locale";
import { MaterialSymbolsHeartSmileRounded } from "./icons/heart-smile";
import { useMemo } from "react";
import { formatDistanceToNow } from "date-fns";
import type { IKomentar } from "@/db/schema";

type KomentarListProps = {
  messages: IKomentar[];
}

export function KomentarList({
  messages
}: KomentarListProps) {
  return (
    <div className="max-h-200 overflow-y-scroll flex flex-col divide-y">
      {messages.map(item => (
        <KomentarItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

type KomentarItemProps = {
  item: IKomentar;
}
function KomentarItem({ item }: KomentarItemProps) {
  const dateDisplay = useMemo(() => {
    return formatDistanceToNow(item.createdAt, {
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