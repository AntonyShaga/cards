import { Button } from '@/components/ui/button'
import { CardTab } from '@/components/ui/cardTab'
import { CardTabFul } from '@/components/ui/cardTabFul'
import { FontIcon } from '@/components/ui/fontIcon'
import { Header } from '@/components/ui/header'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { Title } from '@/components/ui/title'
import { User } from '@/components/ui/user'
import { Edit } from '@/icon/edit/edit'
import Learn from '@/icon/learn/learn'
import { LogoOut } from '@/icon/logoOut/logoOut'
import { More } from '@/icon/more/more'
import { Person } from '@/icon/person/person'
import { Trash } from '@/icon/trash/trash'

export function App() {
  return (
    <div>
      <Header />
      <Modal icon={<More />}>
        {<FontIcon icon={<Learn />} text={'Learn'} />}
        {<FontIcon icon={<Edit />} text={'Edit'} />}
        {<FontIcon icon={<Trash />} text={'Delete'} />}
      </Modal>
      <Input disabled={false} value={''} variant={'search'} />
      <Button>
        {<LogoOut />}
        {'Button primary'}
      </Button>
      <Title />
      <CardTab />
      <Modal
        icon={<User alt={'as'} email={'someEmaill'} name={'Ivanov'} src={''} variant={'forUser'} />}
      >
        {<User alt={'as'} email={'someEmaill'} name={'Ivanov'} src={''} variant={'forModal'} />}
        {<FontIcon icon={<Person />} text={'My Profile'} />}
        {<FontIcon icon={<LogoOut />} text={'Sign Out'} />}
      </Modal>
      <CardTabFul />
    </div>
  )
}
