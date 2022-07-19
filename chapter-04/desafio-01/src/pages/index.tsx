import {
  Center,
  Divider,
  Container,
  Flex,
  useBreakpointValue
} from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Slide } from '../components/Slide'
import { TravelTypes } from '../components/TravelTypes/TravelTypes'
import { api } from '../services/api'
interface Continent {
  id: string
  name: string
  slug: string
  bgSlide: string
  shortDescription: string
}

interface HomeProps {
  continents: Continent[]
}

const Home: NextPage<HomeProps> = ({ continents }: HomeProps) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      <Head>
        <title>Homepage | worldtrip</title>
      </Head>
      <Header />
      <Banner isWideVersion={!!isWideVersion} />
      <TravelTypes />
      <Center>
        <Divider
          borderColor='gray.700'
          w='90px'
          h='2px'
          bg='gray.700'
          variant='solid'
        />
      </Center>
      <Container
        w={['100%', '840px']}
        justifyContent='center'
        textAlign='center'
        fontWeight='500'
        fontSize={['1.25rem', '2rem']}
        color='gray.700'
        pt='3.125rem'
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Container>
      <Flex px={['0', '6.25rem']} py='3.125rem'>
        <Slide continents={continents} />
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<Continent[]>('/continent')

  const continents = response.data.map(continent => {
    return {
      id: continent.id,
      name: continent.name,
      slug: continent.slug,
      bgSlide: continent.bgSlide,
      shortDescription: continent.shortDescription
    }
  })

  return {
    props: {
      continents
    }
  }
}

export default Home
