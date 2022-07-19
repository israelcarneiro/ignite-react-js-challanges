import { SimpleGrid, Box, Image, Flex, Text } from '@chakra-ui/react'

import { City } from '../types/city'

interface CityHundredGridProps {
  cityPlus100: City[]
}

export const CityHundredGrid = ({ cityPlus100 }: CityHundredGridProps) => {
  return (
    <SimpleGrid minChildWidth='256px' spacing='40px' mt='2.5rem'>
      {cityPlus100.map(city => (
        <Box
          key={city.cityName}
          w='256px'
          h='279px'
          border='1px solid'
          borderColor='yellow'
          bg='white'
          mx={['4rem', '0']}
        >
          <Image src={city.cityUrl} w='256px' h='173px' />
          <Flex justify='space-between' alignItems='center'>
            <Flex
              flexDirection='column'
              mt='1.125rem'
              ml='1.5rem'
              mb={['1.25rem', '1.5rem']}
            >
              <Text
                fontWeight='600'
                fontSize='1.25rem'
                fontFamily='Barlow'
                color='gray700'
              >
                {city.cityName}
              </Text>
              <Text
                fontWeight='500'
                fontSize='1rem'
                fontFamily='Barlow'
                color='#999'
                opacity='0.5'
                mt='0.75rem'
              >
                {city.countryName}
              </Text>
            </Flex>
            <Image
              src={city.flag}
              w='30px'
              h='30px'
              borderRadius='50%'
              mr='2.375rem'
            />
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  )
}
