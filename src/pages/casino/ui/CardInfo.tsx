import { ChipsGroup, CustomSelect } from '@/shared/ui';
import { Input } from '@/shared/ui/input/Input';
import { useState } from 'react';
import imageUrl from "@/shared/assets/Wheel.png";

export const CardInfo = () => {
  const [val, setVal] = useState<string | number | null>(null);
  return (
    <div className='mt-8 relative overflow-hidden bg-[linear-gradient(90deg,#232121_0%,#000_100%)] shadow-[0_0_21px_0_rgba(149,220,0,0.26)] rounded-[40px] flex lg:flex-row flex-col'>
      <div className="lg:w-1/2 relative shrink-0">
        <img src={imageUrl} className='absolute bottom-0 left-0 w-full lg:block hidden'/>
        <div className="uppercase md:text-[139px] text-[109px] text-white font-black text-center lg:mt-5 mt-2">Casino</div>
      </div>
      <div className="flex flex-col md:gap-12 gap-8 flex-1 lg:w-1/2 lg:py-16 lg:pr-16 p-6">
        <ChipsGroup
          label='Choose banner category'
          options={[
            { label: 'General', value: 'sx' },
            { label: 'Events', value: 'mx' },
            { label: 'Crush', value: 'mx2' },
          ]}
          onChange={(v) => console.log('single ->', v)}
        />
        <div className="flex flex-col md:gap-6 gap-4">
          <div className="md:text-[32px] text-xl text-white font-medium">Choose the GEO</div>
          <CustomSelect
            options={[
              { label: 'UZS', value: 'UZS' },
              { label: 'BDT', value: 'BDT' },
              { label: 'INR', value: 'INR' },
              { label: 'RUB', value: 'RUB' },
              { label: 'AZN', value: 'AZN' },
              { label: 'PKR', value: 'PKR' },
              { label: 'ENG', value: 'ENG' },
              { label: 'RUB', value: 'RUB' },
              { label: 'AZN', value: 'AZN' },
              { label: 'PKR', value: 'PKR' },
              { label: 'ENG', value: 'ENG' },
            ]}
            placeholder="Select"
            value={val}
            onChange={setVal}
          />
        </div>
        <div className="flex flex-col md:gap-6 gap-4">
          <div className="md:text-[32px] text-xl text-white font-medium">Enter the promocode</div>
          <Input placeholder='Type here'/>
        </div>  
      </div>
    </div>
  );
};