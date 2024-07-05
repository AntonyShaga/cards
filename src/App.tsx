import { Button } from '@/components/ui/button'
import { CardTab } from '@/components/ui/cardTab'
import { CardTabFul } from '@/components/ui/cardTabFul'
import { CheckBox } from '@/components/ui/checkbox'
import { FontIcon } from '@/components/ui/fontIcon'
import { Header } from '@/components/ui/header'
import { Input } from '@/components/ui/input'
import { NewModal } from '@/components/ui/newModal'
import { RadioButton } from '@/components/ui/radioButton'

import { Title } from '@/components/ui/title'
import { Edit } from '@/icon/edit/edit'
import Learn from '@/icon/learn/learn'
import { LogoOut } from '@/icon/logoOut/logoOut'
import { More } from '@/icon/more/more'
import { Trash } from '@/icon/trash/trash'
import { DualThumbSlider } from '@/components/ui/dualThumbSlider'

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

      <NewModal icon={<More />}>
        <FontIcon icon={<Learn />} text={'Learn'} />
        <FontIcon icon={<Edit />} text={'Edit'} />
        <FontIcon icon={<Trash />} text={'Delete'} />
      </NewModal>
      <CardTabFul />

      <CheckBox />
      <RadioButton />
      <DualThumbSlider />
    </div>
  )
}
