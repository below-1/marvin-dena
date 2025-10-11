'use server';

import { getAllKomentars } from "@/lib/actions";
import InvitationClient from "./InvitationClient";
import { getInvitationDetail } from "@/lib/send-history";

export default async function InvitationPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const sendHistory = await getInvitationDetail(id)
  const komentars = await getAllKomentars()
  if (!sendHistory) {
    throw new Error("invitation not exist")
  }
  return (
    <InvitationClient
      name={sendHistory.name}
      komentars={komentars}
    />
  )
}

