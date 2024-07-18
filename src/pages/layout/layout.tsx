import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header'
import { DecksPage } from '@/pages/decks.page'

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <DecksPage />
    </div>
  )
}
