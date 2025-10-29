import { Link } from "react-router-dom";

interface CardMenuProps{
  href?: string;
  title?: string;
  url?: string;
}

export const CardMenu = ({href = "/", title, url}: CardMenuProps) => {
  return (
    <Link to={href} className="md:pt-10 pt-6 bg-black-100 rounded-[45px] overflow-hidden relative max-w-[404px] w-full h-[375px] block">
      <img src={url} alt={title} className="absolute bottom-0 left-0 w-full" />
      <div className="md:text-[64px] text-[40px] font-black text-white uppercase text-center leading-[64px] -mt-2">{title}</div>
    </Link>
  );
};
