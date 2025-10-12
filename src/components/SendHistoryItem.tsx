import { formatDistanceToNow } from 'date-fns'
import { ChevronDown } from 'lucide-react';
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
}

export function SendHistoryItem({ item }: SendHistoryItemProps) {
  return (
    <div className="py-3 px-5 flex rounded-sm">
      <div className="flex flex-col grow text-foreground/80">
        <div className='text-base font-bold tracking-tight'>{item.name}</div>
        <div className='text-xs'>{formatDistanceToNow(item.createdAt, { locale: localeId })} lalu, {item.attempt} dikirim</div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Kirim Ulang
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}