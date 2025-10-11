'use server';

import { getAllKomentars } from "@/lib/actions";
import InvitationClient from "./invitation/[id]/InvitationClient";

export default async function Home() {
  const komentars = await getAllKomentars();
  return (
    <InvitationClient
      name=""
      komentars={komentars}
    />
  )
}

