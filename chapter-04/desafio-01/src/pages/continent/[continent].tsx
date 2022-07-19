import {
  Box,
  Flex,
  Heading,
  Image,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text
} from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { CityHundredGrid } from '../../components/CityHundredGrid'
import { Header } from '../../components/Header'
import { api } from '../../services/api'
import { City } from '../../types/city'

interface Continent {
  id: string
  name: string
  description: string
  bgImage: string
  qtdCountry: string
  qtdLanguage: string
  qtdCityPlus100: string
  cityPlus100: City[]
}

interface ContinentProps {
  continentInfo: Continent
}

const Continent = ({ continentInfo }: ContinentProps) => {
  return (
    <>
      <Header />
      <Flex alignItems='flex-end'>
        <Image
          src={continentInfo.bgImage}
          // maxWidth='100%'
          width='100%'
          height={['150px', '500px']}
          objectFit='cover'
        />
        <Heading
          color='gray.50'
          fontSize={['1.75rem', '3rem']}
          fontWeight='600'
          position='absolute'
          pl='8.75rem'
          pb='3.75rem'
        >
          {continentInfo.name}
        </Heading>
      </Flex>
      <Flex
        mt={['0.8rem', '5rem']}
        mx={['1rem', '8.75rem']}
        justify='space-between'
        direction={['column', 'row']}
      >
        <Box
          w={['100%', '900px']}
          h='100%'
          fontSize={['0.8rem', '1.5rem']}
          fontWeight='400'
          color='gray.700'
        >
          {continentInfo.description}
        </Box>
        <Stack direction={['row', 'row']} spacing={['0', '2.625rem']}>
          <Box
            w='10rem'
            h='5.625rem'
            display='flex'
            flexDirection='column'
            alignItems={['start', 'center']}
            justifyContent='center'
          >
            <Heading
              color='yellow'
              fontSize={['1.5rem', '3rem']}
              fontWeight='600'
            >
              {continentInfo.qtdCountry}
            </Heading>
            <Text
              color='gray.700'
              fontSize={['1.125rem', '1.5rem']}
              fontWeight={['400', '600']}
            >
              países
            </Text>
          </Box>
          <Box
            w='10rem'
            h='5.625rem'
            display='flex'
            flexDirection='column'
            alignItems={['start', 'center']}
            justifyContent='center'
          >
            <Heading
              color='yellow'
              fontSize={['1.5rem', '3rem']}
              fontWeight='600'
            >
              {continentInfo.qtdLanguage}
            </Heading>
            <Text
              color='gray.700'
              fontSize={['1.125rem', '1.5rem']}
              fontWeight={['400', '600']}
            >
              línguas
            </Text>
          </Box>
          <Box
            w='14rem'
            h='5.625rem'
            display='flex'
            flexDirection='column'
            alignItems={['start', 'center']}
            justifyContent='center'
          >
            <Heading
              color='yellow'
              fontSize={['1.5rem', '3rem']}
              fontWeight='600'
            >
              {continentInfo.qtdCityPlus100}
            </Heading>
            <Flex flexDirection='row' align='center'>
              <Text
                color='gray.700'
                fontSize={['1.125rem', '1.5rem']}
                fontWeight={['400', '600']}
                display='flex'
                mr='0.25rem'
              >
                cidades +100
              </Text>
              <Popover>
                <PopoverTrigger>
                  <Flex cursor='pointer'>
                    <Image src='/images/info.svg' />
                  </Flex>
                </PopoverTrigger>
                <PopoverContent
                  bgColor='gray.100'
                  fontSize='1rem'
                  w='320px'
                  color='gray.700'
                >
                  <PopoverCloseButton />
                  <PopoverBody>
                    Esse número simboliza a quantidade de cidades desse
                    continente que fazem parte das 100 cidades mais visitadas do
                    planeta Terra
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </Box>
        </Stack>
      </Flex>
      <Flex
        flexDirection='column'
        mt={['2rem', '5rem']}
        mx={['0rem', '8.75rem']}
      >
        <Heading fontSize='2.25rem' fontWeight='500' color='gray.700'>
          Cidades +100
        </Heading>
        <CityHundredGrid cityPlus100={continentInfo.cityPlus100} />
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      '/continent/north-america',
      '/continent/south-america',
      '/continent/asia',
      '/continent/africa',
      '/continent/europe',
      '/continent/oceania'
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({
  params: { continent }
}) => {
  // const { continent } = params

  const response = await api.get<Continent[]>(`/continent/?slug=${continent}`)
  // console.log(response.data)
  const continentData: Continent = response.data[0]

  const continentInfo: Continent = {
    id: continentData.id,
    name: continentData.name,
    description: continentData.description,
    bgImage: continentData.bgImage,
    qtdCountry: continentData.qtdCountry,
    qtdLanguage: continentData.qtdLanguage,
    qtdCityPlus100: continentData.qtdCityPlus100,
    cityPlus100: continentData.cityPlus100.map(city => {
      return {
        cityName: city.cityName,
        countryName: city.countryName,
        cityUrl: city.cityUrl,
        flag: city.flag
      }
    })
  }

  return {
    props: {
      continentInfo
    },
    revalidate: 60
  }
}

export default Continent
