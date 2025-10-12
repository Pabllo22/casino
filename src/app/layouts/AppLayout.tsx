import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets'

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-black">
      <Header />
      <main className="flex-1 flex justify-center">
        <Outlet />
      </main>
    </div>
  )
}


