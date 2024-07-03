
import {createTheme} from "@mui/material";

export const LandingPageTheme = createTheme({
    breakpoints: {
        values: {
            defaultMobileSize: 0,
            smallMobileSize: 480,
            mediumMobileSize: 600,
            defaultWebSize: 768,
            smallWebSize: 992,
            mediumWebSize: 1200,
            largeWebSize: 1400,
            wideWebSize: 2400
        },
    },

    palette:{
        primary:{
            main: '#3c44fb',
            secondary: '#417ff3'
        },

        success:{
            main: '#4FA96D'
        },
        secondary:{
            main: '#B3B3B3'
        },

            link: {
            main: '#0D99FF'
        }
    
    },
    typography: {
        fontFamily: 'Nunito Sans, sans-serif',
    },

    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#0D99FF',
                    textDecorationColor: '#0D99FF', // Añade esta línea
                },
            },
        },
    },

})