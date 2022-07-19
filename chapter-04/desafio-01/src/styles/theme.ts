import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '50': '#F5F8FA',
      '100': '#DADADA',
      '700': '#47585B'
    },
    yellow: '#FFBA08'
  },
  fonts: {
    heading: 'Poppins',
    body: `'Poppins', 'Barlow', sans-serif`
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        fontSize: '16px'
      }
    }
  }
})
