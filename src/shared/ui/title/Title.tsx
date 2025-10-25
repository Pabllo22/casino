interface TitleProps {
  title: string;
  description?: string;
  descriptionBg?: 'black' | 'gradient' | 'gray' | 'transparent';
  descriptionBgClass?: string;
}

export const Title = ({
  title,
  description,
  descriptionBg = 'black',
  descriptionBgClass,
}: TitleProps) => {
  const wrap = 'flex flex-col gap-0 items-center px-4';
  const titleCls =
    'md:text-[95px] text-[58px] leading-none font-[900] text-white uppercase';

  const bgMap: Record<NonNullable<TitleProps['descriptionBg']>, string> = {
    black: 'bg-black py-2.5 px-7',
    gradient: 'bg-[linear-gradient(90deg,#f48400_0%,#ffa63e_100%)] py-2.5 px-6 md:-mt-4 -mt-2',
    gray: 'bg-neutral-800',
    transparent: 'bg-transparent'
  };

  const descBgCls = descriptionBgClass ?? bgMap[descriptionBg];

  return (
    <div className={wrap}>
      <div className={titleCls}>{title}</div>
      {Boolean(description) && (
        <div className={`inline ${descBgCls} text-white uppercase md:text-[25px] text-xl font-semibold rounded-[30px] leading-none max-w-[780px] text-center whitespace-pre-line`}>
          {description}
        </div>
      )}
    </div>
  );
};