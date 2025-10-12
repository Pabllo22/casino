import { Button, Container, Title } from '@/shared/ui'
import CasinoList from '@/widgets/casino/CasinoList'
import { CardInfo } from './ui/CardInfo'
import IconArrow from "@/shared/assets/icons/arrow-right.svg?react";
import { Result } from '@/entities/result/ui/Result';

export default function SportPage() {
  
  return (
    <section className='w-full flex flex-col'>
      <Container>
        <Title title="Ad Creator" />
        <Button
          to="/"
          className='!bg-none !bg-black-100 !text-white'
          icon={<IconArrow />}
        >
          back to menu
        </Button>
        <CardInfo />
        <Result data={["1"]} />
      </Container>
    </section>
  )
}

