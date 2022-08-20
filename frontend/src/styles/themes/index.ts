import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#121214",
      "800": "#202024",
      "700": "#323238",
      "400": "#7C7C8A",
      "300": "#8D8D99",
      "200": "#C4C4CC",
      "100": "#E1E1E6",
      "50": "#E1E1E6"
    },
    green: {
      "900": "#004430",
      "800": "#005f43",
      "700": "#006c4c",
      "600": "#007a56",
      "500": "#00875F",
      "400": "#00B37E",
      "300": "#339f7f",
      "200": "#4dab8f",
      "100": "#4dab8f",
      "50": "#66b79f"
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
      '*::placeholder': {
        color: 'gray.300',
      },
    }
  }
})