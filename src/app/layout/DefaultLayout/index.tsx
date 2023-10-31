import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <main className="w-full max-w-[54rem] m-[0_auto]">
        <Outlet />
      </main>
    </div>
  )
}
