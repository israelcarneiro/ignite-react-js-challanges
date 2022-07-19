import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Continent {
  id: string
  name: string
  slug: string
  bgSlide: string
  shortDescription: string
}

interface SlideProps {
  continents: Continent[]
}

export const Slide = ({ continents }: SlideProps) => {
  return (
    <Swiper
      autoplay
      navigation
      pagination={{
        dynamicBullets: true
      }}
      modules={[Navigation, Pagination]}
    >
      {continents.map(continent => (
        <SwiperSlide key={continent.id}>
          <Link href={`/continent/${continent.slug}`}>
            <Flex>
              <Flex
                justifyContent='center'
                flexDir='column'
                alignItems='center'
                backgroundImage={continent.bgSlide}
                backgroundPosition='center'
                backgroundSize='cover'
                backgroundRepeat='no-repeat'
                width='100%'
                height={['250px', '450px']}
                _hover={{
                  '&>h2, p': { color: 'gray.50', cursor: 'pointer' }
                }}
              >
                <Heading
                  color='gray.50'
                  fontWeight='700'
                  fontSize={['1.5rem', '3rem']}
                  transition={'color 0.2s'}
                >
                  {continent.name}
                </Heading>
                <Text
                  color='gray.50'
                  fontWeight='700'
                  fontSize={['0.8rem', '1.5rem']}
                  transition={'color 0.2s'}
                >
                  {continent.shortDescription}
                </Text>
              </Flex>
            </Flex>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
