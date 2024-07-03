
import {useContext} from 'react';
import {Box, Grid, Link, useTheme} from '@mui/material';
import {BreakpointsContext, ModalContext} from "../Context/Index.js";
import {PoweredBy} from '../../assets/Footer/Index.js';
import {ListaDeRedesSociales} from "./Index.js";
import {TypographyLargeText, TypographySmallText} from "../Theme/index.js";
import './FooterStyles.css';
import PropTypes from "prop-types";

const overrideSizes = {
    defaultMobileSize: '1rem',
    defaultWebSize: '1.2rem',
    smallWebSize: '1.4rem',
    mediumWebSize: "1.6rem",
    largeWebSize: "1.8rem",
    wideWebSize: "3rem"
}
export const Footer = () => {
    const lugarDeTrabajoEnGoogleMaps =
        'https://www.google.com.mx/maps/place/M%C3%A9xico/@23.1925836,-113.2559513,5z/data=!3m1!4b1!4m6!3m5!1s0x84043a3b88685353:0xed64b4be6b099811!8m2!3d23.634501!4d-102.552784!16zL20vMGI5MF9y?entry=ttu'

        const {setMostrarDerechosReservadosModal} = useContext(ModalContext);
    const theme = useTheme()
    
            const {
        isDownMediumMobileSize,
        isUpDefaultWebSize,
        isUpMediumWebSize
    } = useContext(BreakpointsContext);

    const columnSpacing = isUpMediumWebSize ? 17 : isDownMediumMobileSize ? 0 : 10;
        
        return (
        <Grid container maxWidth
              sx={{bgcolor: 'black', color: 'white', py: 3, display: 'flex', justifyContent: 'center'}}>
            <Grid item
                  defaultMobileSize={11}
                  sx={{
                      width: {
                          defaultMobileSize: "30.4rem",
                          smallMobileSize: "44rem",
                          mediumMobileSize: "54rem",
                      },
                      margin: "0 auto"
                  }}
            >
                <TypographyLargeText sx={{color: 'white'}} overrideSizes={{
                    // mobile sizes
                    defaultMobileSize: '1.2rem',
                    smallMobileSize: '1.7rem',
                    mediumMobileSize: '2.1rem',

                    // web sizes
                    defaultWebSize: '2.2rem',
                    smallWebSize: '2.7rem',
                    mediumWebSize: '3rem',
                    largeWebSize: '3.5rem',
                    wideWebSize: '5.5rem'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, non.
                </TypographyLargeText>
            </Grid>

            <Grid item mt={3} defaultMobileSize={12}
                  sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ListaDeRedesSociales/>
            </Grid>

            {
                // Las unicas diferencia entre un componente y el otro, es el orden los grid items y algunos estilos
                isUpDefaultWebSize ?
                    <WebFootFooter
                        lugarDeTrabajoEnGoogleMaps={lugarDeTrabajoEnGoogleMaps}
                        setMostrarDerechosReservadosModal={setMostrarDerechosReservadosModal}
                        theme={theme}
                        columnSpacing={columnSpacing}
                        overrideSizes={overrideSizes}
                    />
                    :
                    <MobileFootFooter
                        lugarDeTrabajoEnGoogleMaps={lugarDeTrabajoEnGoogleMaps}
                        setMostrarDerechosReservadosModal={setMostrarDerechosReservadosModal}
                        theme={theme}
                        overrideSizes={overrideSizes}
                    />
            }

        </Grid>
    );
    }

/**
 * Este componente incluye la información de la dirección de la empresa, los derechos reservados y la firma de Código Geek.
 * Solo se renderiza si está por debajo de 768 píxeles, es decir en dispositivos móviles (mediumMobileSize para abajo)
 * @returns {JSX.Element}
 * @constructor
 */
const MobileFootFooter =
    ({
         lugarDeTrabajoEnGoogleMaps,
         setMostrarDerechosReservadosModal,
         theme,
         overrideSizes
     }) => {

        const {
            isDownSmallMobile
        } = useContext(BreakpointsContext)
        const tamanoDeLaFirma = isDownSmallMobile ? '10rem' : '13rem';

        return (
            <Grid container
                  rowSpacing={2}
                  mt={0.5}
                  sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center'
                  }}
            >
                <Grid item defaultMobileSize={11}>
                    <Link variant='body2' href={lugarDeTrabajoEnGoogleMaps} target="_blank">
                        <TypographySmallText
                            sx={{color: theme.palette.link.main}}
                            overrideSizes={overrideSizes}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, repudiandae.
                        </TypographySmallText>
                    </Link>
                </Grid>

                <Grid item defaultMobileSize={12} display='flex' justifyContent='center'>
                    <Link href='#' onClick={(event) => {
                        event.preventDefault();
                        setMostrarDerechosReservadosModal(true);
                    }}>
                        <TypographySmallText
                            overrideSizes={overrideSizes}
                            sx={{color: theme.palette.link.main, textAlign: 'center'}}
                        >
                            Todos los derechos reservados
                        </TypographySmallText>
                    </Link>

                    <Box width='4.5rem'/>

                    <Link href="https://es.react.dev/" target="_blank">
                        <img
                            className='Img-Color-PoweredBy'
                            src={PoweredBy}
                            alt='react'
                            style={{width: tamanoDeLaFirma}} // Controla el tamaño de la imagen
                        />
                    </Link>
                </Grid>
            </Grid>
        )
    }

MobileFootFooter.propTypes = {
    lugarDeTrabajoEnGoogleMaps: PropTypes.string.isRequired,
    setMostrarDerechosReservadosModal: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    overrideSizes: PropTypes.object.isRequired,
}

/**
 * Este componente incluye la información de la dirección de la empresa, los derechos reservados y la firma de Código Geek.
 * Solo se renderiza si está por arriba de 768 píxeles, es decir en tamaño web (defaultWebSize para arriba)
 * @returns {JSX.Element}
 * @constructor
 */
const WebFootFooter =
    ({
         lugarDeTrabajoEnGoogleMaps,
         setMostrarDerechosReservadosModal,
         theme,
         overrideSizes
     }) => {
        const {
            isUpWideWebSize
        } = useContext(BreakpointsContext)
        const tamanoDeLaFirma = isUpWideWebSize ? '25rem' : '15rem';
        return (
            <Grid container
                  rowSpacing={2}
                  mt={0.5}
                  mb={3}
                  sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'center'
                  }}
            >
                <Grid item defaultWebSize={3.5}>
                    <Link href='#' onClick={(event) => {
                        event.preventDefault();
                        setMostrarDerechosReservadosModal(true);
                    }}>
                        <TypographySmallText
                            overrideSizes={overrideSizes}
                            sx={{color: theme.palette.link.main, textAlign: 'center'}}
                        >
                            Todos los derechos reservados
                        </TypographySmallText>
                    </Link>
                </Grid>

                <Grid item defaultWebSize={5}>
                    <Link variant='body2' href={lugarDeTrabajoEnGoogleMaps} target="_blank">
                        <TypographySmallText
                            sx={{color: theme.palette.link.main, noWrap: false}}
                            overrideSizes={overrideSizes}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, repudiandae.
                        </TypographySmallText>
                    </Link>
                </Grid>

                <Grid item defaultWebSize={3.5}>
                    <Link href="https://es.react.dev/" target="_blank">
                        <img
                            className='Img-Color-PoweredBy'
                            src={PoweredBy}
                            alt='react'
                            style={{width: tamanoDeLaFirma}} // Controla el tamaño de la imagen
                        />
                    </Link>
                </Grid>
            </Grid>
        )
    }

WebFootFooter.propTypes = {
    lugarDeTrabajoEnGoogleMaps: PropTypes.string.isRequired,
    setMostrarDerechosReservadosModal: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    columnSpacing: PropTypes.number.isRequired,
    overrideSizes: PropTypes.object.isRequired,
}