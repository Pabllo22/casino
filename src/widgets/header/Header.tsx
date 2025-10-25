import { NavLink } from 'react-router-dom';
import LogoIcon from '@/shared/assets/logo.svg?react';
import DownloadIcon from '@/shared/assets/icons/download.svg?react'
import { Button } from '@/shared/ui'

export function Header() {
  return (
    <header className="flex items-center md:justify-between justify-center md:px-7 px-4 md:py-6 py-3 flex-wrap gap-5 absolute top-0 left-0 w-full z-10">
       <NavLink
          to="/"
          aria-label="Casino Banner home"
        >
          <LogoIcon className="h-8 w-auto" aria-hidden />
      </NavLink>
      <div className="flex items-center gap-4 text-xs">
        <Button
          as="a"
          href="#starter-pack"
          icon={<DownloadIcon />}
        >
          Starter Pack
        </Button>
      </div>
    </header>
  )
}
