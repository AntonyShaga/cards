import { AvatarLogo } from '@/components/ui/avtar'
import { Button } from '@/components/ui/button'
import { CardTab } from '@/components/ui/cardTab'
import { CardTabFul } from '@/components/ui/cardTabFul'
import { FontIcon } from '@/components/ui/fontIcon'
import { Header } from '@/components/ui/header'
import { Input } from '@/components/ui/input'
import { NewModal } from '@/components/ui/newModal'
import { Title } from '@/components/ui/title'
import { LogoOut } from '@/icon/logoOut/logoOut'
import { Person } from '@/icon/person/person'

export function App() {
  return (
    <div>
      <Header />
      <Input disabled={false} value={''} variant={'search'} />
      <Button>
        {<LogoOut />}
        {'Button primary'}
      </Button>
      <Title />
      <CardTab />

      <NewModal
        icon={
          <AvatarLogo
            src={
              'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
            }
          />
        }
      >
        {
          <AvatarLogo
            email={'j&johnson@gmail.com'}
            name={'Pedro Duarte'}
            src={
              'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
            }
          />
        }
        {<FontIcon icon={<Person />} text={'My Profile'} />}
        {<FontIcon icon={<LogoOut />} text={'Sign Out'} />}
      </NewModal>
      <CardTabFul />
    </div>
  )
}
