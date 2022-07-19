import { Stack } from '@chakra-ui/react'

import { TravelTypesItem } from './TravelTypesItem'

export const TravelTypes = () => {
  return (
    <Stack
      pt={['2.25rem', '7.5rem']}
      pb={['2.25rem', '5rem']}
      px={['3.125rem', '12rem']}
      direction='row'
      spacing={['0', '7.5rem']}
      w={['100%', '100%']}
      h={['120px', '100%']}
      justifyContent='space-between'
      flexWrap={['wrap', 'nowrap']}
    >
      <TravelTypesItem imgSrc='images/cocktail.svg' label='vida noturna' />
      <TravelTypesItem imgSrc='images/surf.svg' label='praia' />
      <TravelTypesItem imgSrc='images/building.svg' label='moderno' />
      <TravelTypesItem imgSrc='images/museum.svg' label='clássico' />
      <TravelTypesItem imgSrc='images/earth.svg' label='e mais...' />
    </Stack>
  )
}
