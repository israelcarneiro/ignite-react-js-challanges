import { Flex, Heading, Image, Text } from '@chakra-ui/react'

interface BannerProps {
  isWideVersion: boolean
}

export const Banner = ({ isWideVersion }: BannerProps) => {
  return (
    <Flex
      bgImage='/images/background.png'
      maxWidth={isWideVersion ? '100%' : '375px'}
      w='100%'
      h={isWideVersion ? '335px' : '163px'}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      px={isWideVersion ? '8.75rem' : '1rem'}
      py={isWideVersion ? '80px' : '1.5rem'}
      justify='space-between'
    >
      <Flex
        flexDir='column'
        maxWidth={isWideVersion ? '100%' : '375px'}
        w='100%'
      >
        <Heading
          color='gray.50'
          fontWeight='500'
          fontSize={isWideVersion ? '2.25rem' : '1.25rem'}
          lineHeight={isWideVersion ? '3.4rem' : '1.875rem'}
          mb={isWideVersion ? '1.25rem' : '0.5rem'}
        >
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Heading>
        <Text
          color='gray.50'
          w='100%'
          fontSize={isWideVersion ? '1.25rem' : '0.875rem'}
          fontWeight='400'
          lineHeight={isWideVersion ? '2rem' : '1.3125rem'}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
      {isWideVersion && (
        <Image
          src='/images/airplane.svg'
          alt='airplane'
          transform='rotate(2deg)'
          h='300px'
        />
      )}
    </Flex>
  )
}
