import { Container, Title, Button } from "@/shared/ui";
import { CardInfo } from "./ui/CardInfo";
import IconArrow from "@/shared/assets/icons/arrow-right.svg?react";
import { Loading, Result } from "@/entities/result";
import { useCasinos } from "@/shared/hooks";
import { useAppStore } from "@/shared/store";
import { useState } from "react";

export default function CasinoPage() {
  const { casinos, loading } = useCasinos();
  const { isLoading } = useAppStore();
  const [promocode, setPromocode] = useState<string>('');
  return (
    <section className='w-full flex flex-col mt-[130px]'>
      <Container>
        <Title title="Ad Creator" />
        <Button
          to="/"
          className='!bg-none !bg-black-100 !text-white !px-8'
          icon={<IconArrow />}
        >
          back to menu
        </Button>
        <CardInfo onPromocodeChange={setPromocode} />
        {loading || isLoading ? <Loading /> : <Result data={casinos} promocode={promocode} />}
      </Container>
    </section>
  );
};
