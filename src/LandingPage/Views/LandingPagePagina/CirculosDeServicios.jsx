/**
 * Este componente despliega los 9 circulos de servicios en la pagina de LandingPage
 * [Atencion medica, Salud y belleza, Alimentos y bebeidas]
 * [Diversion y entretenimiento, Servicios profesionales, Servicios vehiculares]
 * [Mantenimiento y construccion, educacion y capacitacion, comercios - mayoreo y menuddeo]
 * @returns {JSX.Element}
 * @constructor
 */
import {
    IconoAtencionMedica
} from "../../../assets/LandingPage/Index.js";
import {Box, Grid, ImageListItem, ImageListItemBar, useTheme} from "@mui/material";
import {TypographySmallText} from "../../Theme/index.js";
import {Fragment, useContext} from "react";
import {FormContext} from "../../Context/Index.js";
import {animateScroll as scroll} from 'react-scroll';

export const CirculosDeServicios = () => {
    const theme = useTheme();
    const {formReferencia} = useContext(FormContext);
    // Funcion para hacer scroll al formulario
    const handleIconClick = () => {
        const top = formReferencia.current.offsetTop - 60;
        scroll.scrollTo(top, {duration: 500, smooth: 'easyInOutQuint'});
    }
    return (
        <>
            <Grid container
                  justifyContent='center'
                  sx={{
                      [theme.breakpoints.up('defaultWebSize')]: {
                          //   backgroundColor: "red",
                          rowGap: "2rem",
                      },
                      [theme.breakpoints.up('mediumWebSize')]: {
                          rowGap: "4rem",
                      },
                  }}
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item =>
                        <Fragment key={item.id}>
                            <Grid item defaultMobileSize={4} defaultWebSize={2.4}
                                  sx={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'flex-start',
                                      //   border: "2px solid black",
                                  }}
                                  key={item.id}
                            >
                                <ImageListItem
                                    sx={{
                                        width: '10rem',
                                        height: '5rem',
                                        display: 'flex', // Añade esta línea
                                        flexDirection: 'column', // Añade esta línea
                                        alignItems: 'center', // Añade esta línea
                                    }}
                                    key={item.id}
                                >
                                    <Box
                                        sx={{
                                            width: "4rem",
                                            height: "4rem",
                                            [theme.breakpoints.up('defaultWebSize')]: {
                                                width: "10rem",
                                                height: "10rem",
                                            },
                                            [theme.breakpoints.up('smallWebSize')]: {
                                                width: "10rem",
                                                height: "10rem",
                                            },
                                            [theme.breakpoints.up('mediumWebSize')]: {
                                                width: "10rem",
                                                height: "10rem",
                                            },
                                            [theme.breakpoints.up('largeWebSize')]: {
                                                width: "12rem",
                                                height: "12rem",
                                            },
                                            [theme.breakpoints.up('wideWebSize')]: {
                                                width: "18rem",
                                                height: "18rem",
                                            }
                                        }}
                                    >
                                        <img
                                            src={IconoAtencionMedica}
                                            alt={item.nombre}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                transition: 'transform 0.3s ease-in-out', // Añade esta línea

                                                cursor: 'pointer', // Añade esta línea
                                            }}
                                            onClick={() => handleIconClick()}
                                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'} // Añade esta línea
                                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} // Añade esta línea
                                        />
                                    </Box>
                                    <Box
                                        // style={{ width: '5rem  ', height: '5rem' }}
                                        sx={{
                                            width: '8rem',
                                            [theme.breakpoints.up('smallMobileSize')]: {
                                                width: '12rem',
                                            },
                                            [theme.breakpoints.up('mediumMobileSize')]: {
                                                width: '15rem',
                                            },
                                            [theme.breakpoints.up('defaultWebSize')]: {
                                                width: '10.4rem',
                                            },
                                            [theme.breakpoints.up('smallWebSize')]: {
                                                width: '13rem',
                                            },
                                            [theme.breakpoints.up('mediumWebSize')]: {
                                                width: '15rem',
                                            },
                                            [theme.breakpoints.up('wideWebSize')]: {
                                                width: '23rem',
                                            }
                                        }}
                                    >
                                        <ImageListItemBar
                                            title={
                                                <TypographySmallText
                                                    sx={{
                                                        whiteSpace: 'normal', // Permite que el texto se divida en varias líneas
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        wordWrap: 'break-word', // Asegura que las palabras largas se dividan
                                                        [theme.breakpoints.up('defaultWebSize')]: {
                                                            color: "black",
                                                            fontSize: "1.4rem",
                                                        },
                                                        [theme.breakpoints.up('smallWebSize')]: {
                                                            fontSize: "1.7rem",
                                                        },
                                                        [theme.breakpoints.up('mediumWebSize')]: {
                                                            fontSize: "2rem",
                                                        },
                                                        [theme.breakpoints.up('wideWebSize')]: {
                                                            fontSize: "3rem",
                                                        }
                                                    }}
                                                >
                                                    Lorem ipsum dolor.
                                                </TypographySmallText>
                                            }
                                            position='below'
                                        />
                                    </Box>
                                </ImageListItem>
                            </Grid>
                        </Fragment>
                    )
                }
            </Grid>
        </>
    )
}
