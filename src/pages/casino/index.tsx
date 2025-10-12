import { Container, Title, Button } from "@/shared/ui";
import CasinoList from "@/widgets/casino/CasinoList";
import { CardInfo } from "./ui/CardInfo";
import IconArrow from "@/shared/assets/icons/arrow-right.svg?react";
import { Loading } from "@/entities/result";

export default function CasinoPage() {
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
        <Loading />
      </Container>
    </section>
  );
};
