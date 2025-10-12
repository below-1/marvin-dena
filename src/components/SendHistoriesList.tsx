'use client';

import type { SendHistoriesData } from "@/lib/send-history";
import { SendHistoryItem } from "./SendHistoryItem";
import { Button } from "./ui/button";
import { useCallback, useEffect, useState } from "react";
import { SendHistoriesToolbar } from "./SendHistoriesToolbar";
import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "./ui/badge";
import { removeInvitation, resendInvitation } from "@/lib/actions";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";



type SendHistoriesListProps = SendHistoriesData;

export function SendHistoriesList(props: SendHistoriesListProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [perPage, setPerPage] = useState( parseInt( searchParams.get("perPage") || '10' ) )
  const deletePayload = useDeleteItems()

  const loadMoreItems = () => {
    const newQueryParams = new URLSearchParams(searchParams)
    newQueryParams.set("perPage", (perPage + 10).toString())
    router.push(`?${newQueryParams.toString()}`)
  }

  const onResendInvitation = useCallback(async (id: number) => {
    const formData = new FormData();
    formData.append('id', id.toString());
    const result = await resendInvitation(formData);
    if (!result.success) {
      toast.error("Gagal mengirim ulang undangan")
    }
    window.open(result.data?.url, "_blank");
  }, [])

  const onRemoveInvitation = useCallback(async (id: number) => {
    const formData = new FormData();
    formData.append('id', id.toString());
    const result = await removeInvitation(formData);
    if (!result.success) {
      toast.error("Gagal mengirim ulang undangan")
    } else {
      toast.info("Sukses menghapus undangan")
    }
  }, [])


  return (
    <div>
      <SendHistoriesToolbar />

      <RemoveDialog
        show={deletePayload.show}
        onClose={() => {
          deletePayload.hide()
        }}
        onAction={() => {
          onRemoveInvitation(deletePayload.id)
          deletePayload.hide()
        }}
      />

      <div className="md:max-w-5xl mx-auto pb-12">
        <div className="flex flex-col gap-2 divide-y">
          {props.items.map(item => (
            <SendHistoryItem
              key={item.uniqueToken}
              item={item}
              onResendInvitation={onResendInvitation}
              onRemoveInvitation={(id) => {
                deletePayload.showForId(id)
              }}
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

type RemoveDialogProps = {
  onAction: () => any;
  show: boolean;
  onClose: () => void;
}
function RemoveDialog({ onAction, show, onClose }: RemoveDialogProps) {
  return (
    <AlertDialog
      open={show}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah anda yakin akan menghapus undangan ini?</AlertDialogTitle>
          <AlertDialogDescription>
            Tindakan ini tidak dapat dibatalkan. Ini akan menghapus akun Anda secara permanen dan menghapus data Anda dari server kami.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={onClose}
          >Batalkan</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onAction()}
          >Hapus</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

function useDeleteItems() {
  const [ payload, setPayload ] = useState({
    show: false,
    id: 0
  })
  const showForId = (id: number) => {
    setPayload({
      show: true,
      id
    })
  }
  const hide = () => {
    setPayload({
      show: false,
      id: 0
    })
  }
  return {
    show: payload.show,
    id: payload.id,
    showForId,
    hide
  }
}