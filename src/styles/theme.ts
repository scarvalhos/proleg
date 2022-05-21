import { extendTheme } from '@chakra-ui/react'

export const Theme = extendTheme({
    colors: {
        gray: {
          "900": "#151515",
          "800": "#1E1E1E",
          "700": "#222222",
          "600": "#666666",
          "50": "#F5F5F5",
        },
        green: {
            "300": "#62F95F"
        },
        purple: {
            "400": "#CB32FD"
        },
        pink: {
            "500": "#FE017D"
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})