import { Outlet } from 'react-router-dom'
import Header from '../../widgets/header'

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  )
}


