import {ModalLayout} from "../../Layout/Index.js";
import {Switch, Button, Box, Grid} from "@mui/material";
import {useContext} from "react";
import {ModalContext} from "../../Context/Index.js";
import {useSwitch} from "../../Hooks/useSwitch.js";
import PropTypes from "prop-types";
import {TypographySmallText,} from "../../Theme/index.js";

/**
 * TODO buscar la manera de que el componente switch tenga el botón negro como aparece en la HU
 * @returns {JSX.Element}
 * @constructor
 */
export const AdministradorDeCookiesModal = () => {
    const {mostrarAdministradorDeCookiesModal} = useContext(ModalContext);

    const initialForm = {
        primerChecked: false,
        segundoChecked: false,
        tercerChecked: false
    }

    const {
        primerChecked,
        segundoChecked,
        tercerChecked,
        onInputChange,
        onResetState,
        onAcceptAll
    } = useSwitch(initialForm)

    return (
        <ModalLayout
            titulo={<Titulo/>}
            cuerpo={
                <Cuerpo
                    primerChecked={primerChecked}
                    segundoChecked={segundoChecked}
                    tercerChecked={tercerChecked}
                    onInputChange={onInputChange}
                />
            }
            mostrarModal={mostrarAdministradorDeCookiesModal}
            footer={
                <Footer
                    onAcceptAll={onAcceptAll}
                    onResetState={onResetState}
                />
            }
        />
    )
}

const Titulo = () => {
    return (
        <Grid container sx={{marginLeft: 1}}>
            <Grid item defaultMobileSize={12}>
                <h2 className='fs-1'>Administrador de Cookies</h2>
            </Grid>
        </Grid>
    )
}

const Cuerpo =
    ({
         primerChecked,
         segundoChecked,
         tercerChecked,
         onInputChange,
     }) => {
        const {setMostrarAdministradorDeCookiesModal, setMostrarPoliticasDeUsoDeCookiesModal} = useContext(ModalContext)
        const estiloParaTextoDeSwitches = 'fs-5 text-nowrap fw-semibold'

        return (
            <>
                <Box sx={{marginLeft: 1, marginRight: 1}}>
                    <Grid container defaultMobileSize={12}>
                        <Grid item defaultMobileSize={12}>
                            <TypographySmallText sx={{textAlign: 'start'}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consectetur
                                deleniti dolorem, ea esse illum impedit in incidunt ipsam itaque nemo obcaecati
                                praesentium provident quaerat, quo quod quos sit. Adipisci, aperiam aut consectetur cum
                                ratione reiciendis, repellat rerum saepe veniam veritatis vitae voluptatibus? Aperiam
                                cumque doloremque doloribus eos, illum laudantium maiores mollitia possimus quasi qui
                                tempore voluptates.&nbsp;
                                <a
                                    href=''
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setMostrarAdministradorDeCookiesModal(false)
                                        setMostrarPoliticasDeUsoDeCookiesModal(true)
                                    }}
                                    style={{color: 'blue', textDecoration: 'none'}}
                                > Política de Cookies
                                </a>
                            </TypographySmallText>
                        </Grid>

                        <Grid container sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Grid item defaultMobileSize={10}>
                                <p className={estiloParaTextoDeSwitches}>Lorem ipsum dolor sit amet.</p>
                            </Grid>
                            <Grid item defaultMobileSize={2}>
                                <Switch
                                    checked={primerChecked}
                                    onClick={() => onInputChange({name: 'primerChecked', value: !primerChecked})}
                                />
                            </Grid>

                            <Grid item defaultMobileSize={10}>
                                <p className={estiloParaTextoDeSwitches}>Lorem ipsum dolor sit amet.</p>
                            </Grid>
                            <Grid item defaultMobileSize={2}>
                                <Switch
                                    checked={segundoChecked}
                                    onClick={() => onInputChange({name: 'segundoChecked', value: !segundoChecked})}
                                />
                            </Grid>

                            <Grid item defaultMobileSize={10}>
                                <p className={estiloParaTextoDeSwitches}>Lorem ipsum dolor sit amet.</p>
                            </Grid>
                            <Grid item defaultMobileSize={2}>
                                <Switch
                                    checked={tercerChecked}
                                    onClick={() => onInputChange({name: 'tercerChecked', value: !tercerChecked})}
                                />
                            </Grid>

                            <Grid item defaultMobileSize={8.5}>
                                <p className={estiloParaTextoDeSwitches}>Lorem ipsum dolor sit amet.</p>
                            </Grid>
                            <Grid item defaultMobileSize={3.5}>
                                <p className={estiloParaTextoDeSwitches}>Lorem ipsum dolor.</p>

                            </Grid>

                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
Cuerpo.propTypes = {
    primerChecked: PropTypes.bool.isRequired,
    segundoChecked: PropTypes.bool.isRequired,
    tercerChecked: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired
}

const Footer = ({onResetState, onAcceptAll}) => {

    const {setMostrarAdministradorDeCookiesModal} = useContext(ModalContext)
    return (
        <>
            <Box>
                <Grid container spacing={1}
                      sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                      }}
                >
                    <Grid item defaultMobileSize={6}>
                        <Button
                            fullWidth
                            variant='contained'
                            color='secondary'
                            size='small'
                            className='text-black fw-bolder text-nowrap'
                            onClick={onAcceptAll}

                        >
                            Aceptar todas
                        </Button>
                    </Grid>

                    <Grid item defaultMobileSize={6}>
                        <Button
                            fullWidth
                            variant='contained'
                            color='secondary'
                            size='small'
                            className='text-black fw-bolder text-nowrap'
                            onClick={onResetState}
                        >
                            Rechazar todas
                        </Button>
                    </Grid>

                    <Grid item mt={1} defaultMobileSize={12}>
                        <Button
                            fullWidth
                            variant='contained'
                            color='success'
                            onClick={() => setMostrarAdministradorDeCookiesModal(false)}
                            size='small'
                            className='text-white fs-6'
                        >
                            Guardar cambios
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

Footer.propTypes = {
    onResetState: PropTypes.func.isRequired,
    onAcceptAll: PropTypes.func.isRequired
}