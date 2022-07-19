import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react'

interface TravelTypesItemProps {
  imgSrc: string
  label: string
}

export const TravelTypesItem = ({ imgSrc, label }: TravelTypesItemProps) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Box
      display='flex'
      justifyContent='center'
      flexDirection={['row', 'column']}
      alignItems='center'
      w={['136px', '100%']}
      h={['21', '100%']}
    >
      {isWideVersion ? (
        <Image src={imgSrc} w='85px' h='85px' mb='1.5rem' />
      ) : (
        <Image src='/images/dot.svg' w='8px' h='8px' mr='0.5rem' />
      )}
      <Text
        fontWeight='bold'
        fontSize={['1.125rem', '1.5rem']}
        color='gray.700'
      >
        {label}
      </Text>
    </Box>
  )
}
