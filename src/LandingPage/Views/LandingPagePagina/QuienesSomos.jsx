import {Grid, Box} from "@mui/material";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import {GifDeUbicacion, ImagenDe4Personas, LogoAColor} from '../../../assets/LandingPage/Index.js';
import {CajitaAmarilla} from "../../UtilComponents/Index.js";
import {TypographyMediumText, TypographyMediumTitle, TypographySmallTitle} from "../../Theme/index.js";
import {useTheme} from "@mui/material";

const estiloCentrado = {display: 'flex', justifyContent: 'center', alignItems: 'center'}

// este ancho solo aplica para este componente
const anchoDeLasCajitasAmarillas = '10rem';

export const QuienesSomos = () => {

    const theme = useTheme();

    return (
        <>
            <Grid container mb={3}>

                <Box
                    margin={"0 auto"}
                    sx={{
                        [theme.breakpoints.up('defaultWebSize')]: {
                            width: "90%",
                            height: "9rem",
                            display: "flex",
                            justifyContent: "space-evenly",
                            marginTop: '2rem',
                            marginBottom: "2rem",
                            // backgroundColor: "blue"
                        },
                    }}
                >
                    <Grid
                        mt='2rem'
                        item
                        sx={{
                            width: '100%',
                            paddingLeft: '5rem',
                            paddingRight: '5rem',
                            backgroundImage: `url(${LogoAColor})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            height: '5rem',
                            [theme.breakpoints.up('smallMobileSize')]: {
                                height: '7rem',
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                height: '9rem',
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                // backgroundColor: "green",
                                backgroundImage: `url(${LogoAColor})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                marginTop: '0',
                                width: '40rem',
                            },
                            [theme.breakpoints.up('smallWebSize')]: {
                                width: '50rem',
                            },
                            [theme.breakpoints.up('mediumWebSize')]: {
                                width: '60rem',
                            },
                            [theme.breakpoints.up('largeWebSize')]: {
                                width: '70rem',
                            }
                        }}
                    >
                        {/* <img src={LogoAColor} /> */}
                    </Grid>
                    <Grid mt='2.5rem' item defaultMobileSize={12}
                          sx={{
                              ...estiloCentrado, paddingLeft: '2rem', paddingRight: '2rem',
                              [theme.breakpoints.up('defaultWebSize')]: {
                                  paddingLeft: '0',
                                  paddingRight: '0',
                                  // backgroundColor: "yellow",
                                  height: '100%',
                                  marginTop: "0",
                                  display: "flex",
                              },
                          }}
                    >
                        <TypographySmallTitle
                            sx={{
                                [theme.breakpoints.up('defaultMobileSize')]: {
                                    width: '22rem',
                                    fontSize: "1.75rem",
                                    // backgroundColor: "red"
                                },
                                [theme.breakpoints.up('smallMobileSize')]: {
                                    width: '37rem',
                                    fontSize: "2.5rem",
                                },
                                [theme.breakpoints.up('mediumMobileSize')]: {
                                    width: '46rem',
                                    fontSize: "3.25rem",
                                },
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    fontWeight: "bold",
                                    // backgroundColor: "red",
                                    textAlign: "right",
                                    width: "100%",
                                    fontSize: "1.8rem",
                                    marginTop: "1rem",
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    fontSize: "2.3rem",
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    fontSize: "2.8rem",
                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    fontSize: "3.3rem",
                                }
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </TypographySmallTitle>
                    </Grid>
                </Box>

                <Box
                    sx={{
                        [theme.breakpoints.up('defaultWebSize')]: {
                            display: "flex",
                            justifyContent: "space-evenly",
                            flexDirection: "row-reverse",
                            marginBottom: "3rem",
                        },
                    }}
                    className="w-100"
                >
                    <Grid item mt='2rem'
                          sx={{
                              position: 'relative',
                              display: 'flex',
                              justifyContent: 'flex-end',
                              paddingTop: '1rem',
                              overflow: 'hidden',
                              width: "100%",
                              [theme.breakpoints.up('defaultWebSize')]: {
                                  height: "16.9rem",
                                  width: "40rem",
                              },
                              [theme.breakpoints.up('mediumWebSize')]: {
                                  height: "23rem",
                                  width: "50rem",
                              },
                              [theme.breakpoints.up('wideWebSize')]: {
                                  height: "40rem",
                                  width: "90rem",
                              },
                          }}>
                        <CajitaAmarilla sx={{
                            position: 'absolute',
                            top: '0.6rem', // Ajusta este valor según sea necesario
                            right: '0', // Asegura que la caja esté alineada a la derecha 
                            width: anchoDeLasCajitasAmarillas,
                            [theme.breakpoints.up('smallMobileSize')]: {
                                width: '15rem',
                                height: '1.5rem',
                                borderRadius: "1rem"
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                width: '20rem',
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                width: '9rem',
                                height: '1.5rem'
                            },
                            [theme.breakpoints.up('wideWebSize')]: {
                                width: '16rem',
                                height: '2.75rem'
                            }
                        }}
                                        animacionDeAnimateCss='animate__fadeInRight'
                        />

                        <Box
                            sx={{
                                [theme.breakpoints.up('wideWebSize')]: {}
                            }}
                        >
                            <img
                                src={ImagenDe4Personas}
                                style={{width: '100%', height: "100%", objectFit: 'contain'}}
                            />
                        </Box>
                    </Grid>
                    <Box
                        sx={{
                            [theme.breakpoints.up('defaultWebSize')]: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                            },
                        }}
                    >
                        <Grid mt='1.5rem' item defaultMobileSize={12} sx={{...estiloCentrado}}>
                            <TypographyMediumTitle>
                                Lorem ipsum dolor.
                            </TypographyMediumTitle>
                        </Grid>
                        <Grid mt='1rem' item
                              sx={{
                                  ...estiloCentrado, paddingLeft: '2rem', paddingRight: '2rem',
                                  [theme.breakpoints.up('defaultWebSize')]: {
                                      textAlign: 'center',
                                  },
                              }}
                        >
                            <TypographyMediumText
                                sx={{
                                    fontWeight: 'bold',
                                    [theme.breakpoints.up('defaultMobileSize')]: {
                                        width: '28rem',
                                    },
                                    [theme.breakpoints.up('smallMobileSize')]: {
                                        width: '43rem',
                                    },
                                    [theme.breakpoints.up('mediumMobileSize')]: {
                                        width: '52rem',
                                    },
                                    [theme.breakpoints.up('defaultWebSize')]: {
                                        width: '50rem',
                                        fontWeight: "300",
                                        // backgroundColor: "orange"
                                    },
                                    [theme.breakpoints.up('smallWebSize')]: {
                                        width: '62rem',
                                    },
                                    [theme.breakpoints.up('mediumWebSize')]: {
                                        width: '72rem',
                                    },
                                    [theme.breakpoints.up('largeWebSize')]: {
                                        width: '85rem',
                                    },
                                    [theme.breakpoints.up('wideWebSize')]: {
                                        width: '150rem',
                                    }
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque distinctio error
                                fugit in quo quod rem. Adipisci amet architecto asperiores cupiditate facere maiores
                                perferendis soluta, tenetur veritatis, voluptas voluptates.
                                <br/> <br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto aut, beatae
                                cumque doloremque esse, et explicabo facere ipsam magnam modi porro possimus quae
                                ratione reiciendis rerum ut! Autem, sit!
                            </TypographyMediumText>
                        </Grid>
                    </Box>
                </Box>

                <Grid item mt='2rem' defaultMobileSize={12}
                      sx={{display: 'flex', justifyContent: 'flex-end', overflow: 'hidden'}}>
                    <CajitaAmarilla
                        sx={{
                            width: anchoDeLasCajitasAmarillas,
                            [theme.breakpoints.up('smallMobileSize')]: {
                                width: '15rem',
                                height: '1.5rem',
                                borderRadius: "1rem"
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                width: '20rem',
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                width: '9rem',
                                height: '1.5rem'
                            },
                            [theme.breakpoints.up('wideWebSize')]: {
                                width: '16rem',
                                height: '2.75rem'
                            }
                        }}
                        animacionDeAnimateCss='animate__fadeInRight'
                    />
                </Grid>

                <Box
                    sx={{
                        [theme.breakpoints.up('defaultMobileSize')]: {
                            margin: "0 auto",
                        },
                        [theme.breakpoints.up('defaultWebSize')]: {
                            display: "flex",
                            justifyContent: "space-evenly",
                            flexDirection: "row-reverse",
                            width: "100%",
                        },
                    }}
                >
                    <Box
                        sx={{
                            [theme.breakpoints.up('wideWebSize')]: {
                                // backgroundColor: "red",
                                width: "90rem"
                            },
                        }}
                    >
                        <Grid item
                              sx={{
                                  ...estiloCentrado,
                                  width: "100%",
                                  [theme.breakpoints.up('defaultWebSize')]: {
                                      paddingRight: "5rem",
                                      width: "100%"
                                  },
                                  [theme.breakpoints.up('smallWebSize')]: {
                                      paddingRight: "7rem",
                                  },
                                  [theme.breakpoints.up('wideWebSize')]: {
                                      paddingRight: "0rem",
                                  },
                              }}
                        >
                            <Box
                                sx={{
                                    height: "18rem",
                                    width: "21rem",
                                    [theme.breakpoints.up('smallWebSize')]: {
                                        height: "23rem",
                                        width: "26rem",
                                    },
                                    [theme.breakpoints.up('wideWebSize')]: {
                                        height: "40rem",
                                        width: "45rem",
                                    }
                                }}
                            >
                                <img
                                    height='100%'
                                    width='100%'
                                    src={GifDeUbicacion}
                                />
                            </Box>
                        </Grid>
                        <Grid item mt='1rem' defaultMobileSize={12}
                              sx={{
                                  display: 'flex', justifyContent: 'flex-start', overflow: 'hidden',
                              }}
                        >
                            <CajitaAmarilla
                                sx={{
                                    width: anchoDeLasCajitasAmarillas,
                                    [theme.breakpoints.up('smallMobileSize')]: {
                                        width: '15rem',
                                        height: '1.5rem',
                                        borderRadius: "1rem"
                                    },
                                    [theme.breakpoints.up('mediumMobileSize')]: {
                                        width: '20rem',
                                    },
                                    [theme.breakpoints.up('defaultWebSize')]: {
                                        width: '9rem',
                                        height: '1.5rem'
                                    },
                                    [theme.breakpoints.up('mediumWebSize')]: {
                                        marginTop: "2rem"
                                    },
                                    [theme.breakpoints.up('wideWebSize')]: {
                                        width: '16rem',
                                        height: '2.75rem'
                                    }
                                }}
                                animacionDeAnimateCss='animate__fadeInLeft'
                            />
                        </Grid>
                    </Box>

                    <Box
                        sx={{
                            [theme.breakpoints.up('defaultWebSize')]: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                            },
                            [theme.breakpoints.up('mediumWebSize')]: {
                                marginRight: "6rem",
                            }
                        }}
                    >
                        <Grid mt='1rem' item defaultMobileSize={12} sx={{...estiloCentrado}}>
                            <TypographyMediumTitle>
                                Lorem ipsum dolor sit amet.
                                <br/>
                                Lorem ipsum dolor sit.
                            </TypographyMediumTitle>
                        </Grid>
                        <Grid mt='1rem' item defaultMobileSize={12}
                              sx={{
                                  ...estiloCentrado,
                                  [theme.breakpoints.up('defaultWebSize')]: {
                                      marginBottom: '1.5rem',
                                  },
                              }}
                        >
                            <AccessibilityIcon
                                sx={{
                                    fontSize: '3rem',
                                    [theme.breakpoints.up('smallWebSize')]: {
                                        fontSize: '4rem',
                                    },
                                    [theme.breakpoints.up('wideWebSize')]: {
                                        fontSize: "7rem"
                                    }
                                }}
                            />
                        </Grid>
                        <Grid mt='1rem' mb='1rem' item
                              sx={{
                                  ...estiloCentrado, paddingLeft: '2rem', paddingRight: '2rem', margin: "0 auto",
                                  [theme.breakpoints.up('defaultWebSize')]: {
                                      textAlign: 'center',
                                  },
                              }}
                        >
                            <TypographyMediumText
                                sx={{
                                    fontWeight: 'bold',
                                    [theme.breakpoints.up('defaultMobileSize')]: {
                                        width: '28rem',
                                    },
                                    [theme.breakpoints.up('smallMobileSize')]: {
                                        width: '43rem',
                                    },
                                    [theme.breakpoints.up('mediumMobileSize')]: {
                                        width: '52rem',
                                    },
                                    [theme.breakpoints.up('defaultWebSize')]: {
                                        fontWeight: '300',
                                        width: '46rem',
                                    },
                                    [theme.breakpoints.up('smallWebSize')]: {
                                        width: '55rem',
                                    },
                                    [theme.breakpoints.up('mediumWebSize')]: {
                                        width: '62rem',
                                    },
                                    [theme.breakpoints.up('largeWebSize')]: {
                                        width: '75rem',
                                    },
                                    [theme.breakpoints.up('wideWebSize')]: {
                                        width: '140rem',
                                    }
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloribus enim
                                facilis iste laboriosam magnam numquam, placeat quam quis quo quod repudiandae saepe
                                velit, vitae?
                            </TypographyMediumText>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}
