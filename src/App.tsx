import { Provider } from 'react-redux'

import { Router } from '@/router'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>

    /* <Provider store={store}>
      <DecksPage />
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
    </Provider>*/
  )
}
