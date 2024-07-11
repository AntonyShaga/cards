import { Button } from '@/components/ui/button'
import { CardTabFul } from '@/components/ui/cardTabFul'
import { CheckBox } from '@/components/ui/checkbox'
import { DualThumbSlider } from '@/components/ui/dualThumbSlider'
import { DynamicPagination } from '@/components/ui/dynamicPagination'
import { Header } from '@/components/ui/header'
import { Input } from '@/components/ui/input'
import { NewModal } from '@/components/ui/newModal'
import { RadioButton } from '@/components/ui/radioButton'
import { TextIconWrapper } from '@/components/ui/textIconWrapper'
import { Title } from '@/components/ui/title'
import { Edit } from '@/icon/edit/edit'
import Learn from '@/icon/learn/learn'
import { LogoOut } from '@/icon/logoOut/logoOut'
import { More } from '@/icon/more/more'
import { Trash } from '@/icon/trash/trash'
import { ProfileCard } from 'components/ui/profileCard'

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
      <ProfileCard name={'Name'} />
      <NewModal icon={<More />}>
        <TextIconWrapper icon={<Learn />} text={'Learn'} />
        <TextIconWrapper icon={<Edit />} text={'Edit'} />
        <TextIconWrapper icon={<Trash />} text={'Delete'} />
      </NewModal>
      <CardTabFul />

      <CheckBox />
      <RadioButton />
      <DualThumbSlider />
      <DynamicPagination />
    </div>
  )
}
