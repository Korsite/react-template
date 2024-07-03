import {useContext} from "react";
import {Box, Grid, Stack, Button, useTheme} from '@mui/material';
import * as Icons from "../../../assets/RedesSociales/Index.js";
import {Link} from "react-router-dom";
import {FormContext, BreakpointsContext} from "../../Context/Index.js";
import {rrss} from "../../Data/Index.js";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {TypographySmallTitle, TypographyMediumTitle, TypographyMediumText} from '../../Theme/index.js';
import {ListaDeRedesSociales} from "../../Components/Index.js";
import {ModalContext} from "../../Context/Index.js";

const FormTerminado = () => {

    const {vistaFinal, setVistaFinal} = useContext(FormContext);
    const {isWeb} = useContext(BreakpointsContext);

    const {formReferencia} = useContext(FormContext);

    // useEffect(() => {
    //     if(vistaFinal === "true" && formTerminado === 'true') {
    //         localStorage.setItem('vistaFinal', 'false');
    //     }

    //     const handleStorageChange = () => {
    //         setVistaFinal(localStorage.getItem('vistaFinal') || 'false');
    //     };

    //     window.addEventListener('storage', handleStorageChange);

    //     return () => {
    //         window.removeEventListener('storage', handleStorageChange);
    //     };
    // }, [setVistaFinal]);

    const handleRestart = () => {
        localStorage.setItem('vistaFinal', 'false');
        setVistaFinal('false');
    };

    const theme = useTheme();

    const {setMostrarAvisoDePrivacidadModal} = useContext(ModalContext);

    return (
        <div ref={formReferencia}>
            {vistaFinal === 'true'

                ?
                <>
                    <Box
                        height={475}
                        width={250}
                        margin={0 + ' auto'}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        mt={5}
                        sx={{
                            [theme.breakpoints.up('smallMobileSize')]: {
                                height: "58rem",
                                width: "37rem",
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                height: "66rem",
                                width: "45rem",
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                height: "45rem",
                                width: "57.5rem",
                                // backgroundColor: "red",
                            },
                            [theme.breakpoints.up('smallWebSize')]: {
                                height: "50rem",
                            },
                            [theme.breakpoints.up('largeWebSize')]: {
                                height: "55rem",
                            },
                            [theme.breakpoints.up('wideWebSize')]: {
                                height: "100rem",
                                width: "140rem"
                            }
                        }}
                    >
                        <TypographyMediumText
                            sx={{
                                fontWeight: 'bold!important',
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    fontSize: '2rem',
                                    marginBottom: "0"
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    fontSize: '2.5rem',
                                },
                                [theme.breakpoints.up('wideWebSize')]: {
                                    fontSize: '5rem',
                                }
                            }}
                        >
                            Lorem ipsum dolor sit amet.
                        </TypographyMediumText>

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: "53rem"
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    width: "67rem"
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    width: "77rem"
                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    width: "90rem"
                                },
                                [theme.breakpoints.up('wideWebSize')]: {
                                    width: "160rem"
                                }
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias fuga hic, illo iste
                            recusandae sit.
                        </TypographyMediumText>
                        <TypographyMediumText
                            sx={{
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    width: "77rem"
                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    width: "90rem"
                                },
                                [theme.breakpoints.up('wideWebSize')]: {
                                    width: "160rem"
                                }
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate excepturi
                            incidunt iure, maxime qui.
                        </TypographyMediumText>

                        <Box
                            sx={{
                                // backgroundColor: "red",
                                width: "75%",
                                [theme.breakpoints.up('mediumMobileSize')]: {
                                    width: "85%"
                                },
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: "100%"
                                }
                            }}
                        >
                            <TypographyMediumText
                                sx={{
                                    marginTop: '1.5rem',
                                    marginBottom: '1.5rem',
                                    fontWeight: 'bold!important',
                                    [theme.breakpoints.up('defaultWebSize')]: {}
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </TypographyMediumText>
                        </Box>


                        <Grid container spacing={2} alignItems="center" justifyContent={"center"}
                              sx={{
                                  marginLeft: ".05rem"
                              }}
                        >
                            {
                                isWeb
                                    ?
                                    <>
                                        <Box mt={3}>
                                            <ListaDeRedesSociales/>
                                        </Box>
                                    </>
                                    :
                                    <>
                                        <Grid item defaultMobileSize={3}>
                                            <Link to={rrss.facebook} target="_blank" rel="noopener noreferrer">
                                                <img className="w-75" src={Icons.FacebookIcon} alt="Facebook"/>
                                            </Link>
                                        </Grid>

                                        <Grid item defaultMobileSize={3}>
                                            <Link to={rrss.instagram} target="_blank" rel="noopener noreferrer">
                                                <img className="w-75" src={Icons.InstagramIcon} alt="Instagram"/>
                                            </Link>
                                        </Grid>

                                        <Grid item defaultMobileSize={3}>
                                            <Link to={rrss.tiktok} target="_blank" rel="noopener noreferrer">
                                                <img className="w-75" src={Icons.TikTokIcon} alt="TikTok"/>
                                            </Link>
                                        </Grid>

                                        <Grid item defaultMobileSize={3}>
                                            <Link to={rrss.twitter} target="_blank" rel="noopener noreferrer">
                                                <img className="w-75" src={Icons.TwitterIcon} alt="Twitter"/>
                                            </Link>
                                        </Grid>

                                        <Grid item defaultMobileSize={3}>
                                            <Link to={rrss.youtube} target="_blank" rel="noopener noreferrer">
                                                <img className="w-75" src={Icons.YouTubeIcon} alt="YouTube"/>
                                            </Link>
                                        </Grid>

                                        <Grid item defaultMobileSize={3}>
                                            <Link to={rrss.linkedin} target="_blank" rel="noopener noreferrer">
                                                <img className="w-75" src={Icons.LinkedInIcon} alt="LinkedIn"/>
                                            </Link>
                                        </Grid>

                                        <Grid item defaultMobileSize={3}>
                                            <Link to={isWeb ? rrss.whatsappWeb : rrss.whatsappMobile} target="_blank"
                                                  rel="noopener noreferrer">
                                                <img className="w-75" src={Icons.WhatsappIcon} alt="WhatsApp"/>
                                            </Link>
                                        </Grid>
                                    </>
                            }

                        </Grid>

                        <Link to={isWeb ? rrss.whatsappWeb : rrss.whatsappMobile} target="_blank"
                              rel="noopener noreferrer" style={{textDecoration: "none", color: "black"}}>
                            <TypographyMediumText
                                sx={{
                                    marginTop: '1.5rem',
                                    fontWeight: 'bold!important'
                                }}
                            >
                                Lorem ipsum dolor.
                            </TypographyMediumText>
                        </Link>

                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            mt={2}
                        >
                            <Link to="/">
                                <Button
                                    variant='contained'
                                    size='large'
                                    onClick={handleRestart}
                                    sx={{
                                        [theme.breakpoints.up('smallMobileSize')]: {
                                            width: "17.5rem",
                                            height: "4rem",
                                            fontSize: "1.5rem"
                                        },
                                        [theme.breakpoints.up('mediumMobileSize')]: {
                                            width: "20rem",
                                            height: "4rem",
                                            fontSize: "1.5rem"
                                        },
                                        [theme.breakpoints.up('defaultWebSize')]: {
                                            width: "17.5rem",
                                            height: "4rem",
                                            fontSize: "1.2rem"
                                        }
                                    }}
                                >
                                    Volver al inicio
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                </>

                :
                <>
                    <Box
                        className="bg-dark bg-opacity-50 w-100 py-3 mt-5 d-flex flex-column justify-center align-items-center"
                    >
                        <TypographyMediumTitle
                            sx={{
                                fontWeight: 'bold!important',
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    color: "white",
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    fontSize: "3rem"
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    fontSize: "3.5rem"
                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    fontSize: "4rem"
                                },
                                [theme.breakpoints.up('wideWebSize')]: {
                                    fontSize: "7.5rem"
                                }
                            }}
                        >
                            Parece que ya te has registrado.
                        </TypographyMediumTitle>
                        <CheckCircleIcon
                            className="mt-3" color="success"
                            style={{borderRadius: "50%", backgroundColor: "white"}}
                            sx={{
                                width: "6rem", height: "6rem",
                                [theme.breakpoints.up('smallMobileSize')]: {
                                    width: "9rem",
                                    height: "9rem",
                                },
                                [theme.breakpoints.up('mediumMobileSize')]: {
                                    width: "10rem",
                                    height: "10rem",
                                },
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: "5rem",
                                    height: "5rem",
                                },
                                [theme.breakpoints.up('wideWebSize')]: {
                                    width: "13rem",
                                    height: "13rem",
                                },
                            }}
                        />
                        <TypographySmallTitle
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: "500!important",
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    color: "white",
                                    fontWeight: 'bold!important',
                                },
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </TypographySmallTitle>
                    </Box>

                    <Box
                        height={575}
                        width={250}
                        margin={0 + ' auto'}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        mt={3}
                        sx={{
                            [theme.breakpoints.up('smallMobileSize')]: {
                                height: "75rem",
                                width: "37rem",
                            },
                            [theme.breakpoints.up('mediumMobileSize')]: {
                                height: "90rem",
                                width: "47.5rem",
                            },
                            [theme.breakpoints.up('defaultWebSize')]: {
                                height: "52.5rem",
                                width: "40rem",
                                // backgroundColor: "red",
                            },
                            [theme.breakpoints.up('smallWebSize')]: {
                                height: "57.5rem",
                            },
                            [theme.breakpoints.up('mediumWebSize')]: {
                                height: "60rem",
                                width: "45rem"
                            },
                            [theme.breakpoints.up('largeWebSize')]: {
                                height: "65rem",
                                width: "50rem"
                            },
                            [theme.breakpoints.up('wideWebSize')]: {
                                height: "110rem",
                                width: "140rem"
                            }
                        }}
                    >

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold!important',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    fontSize: '2rem',
                                    marginBottom: "0"
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    fontSize: '2.5rem',
                                },
                                [theme.breakpoints.up('wideWebSize')]: {
                                    fontSize: '5rem',
                                }
                            }}
                        >
                            ¡Agradecemos tu confianza!
                        </TypographyMediumText>

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold!important',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: "50rem",
                                    fontWeight: '500!important',
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    width: "62rem"
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    width: "70rem"

                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    width: "85rem"
                                },
                                [theme.breakpoints.up('wideWebSize')]: {
                                    width: "140rem"
                                }
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis delectus dolore
                            molestiae tempore temporibus. At dicta dolorum eaque ex fuga hic incidunt iste laboriosam
                            laborum maiores modi molestiae natus necessitatibus nemo obcaecati, odio odit officia
                            possimus quasi quis ratione, repellendus sapiente sequi sunt voluptate?
                        </TypographyMediumText>

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold!important',
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: "50rem",
                                    fontWeight: '500!important',
                                },
                                [theme.breakpoints.up('smallWebSize')]: {
                                    width: "57rem"
                                },
                                [theme.breakpoints.up('mediumWebSize')]: {
                                    width: "67rem"

                                },
                                [theme.breakpoints.up('largeWebSize')]: {
                                    width: "80rem"
                                },
                                [theme.breakpoints.up('wideWebSize')]: {
                                    width: "150rem"
                                }
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis illum quos
                            rem suscipit tempore?
                        </TypographyMediumText>

                        <Box
                            sx={{
                                // backgroundColor: "red",
                                width: "75%",
                                [theme.breakpoints.up('mediumMobileSize')]: {
                                    width: "85%"
                                },
                                [theme.breakpoints.up('defaultWebSize')]: {
                                    width: "100%"
                                }
                            }}
                        >
                            <TypographyMediumText
                                sx={{
                                    marginTop: '1.5rem',
                                    marginBottom: '1.5rem',
                                    fontWeight: 'bold!important',
                                    [theme.breakpoints.up('defaultWebSize')]: {}
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, repellat?
                            </TypographyMediumText>
                        </Box>

                        <Grid container spacing={2} alignItems="center" justifyContent={"center"}>
                            {isWeb
                                ?
                                <>
                                    <Box mt={3}>
                                        <ListaDeRedesSociales/>
                                    </Box>
                                </>
                                :
                                <>
                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.facebook} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.FacebookIcon} alt="Facebook"/>
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.instagram} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.InstagramIcon} alt="Instagram"/>
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.tiktok} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.TikTokIcon} alt="TikTok"/>
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.twitter} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.TwitterIcon} alt="Twitter"/>
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.youtube} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.YouTubeIcon} alt="YouTube"/>
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={rrss.linkedin} target="_blank" rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.LinkedInIcon} alt="LinkedIn"/>
                                        </Link>
                                    </Grid>

                                    <Grid item defaultMobileSize={3}>
                                        <Link to={isWeb ? rrss.whatsappWeb : rrss.whatsappMobile} target="_blank"
                                              rel="noopener noreferrer">
                                            <img className="w-75" src={Icons.WhatsappIcon} alt="WhatsApp"/>
                                        </Link>
                                    </Grid>
                                </>
                            }
                        </Grid>

                        <TypographyMediumText
                            sx={{
                                marginTop: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold!important'
                            }}
                        >
                            Creo que aún no me he registrado.
                        </TypographyMediumText>

                        <Link to={isWeb ? rrss.whatsappWeb : rrss.whatsappMobile} target="_blank"
                              rel="noopener noreferrer" style={{textDecoration: "none", color: "black"}}>
                            <TypographyMediumText
                                sx={{
                                    marginTop: '1.5rem',
                                    marginBottom: '1rem',
                                    fontWeight: 'bold!important',
                                    cursor: "pointer"
                                }}
                            >
                                ¡Chatear ahora!
                            </TypographyMediumText>
                        </Link>

                        <Link onClick={() => setMostrarAvisoDePrivacidadModal(true)} style={{textDecoration: "none"}}>
                            <TypographyMediumText

                                sx={{
                                    marginTop: '1.5rem',
                                    marginBottom: '1rem',
                                    fontWeight: 'bold!important',
                                    color: "blue",
                                    cursor: "pointer"
                                }}
                            >
                                Ver aviso de privacidad y proteccion de datos.
                            </TypographyMediumText>
                        </Link>
                    </Box>
                </>
            }
        </div>
    );
}

export default FormTerminado;