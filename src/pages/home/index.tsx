import { CardMenu } from "@/shared/ui/card-menu/CardMenu";
import { Title } from "@/shared/ui";
import casinoUrl from '@/shared/assets/casino.png?url'
import sportUrl from '@/shared/assets/sport.png?url';

export default function HomePage() {
  return (
    <section className="flex flex-col justify-center gap-4 items-center uppercase relative w-full">
      <Title title="Ad Creator" description="Choose options" />
      <div className="flex md:flex-row flex-col gap-5 w-full justify-center items-center px-4">
        <CardMenu title="CASINO" href="/casino" url={casinoUrl} />
        <CardMenu title="Sport" href="/sport" url={sportUrl} />
      </div>
    </section>
  )
}


