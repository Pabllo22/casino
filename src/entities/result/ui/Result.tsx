import DownloadIcon from '@/shared/assets/icons/download.svg?react'
import { Button, Title } from '@/shared/ui';

export const Result = ({data}: {data: string[]}) => {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(90deg,#232121_0%,#000_100%)] shadow-[0_0_6px_0_rgba(149,220,0,0.26)] rounded-[40px] flex flex-col md:p-14 p-6 justify-center mt-16">
      <Title
        descriptionBg="gradient"
        title={data.length ? 'RESULTS' : 'No RESULTS'}
        description={data.length ? 'Download the banners' : 'fill the filter'}
      />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-full my-12">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="relative h-[350px] bg-[#D9D9D9] rounded-2xl">
            <button
              type="button"
              className="absolute right-4 top-4 p-1.5 border-none outline-0 bg-green-100 rounded-xl"
              aria-label={`Download banner ${i + 1}`}
            >
              <DownloadIcon className="w-12 h-12" />
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button as="a" href="#starter-pack" icon={<DownloadIcon />}>
          Download ALL
        </Button>
      </div>
    </div>
  );
};