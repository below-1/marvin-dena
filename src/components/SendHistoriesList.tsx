'use client';

import type { SendHistoriesData } from "@/lib/send-history";
import { SendHistoryItem } from "./SendHistoryItem";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { SendHistoriesToolbar } from "./SendHistoriesToolbar";
import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "./ui/badge";



type SendHistoriesListProps = SendHistoriesData;

export function SendHistoriesList(props: SendHistoriesListProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [perPage, setPerPage] = useState( parseInt( searchParams.get("perPage") || '10' ) )

  const loadMoreItems = () => {
    const newQueryParams = new URLSearchParams(searchParams)
    newQueryParams.set("perPage", (perPage + 10).toString())
    router.push(`?${newQueryParams.toString()}`)
  }

  return (
    <div>
      <SendHistoriesToolbar />


      <div className="md:max-w-5xl mx-auto pb-12">
        <div className="flex flex-col gap-2 divide-y">
          {props.items.map(item => (
            <SendHistoryItem
              key={item.uniqueToken}
              item={item}
            />
          ))}
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t">
          <div
            className="h-12 md:mx-auto md:max-w-5xl flex items-center justify-between gap-2 px-4"
          >
            <Button variant="outline" size="sm">Total Item {props.total}</Button>
            {props.items.length < props.total && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={loadMoreItems}
              >Muat Lebih Banyak</Button>
            )}
          </div>
        </div>
      </div>
      
    </div>
  )
}

