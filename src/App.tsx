import { Button } from '@/components/ui/button'
import { CheckBox } from '@/components/ui/checkbox'
import { DetailCard } from '@/components/ui/detailCard'
import { DropdownModal } from '@/components/ui/dropdownModal'
import { DualThumbSlider } from '@/components/ui/dualThumbSlider'
import { DynamicPagination } from '@/components/ui/dynamicPagination'
import { Header } from '@/components/ui/header'
import { Input } from '@/components/ui/input'
import { ProfileCard } from '@/components/ui/profileCard'
import { RadioButton } from '@/components/ui/radioButton'
import { TextIconWrapper } from '@/components/ui/textIconWrapper'
import { Title } from '@/components/ui/title'
import { Edit } from '@/icon/edit/edit'
import Learn from '@/icon/learn/learn'
import { LogoOut } from '@/icon/logoOut/logoOut'
import { More } from '@/icon/more/more'
import { Trash } from '@/icon/trash/trash'

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
      <DetailCard name={'Name'} />
      <DropdownModal icon={<More />}>
        <TextIconWrapper icon={<Learn />} text={'Learn'} />
        <TextIconWrapper icon={<Edit />} text={'Edit'} />
        <TextIconWrapper icon={<Trash />} text={'Delete'} />
      </DropdownModal>
      <ProfileCard />

      <CheckBox />
      <RadioButton />
      <DualThumbSlider />
      <DynamicPagination />
    </div>
  )
}
