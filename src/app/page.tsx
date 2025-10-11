'use server';

import { getAllKomentars } from "@/lib/actions";
import HomeClient from "./HomeClient";

export default async function Home() {
  const komentars = await getAllKomentars();
  return (
    <HomeClient
      komentars={komentars}
    />
  )
}

