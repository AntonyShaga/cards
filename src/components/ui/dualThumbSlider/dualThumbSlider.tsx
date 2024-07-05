import { useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './dualThumbSlider.module.scss'

export const DualThumbSlider = () => {
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 100])

  const handleSliderChange = (value: [number, number]) => {
    setSliderValue(value)
  }

  return (
    <div className={s.slider}>
      <div className={s.sliderNumber}>{sliderValue[0]}</div>
      <Slider.Root
        className={s.sliderRoot}
        minStepsBetweenThumbs={1}
        onValueChange={handleSliderChange}
        step={1}
        value={sliderValue}
      >
        <Slider.Track className={s.sliderTrack}>
          <Slider.Range className={s.sliderRange} />
        </Slider.Track>
        <Slider.Thumb className={s.sliderThumb} />
        <Slider.Thumb className={s.sliderThumb} />
      </Slider.Root>
      <div className={s.sliderNumber}>{sliderValue[1]}</div>
    </div>
  )
}
