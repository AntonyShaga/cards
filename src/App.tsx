import { Button } from '@/components/ui/button'
import { CardTab } from '@/components/ui/cardTab'
import { CardTabFul } from '@/components/ui/cardTabFul'
import { Header } from '@/components/ui/header'
import { Input } from '@/components/ui/input'
import { Title } from '@/components/ui/title'
import { LogOutOutline } from '@/icon/LogOutOutline'

export function App() {
  return (
    <div>
      <Header />
      <Input disabled={false} value={''} variant={'search'} />
      <Button>
        {<LogOutOutline />}
        {'Button primary'}
      </Button>
      <Title />
      <CardTab /> <br />
      <CardTabFul />
    </div>
  )
}
