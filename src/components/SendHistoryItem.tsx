import { formatDistanceToNow } from 'date-fns'
import { ChevronDown, EllipsisVertical, Repeat2, Trash } from 'lucide-react';
import { id as localeId } from 'date-fns/locale';
import type { ISendHistory } from "@/db/schema"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button';

type SendHistoryItemProps = {
  item: ISendHistory;
  onResendInvitation: (id: number) => any;
  onRemoveInvitation: (id: number) => any;
}

export function SendHistoryItem({ item, onResendInvitation, onRemoveInvitation }: SendHistoryItemProps) {
  return (
    <div className="py-3 px-5 flex rounded-sm">
      <div className="flex flex-col grow text-foreground/80">
        <div className='text-base font-bold tracking-tight'>{item.name}</div>
        <div className='text-xs'>{formatDistanceToNow(item.createdAt, { locale: localeId })} lalu, {item.attempt} dikirim</div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => onResendInvitation(item.id)}
          >
            <Repeat2 />
            Kirim Ulang
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onRemoveInvitation(item.id)}
          >
            <Trash />
            Hapus
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}