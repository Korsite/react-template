import {Box, Grid, useTheme} from "@mui/material";
import {LogoLandingPage} from '../../../assets/LandingPage/Index.js'
import {CirculosDeServicios} from "./CirculosDeServicios.jsx";
import {CajitaAmarilla} from "../../UtilComponents/Index.js";
import {
    TypographyLargeText,
    TypographySmallTitle
} from "../../Theme/index.js";

/**
 * Despliega la primera vista que tiene el usuario al ingresar a la aplicación.
 * @returns {JSX.Element}
 * @constructor
 */

export const LandingPage = () => {

    const theme = useTheme();

    return (
        <>
            <Box
                backgroundColor='black'
                sx={{
                    height: "40rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    [theme.breakpoints.up('smallMobileSize')]: {
                        height: "35rem",
                    },
                    [theme.breakpoints.up('defaultWebSize')]: {
                        display: "none"
                    }
                }}
            >
                <Grid container
                      sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
                >
                    <Grid item defaultMobileSize={12} mt={2}
                          sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <TypographyLargeText sx={{color: 'white'}}>
                            Lorem ipsum dolor sit amet, consectetur.
                        </TypographyLargeText>
                    </Grid>

                    <Grid item defaultMobileSize={10} mt={2} mb={0.5}>
                        <CirculosDeServicios/>
                    </Grid>

                    <Grid item defaultMobileSize={12}
                          sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <TypographySmallTitle sx={{color: 'white'}}>
                            Lorem ipsum dolor sit amet, consectetur.
                        </TypographySmallTitle>
                    </Grid>

                    <Grid item defaultMobileSize={12} mt='0.5rem'
                          sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <CajitaAmarilla
                            sx={{width: '18rem', height: '0.7rem'}}
                            animacionDeAnimateCss='animate__slideInLeft'
                        />
                    </Grid>

                </Grid>

            </Box>

            <Box
                sx={{
                    display: "none",
                    [theme.breakpoints.up('defaultWebSize')]: {
                        display: "block"
                    }
                }}
            >
                <Box className="d-flex justify-content-center py-5"
                     backgroundColor="black"
                >
                    <img src={LogoLandingPage} alt="Logo de LandingPage" className="w-50 my-4 py-3"/>
                </Box>

                <Grid container
                      sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
                >

                    <Grid item defaultMobileSize={12} mt={2}
                          sx={{
                              display: 'flex', justifyContent: 'center', alignItems: 'center',
                              [theme.breakpoints.up('defaultWebSize')]: {
                                  marginTop: '3rem',
                                  marginBottom: '1rem'
                              }
                          }}
                    >
                        <TypographyLargeText
                            sx={{
                                color: 'white',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    color: "black",
                                }
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur.
                        </TypographyLargeText>
                    </Grid>

                    <Grid item defaultMobileSize={10} mt={2} mb={0.5}>
                        <CirculosDeServicios/>
                    </Grid>

                    <Grid item defaultMobileSize={12}
                          sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <TypographySmallTitle
                            sx={{
                                color: 'white',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    color: "black",
                                    fontWeight: "bold",
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    marginTop: '1rem'
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    marginTop: '1.5rem'
                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    marginTop: '2rem'
                                }
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur.
                        </TypographySmallTitle>
                    </Grid>

                    <Grid item defaultMobileSize={12} mt='0.5rem'
                          sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <CajitaAmarilla
                            sx={{
                                width: '26rem', height: '0.7rem',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: '30rem',
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    width: '34rem',
                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    width: '37rem',
                                },
                                [theme.breakpoints.up('wideWebSize')]: {
                                    width: '35rem',
                                    height: '1.5rem'
                                }
                            }}
                            animacionDeAnimateCss='animate__slideInLeft'
                        />

                    </Grid>


                </Grid>

            </Box>
        </>
    );
};
