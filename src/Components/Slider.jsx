
import {
     Slider,
     SliderTrack,
     SliderFilledTrack,
     SliderThumb,

   } from '@chakra-ui/react'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function Pricecount() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
     <Slider aria-label='slider-ex-1' defaultValue={30}>
          <SliderTrack>
          <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
          </Slider>
    </ChakraProvider>
  )
}
export default Pricecount