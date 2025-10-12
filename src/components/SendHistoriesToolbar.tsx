'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { SendInvitationDialog } from "./SendInvitationDialog";
import { useState } from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Toggle } from "./ui/toggle";
import { Settings2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { engagement, kurale } from "@/commons/fonts";
import { Separator } from "./ui/separator";

export type FilterProps = {
  keyword: string;
  onKeywordChange: (s: string) => void;

  sortDirection: 'asc' | 'desc';
  onSortDirectionChange: (v: 'asc' | 'desc') => void;
}

export function SendHistoriesToolbar() {
  const [ filterIsOpen, setFilterIsOpen ] = useState(false)
  return (
    <>
      <div className="fixed bg-background top-0 left-0 right-0 border-b">
        <div className="md:max-w-6xl mx-auto flex items-center justify-between px-4">
          <div className="h-16 flex gap-2 items-center">
            <p 
              className={twMerge(
                engagement.className,
                "tracking-tighter font-bold text-3xl"
              )}
            >M/D</p>
            <Separator orientation="vertical" className="w-2" />
            <SendInvitationDialog />
          </div>
          <Toggle 
            variant="outline" 
            aria-label="filter toggle"
            pressed={filterIsOpen}
            onPressedChange={c => {
              setFilterIsOpen(c)
            }}
          >
            <Settings2 />
          </Toggle>
        </div>
      </div>
      <div className="h-18"></div>
      {filterIsOpen && (
        <div className="md:max-w-2xl mx-auto">
          <FilterContent />
        </div>
      )}
    </>
  )
}

function FilterContent() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const [ keyword, setKeyword ] = useState( searchParams.get("keyword") || "")
  const [ sortDirection, setSortDirection ] = useState( searchParams.get("sortDirection") || "desc")

  const updateQueryParam = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (keyword) {
      newSearchParams.set('keyword', keyword);
    } else {
      newSearchParams.delete('keyword');
    }
    if (sortDirection) {
      newSearchParams.set('sortDirection', sortDirection);
    } else {
      newSearchParams.delete('sortDirection');
    }
    newSearchParams.set('perPage', '10');
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <Card className="my-4 mx-4">
      <CardHeader>
        <CardTitle>Filter The List</CardTitle>
        <CardDescription>
          Change the keyword and sort direction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>Keyword</Label>
            <Input
              placeholder="Keyword..."
              value={keyword}
              onChange={event => {
                setKeyword(event.target.value)
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label>Sortir</Label>
            <Select
              value={sortDirection}
              onValueChange={v => {
                setSortDirection(v)
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih arah sortir" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="asc">Lama ke Baru</SelectItem>
                  <SelectItem value="desc">Baru ke Lama</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant='outline' 
          className="w-full"
          onClick={updateQueryParam}
        >Muat Ulang</Button>
      </CardFooter>
    </Card>
  )
}