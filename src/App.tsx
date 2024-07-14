import { Router } from '@/router'

export function App() {
  return (
    <Router />
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
