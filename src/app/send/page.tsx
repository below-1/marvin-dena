'use server'

import { SendCard } from "@/components/SendCard";
import { SendHistoriesList } from "@/components/SendHistoriesList";
import { SendHistoriesFilterSchema } from "@/lib/schema";
import { getSendHistories } from "@/lib/send-history";

type SendPageProps = {
  searchParams: Promise<{ 
    keyword?: string;
    perPage?: string;
    page?: string;
    sortDirection?: string;
  }>
}


export default async function SendPage({ searchParams }: SendPageProps) {
  const rawParams = await searchParams;
  const validationResult = await SendHistoriesFilterSchema.safeParseAsync(rawParams);
  if (!validationResult.success) {
    console.log(validationResult.error)
    throw new Error("error decode parameters");
  }
  const funcParams = validationResult.data;
  console.log(funcParams);
  const data = await getSendHistories({
    ...{
      page: 0,
      perPage: 10,
      sortDirection: 'desc'
    },
    ...funcParams,
  })

  return (
    <div id="SendPage">
      <div className="h-screen">
        <SendHistoriesList {...data} />
        {/* <SendCard /> */}
      </div>
    </div>
  )
}