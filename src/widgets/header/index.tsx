import { NavLink } from 'react-router-dom'
import DatoCmaPing from '../../components/DatoCmaPing'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-3 border-b border-white/10">
      <nav className="flex items-center gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-medium text-white/90 hover:text-white ${isActive ? 'underline underline-offset-4' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/offers"
          className={({ isActive }) =>
            `text-sm font-medium text-white/90 hover:text-white ${isActive ? 'underline underline-offset-4' : ''}`
          }
        >
          Offers
        </NavLink>
      </nav>
      <div className="text-xs">
        <DatoCmaPing />
      </div>
    </header>
  )
}


