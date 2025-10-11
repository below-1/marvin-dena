import type { IKomentar } from "@/db/schema";
import { KomentarList } from "./KomentarList";
import { KomentarForm } from "./KomentarForm";

type KomentarSectionProps = {
  komentars: IKomentar[];
}

export function KomentarSection(props: KomentarSectionProps) {
  return (
    <div id="KomentarSection" className="min-h-screen py-32 bg-secondary/30">
      <div className="mx-auto max-w-3xl flex flex-col px-4 md:px-0">

        <div className="bg-neutral-100 border-4 border-white rounded-sm flex flex-col">
          <h2 className="text-xl font-bold uppercase text-center leading-12">{props.komentars.length} Ucapan</h2>
          <KomentarForm
          />
          <KomentarList 
            messages={props.komentars}
          />
        </div>

      </div>
    </div>
  )
}

