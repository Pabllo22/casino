import { CardMenu } from "@/shared/ui/card-menu/CardMenu";
import { Title } from "@/shared/ui";
import casinoUrl from '@/shared/assets/Casino.png?url'
import sportUrl from '@/shared/assets/Sport.png?url';
import bgImg from '../../../public/BG.png'

export default function HomePage() {
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full">
        <img src={bgImg} alt="" className="w-full h-full object-cover"/>
      </div>
      <section className="flex flex-col justify-center gap-4 items-center uppercase w-full relative">
        <Title title="Ad Creator" description="Choose options" />
        <div className="flex md:flex-row flex-col md:gap-[82px] gap-5 w-full justify-center items-center px-4 mt-12">
          <CardMenu title="CASINO" href="/casino" url={casinoUrl} />
          <CardMenu title="Sport" href="/sport" url={sportUrl} />
        </div>
      </section>
    </>
    
  )
}

