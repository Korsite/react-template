import {useState, useContext, useEffect} from 'react'

import {
    TextField,
    MenuItem,
    Checkbox,
    Button,
    Grid,
    InputAdornment,
    useTheme,
    Box,
    InputLabel
} from '@mui/material';

import UseFormulario from '../../Hooks/UseFormulario.js';
import {Link} from 'react-router-dom';
import {BreakpointsContext, FormContext} from '../../Context/Index.js';
import BanderaDeMexico from "../../../assets/UnSoloUso/BanderaDeMexico.svg";
import {
    TypographySmallText,
    TypographyMediumText,
    TypographySmallTitle,
    TypographyMediumTitle
} from '../../Theme/index.js';
import {ModalContext} from '../../Context/Index.js';
import {obtenerCategorias, obtenerServicios} from "../../Data/Index.js";

import axios from 'axios';
import {DB_CONNECTION} from '../../../DbConfig.js';

const sxParaLosTypographyDeLosInputLabels = {
    textAlign: 'start',
    marginLeft: '1rem',
}
const overrideSizesParaLosTypographyDeLosInputLabels = {
    defaultMobileSize: '1.5rem',
    smallMobileSize: '1.8rem',
    mediumMobileSize: '2.25rem',
    defaultWebSize: '2.25rem',
    smallWebSize: '2.25rem',
    mediumWebSize: '2.5rem',
    largeWebSize: '2.5rem',
    wideWebSize: '2.5rem'
}

// TODO checar por que manda este error  -> MUI: `children` must be passed when using the `TextField` component with `select`.
function Formulario() {

    const variablesDeFormulario = UseFormulario()

    return (
        <>
            <QueremosConocerte/>

            <Box className="bg-dark pt-3 bg-opacity-25 pb-5 d-flex justify-content-center">

                <Grid container defaultMobileSize={11} className='mx-4 bg-light rounded px-4 pb-4'
                      justifyContent='center'>
                    {/*<PreRegistro {...variablesDeFormulario} />*/}

                    <UbicacionYContacto {...variablesDeFormulario} />

                    <Manifiesto {...variablesDeFormulario} />
                </Grid>
            </Box>

        </>
    )
}

export default Formulario


const QueremosConocerte = () => {

    const {formReferencia} = useContext(FormContext);
    const theme = useTheme();

    return (
        <>
            <Box className="w-100 py-3" ref={formReferencia} backgroundColor='gray'>
                <TypographyMediumTitle>
                    Lorem ipsum dolor sit amet.
                </TypographyMediumTitle>

                <TypographySmallTitle
                    sx={{
                        width: '24rem',
                        margin: "auto",
                        fontWeight: '400!important',
                        marginTop: "1rem",
                        [theme.breakpoints.up('smallMobileSize')]: {
                            width: '37rem'
                        },
                        [theme.breakpoints.up('mediumMobileSize')]: {
                            width: '46rem'
                        },
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolor.
                </TypographySmallTitle>

                <TypographySmallTitle
                    sx={{
                        fontWeight: "bold!important",
                        marginTop: "1rem",
                        [theme.breakpoints.up('defaultWebSize')]: {
                            marginBottom: "1rem",
                        }
                    }}
                >
                    Lorem ipsum dolor sit amet.
                </TypographySmallTitle>
            </Box>
        </>
    )
}

const PreRegistro = (props) => {

    const {
        handleNombre,
        nombre,
        nombreValido,
        nombreTocado,
        handleApellidoPaterno,
        apellidoPaterno,
        apellidoPaternoTocado,
        apellidoPaternoValido,
        handleApellidoMaterno,
        apellidoMaterno,
        apellidoMaternoTocado,
        apellidoMaternoValido,
        genero,
        generoValido,
        handleGenero,
        generoTocado,
        nombreNegocio,
        handleNombreNegocio,
        nombreNegocioTocado,
        nombreNegocioValido,
        servicio,
        handleServicio,
        servicioTocado,
        servicioValido,
        subservicio,
        handleSubservicio,
        subservicioTocado,
        subservicioValido,
        setFkIdCategoriaServicio,
    } = props;
    const {
        theme,
        isUpDefaultWebSize
    } = useContext(BreakpointsContext);

    const sxParaLosInputLabels = {
        marginBottom: isUpDefaultWebSize ? '-1rem' : '-0.5rem'
    }

    const [categoriasArray, setCategoriasArray] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            const categorias = await obtenerCategorias();
            setCategoriasArray(categorias);
        };
        fetchCategorias();
    }, []);

    const idCategoria = categoriasArray.find(categoria => categoria.value === servicio)?.id_categoria;
    // console.log(idCategoria);

    const [idsDeServicios, setIdsDeServicios] = useState([]);

    useEffect(() => {

        if (idCategoria) {
            const fetchIds = async () => {
                const response = await axios.get(`${DB_CONNECTION}/categorias-servicios/${idCategoria}`);
                const data = response.data;

                const nuevosIdsDeServicios = data.map(item => item.fk_id_servicio);

                setIdsDeServicios(nuevosIdsDeServicios);
            }

            fetchIds();
        }

    }, [idCategoria]);

    const [serviciosArray, setServiciosArray] = useState([]);

    useEffect(() => {
        const fetchServicios = async () => {
            const servicios = await obtenerServicios();
            const data = servicios.filter(servicio => idsDeServicios.includes(servicio.id_servicio));

            setServiciosArray(data);
        };
        fetchServicios();
    }, [idsDeServicios]);

    const idServicio = serviciosArray.find(servicio => servicio.servicio_nombre === subservicio)?.id_servicio;


    useEffect(() => {
        if (idCategoria && idServicio) {
            const fetchFkIdCatServicio = async () => {
                const response = await axios.get(`${DB_CONNECTION}/categorias-servicios/${idCategoria}/${idServicio}`);
                const data = response.data;
                setFkIdCategoriaServicio(data[0].id_categoria_servicio);
            }
            fetchFkIdCatServicio();
        }
    }, [idCategoria, idServicio]);


    return (
        <Grid defaultMobileSize={12} defaultWebSize={12} container spacing={1}>
            <Grid item defaultMobileSize={12} defaultWebSize={12}>
                <TypographyMediumTitle
                    sx={{
                        fontWeight: "400!important",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        paddingTop: "2rem",
                        [theme.breakpoints.up('defaultWebSize')]: {
                            fontWeight: "bold!important",
                        }
                    }}
                >
                    Lorem ipsum dolor.
                </TypographyMediumTitle>
            </Grid>

            <Grid item defaultMobileSize={12} defaultWebSize={4}>
                <InputLabel shrink htmlFor='nombre' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        Nombre(s)
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    label="Agregue su nombre(s)"
                    id='nombre'
                    fullWidth
                    variant="filled"
                    onInput={handleNombre}
                    value={nombre}
                    error={nombreTocado && !nombreValido}
                    helperText={nombreTocado && !nombreValido ? '*Por favor, completa este campo' : ' '}
                    inputProps={{maxLength: 20}}
                />
            </Grid>

            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                <InputLabel shrink htmlFor='apellido-paterno' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        Apellido Paterno
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    fullWidth
                    id="apellido-paterno"
                    label="Agregue su apellido paterno"
                    variant="filled"
                    onInput={handleApellidoPaterno}
                    value={apellidoPaterno}
                    error={apellidoPaternoTocado && !apellidoPaternoValido}
                    helperText={apellidoPaternoTocado && !apellidoPaternoValido ? '*Por favor, completa este campo' : ' '}
                    inputProps={{maxLength: 20}}
                />
            </Grid>

            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                <InputLabel shrink htmlFor='apellido-materno' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        Apellido Materno
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    fullWidth
                    id="apellido-materno"
                    label='Agregue su apellido materno'
                    variant="filled"
                    onChange={handleApellidoMaterno}
                    value={apellidoMaterno}
                    error={apellidoMaternoTocado && !apellidoMaternoValido}
                    helperText={apellidoMaternoTocado && !apellidoMaternoValido ? '*Por favor, completa este campo' : ' '}
                    inputProps={{maxLength: 20}}
                />
            </Grid>

            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                <InputLabel shrink htmlFor='genero' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        Género
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    id="genero"
                    select
                    label="Seleccione su género"
                    value={genero}
                    onChange={handleGenero}
                    helperText={generoTocado && !generoValido ? '*Por favor, selecciona una opción' : ' '}
                    error={generoTocado && !generoValido}
                    variant="filled"
                    fullWidth
                >
                    {generos.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item defaultWebSize={8}/> { /* No se como esto funciona */}

            <Grid item defaultMobileSize={12} defaultWebSize={4}>
                <InputLabel shrink htmlFor='nombre-del-negocio' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        Nombre del negocio a registrar
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    fullWidth
                    id="nombre-del-negocio"
                    label="Nombre del negocio"
                    value={nombreNegocio}
                    onChange={handleNombreNegocio}
                    helperText={nombreNegocioTocado && !nombreNegocioValido ? '*Por favor, completa este campo' : ' '}
                    error={nombreNegocioTocado && !nombreNegocioValido}
                    variant="filled"
                    inputProps={{maxLength: 20}}
                />
            </Grid>

            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                <InputLabel shrink htmlFor='categoria' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        ¿Qué servicio ofertas?
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    fullWidth
                    id="categoria"
                    select
                    label="Seleccione la categoría"
                    value={servicio}
                    onChange={handleServicio}
                    helperText={servicioTocado && !servicioValido ? '*Por favor, selecciona una opción' : ' '}
                    error={servicioTocado && !servicioValido}
                    variant="filled"
                    sx={{
                        verticalAlign: 'middle', // Añadido
                    }}
                >
                    {categoriasArray.map((categoria) => (
                        <MenuItem key={categoria.id_categoria} value={categoria.value}>
                            {categoria.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>


            <Grid item defaultMobileSize={6} defaultWebSize={4}>
                <InputLabel shrink htmlFor='servicio' sx={sxParaLosInputLabels}>
                    <TypographySmallText
                        sx={sxParaLosTypographyDeLosInputLabels}
                        overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                    >
                        &nbsp;
                    </TypographySmallText>
                </InputLabel>
                <TextField
                    id="servicio"
                    select
                    label="Seleccione el servicio"
                    value={subservicio}
                    onChange={handleSubservicio}
                    helperText={subservicioTocado && !subservicioValido ? '*Por favor, selecciona una opción' : ' '}
                    error={subservicioTocado && !subservicioValido}
                    variant="filled"
                    fullWidth
                    disabled={!servicio}
                >
                    {
                        serviciosArray.map((servicio) => (
                            <MenuItem key={servicio.id_servicio} value={servicio.servicio_nombre}>
                                {servicio.servicio_nombre}
                            </MenuItem>
                        ))
                    }
                </TextField>
            </Grid>

        </Grid>
    )
}

const UbicacionYContacto = (props) => {
    const {
        theme,
        isUpDefaultWebSize
    } = useContext(BreakpointsContext);

    const sxParaLosInputLabels = {
        marginBottom: isUpDefaultWebSize ? '-1rem' : '-0.5rem'
    }

    const {
        codigoPostal,
        handleCodigoPostal,
        codigoPostalTocado,
        codigoPostalValido,
        estado,
        municipio,
        colonia,
        handleColonia,
        coloniaTocada,
        coloniaValida,
        colonias,
        calle,
        handleCalle,
        calleTocada,
        calleValida,
        numero,
        handleNumero,
        numeroTocado,
        numeroValido,
        telefono,
        handleTelefono,
        telefonoTocado,
        telefonoValido,
        handleCorreo,
        correo,
        correoTocado,
        correoValido,
        mensajeCorreo
    } = props;
    //Array de valores para el select de colonias
    const selectColonias = (
        //Iterar sobre el array de colonias que viene de UseFormulario
        colonias.map((colonia) => {
                return {
                    value: colonia,
                    label: colonia
                }
            }
        )
    );
    return (
        <>
            <Grid container defaultMobileSize={12} defaultWebSize={12} spacing={1}>
                <Grid item defaultMobileSize={12} defaultWebSize={12}>
                    <TypographySmallTitle
                        sx={{
                            marginTop: "1rem",
                            marginBottom: "1rem",
                            [theme.breakpoints.down('defaultWebSize')]: {
                                textAlign: "left",
                            }
                        }}
                        overrideSizes={{
                            smallMobileSize: '1.5rem',
                            mediumMobileSize: '1.5rem',
                            defaultWebSize: '2rem',
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur.
                    </TypographySmallTitle>
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <InputLabel shrink htmlFor='codigo-postal' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Código Postal
                        </TypographySmallText>
                    </InputLabel>

                    <TextField
                        fullWidth
                        id="codigo-postal"
                        label="CP"
                        variant="filled"
                        value={codigoPostal}
                        onChange={handleCodigoPostal}
                        error={codigoPostalTocado && !codigoPostalValido} // Mostrar error solo si el campo ha sido tocado y no es válido
                        helperText={codigoPostalTocado && !codigoPostalValido ? '*Por favor, completa este campo' : ' '}
                        inputProps={{maxLength: 5}}

                    />
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <InputLabel shrink htmlFor='estado' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Estado
                        </TypographySmallText>
                    </InputLabel>

                    <TextField
                        fullWidth
                        id="estado"
                        variant="filled"
                        value={estado}
                        helperText=" "
                        disabled

                    />
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <InputLabel shrink htmlFor='municipio' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Municipio
                        </TypographySmallText>
                    </InputLabel>

                    <TextField
                        id="municipio"
                        variant="filled"
                        value={municipio}
                        helperText=" "
                        disabled
                        fullWidth
                    />
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <InputLabel shrink htmlFor='colonia' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Colonia
                        </TypographySmallText>
                    </InputLabel>

                    {/*aumentar el height de este componente*/}
                    <TextField
                        select
                        id="colonia"
                        label="Seleccione su colonia"
                        variant="filled"
                        value={colonia}
                        fullWidth
                        onChange={handleColonia}
                        helperText={coloniaTocada && !coloniaValida ? '*Por favor, selecciona una opción' : ' '}
                        error={coloniaTocada && !coloniaValida}
                    >
                        {
                            selectColonias.map((option) =>
                                (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                )
                            )
                        }
                    </TextField>
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <InputLabel shrink htmlFor='calle' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Calle
                        </TypographySmallText>
                    </InputLabel>

                    <TextField
                        fullWidth
                        id="calle"
                        label="Escriba su calle"
                        variant="filled"
                        value={calle}
                        onChange={handleCalle}
                        helperText={calleTocada && !calleValida ? '*Por favor, completa este campo' : ' '}
                        error={calleTocada && !calleValida}
                        inputProps={{maxLength: 30}}
                    />
                </Grid>

                <Grid item defaultMobileSize={6} defaultWebSize={4}>
                    <InputLabel shrink htmlFor='numero' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Número
                        </TypographySmallText>
                    </InputLabel>

                    <TextField
                        fullWidth
                        id="numero"
                        label="##"
                        value={numero}
                        onChange={handleNumero}
                        helperText={numeroTocado && !numeroValido ? '*Por favor, completa este campo' : ' '}
                        error={numeroTocado && !numeroValido}
                        variant="filled"
                        inputProps={{maxLength: 10}}
                    />
                </Grid>

                <Grid item defaultMobileSize={4} defaultWebSize={2}>
                    <InputLabel shrink htmlFor='numero' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            &nbsp;
                        </TypographySmallText>
                    </InputLabel>
                    <TextField
                        fullWidth
                        id="outlined-helperText"
                        label="LADA"
                        defaultValue="+52"
                        variant='filled'
                        disabled
                        helperText=" "
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <img src={BanderaDeMexico} alt="Bandera de México" height={15}/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item defaultMobileSize={8} defaultWebSize={5}>
                    <InputLabel shrink htmlFor='numero' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            Número de Teléfono
                        </TypographySmallText>
                    </InputLabel>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Agregue su número de teléfono"
                        value={telefono}
                        onChange={handleTelefono}
                        helperText={telefonoTocado && !telefonoValido ? '*Por favor, completa este campo' : ' '}
                        error={telefonoTocado && !telefonoValido}
                        variant="filled"
                        inputProps={{maxLength: 10}}
                    />
                </Grid>

                <Grid item defaultMobileSize={12} defaultWebSize={5}>
                    <InputLabel shrink htmlFor='numero' sx={sxParaLosInputLabels}>
                        <TypographySmallText
                            sx={sxParaLosTypographyDeLosInputLabels}
                            overrideSizes={overrideSizesParaLosTypographyDeLosInputLabels}
                        >
                            E-mail
                        </TypographySmallText>
                    </InputLabel>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="correo@gmail.com"
                        variant="filled"
                        onInput={handleCorreo}
                        value={correo}
                        error={correoTocado && !correoValido}
                        helperText={correoTocado && !correoValido ? mensajeCorreo : ' '}
                    />
                </Grid>
            </Grid>
        </>
    )
}

const Manifiesto = (props) => {
    const {setMostrarAvisoDePrivacidadModal} = useContext(ModalContext);

    const {
        checkbox,
        handleCheckbox,
        checkboxValido,
        setNombreTocado,
        setApellidoPaternoTocado,
        setApellidoMaternoTocado,
        setEdadTocada,
        setGeneroTocado,
        setServicioTocado,
        setSubservicioTocado,
        setNombreNegocioTocado,
        setColoniaTocada,
        setCalleTocada,
        setNumeroTocado,
        setTelefonoTocado,
        setCorreoTocado,
        setCheckboxTocado,
        setCodigoPostalTocado,
        nombreValido,
        apellidoPaternoValido,
        apellidoMaternoValido,
        generoValido,
        servicioValido,
        subservicioValido,
        coloniaValida,
        nombreNegocioValido,
        calleValida,
        numeroValido,
        telefonoValido,
        correoValido,
        codigoPostalValido,
        //Variables de states que se pasan al state dataForm al terminar el formulario
        telefono,
        correo,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        genero,
        nombreNegocio,
        codigoPostal,
        estado,
        municipio,
        colonia,
        calle,
        numero,
        fkIdCategoriaServicio,
    } = props;

    const [textoCheckbox, setTextoCheckbox] = useState(' ');
    const [formValido] = useState(false);
    const {setFormTerminado, setVistaFinal} = useContext(FormContext);
    const [clienteExistente, setClienteExistente] = useState(false);
    const [telefonoEncontrado, setTelefonoEncontrado] = useState(false);
    const [correoEncontrado, setCorreoEncontrado] = useState(false);
    const [dataForm, setDataForm] = useState({});
    const [verificacionCompletada, setVerificacionCompletada] = useState(false);

    const validarFormulario = () => {
        // Marcar como tocados los campos que no se hayan tocado previamente
        setNombreTocado(true);
        setApellidoPaternoTocado(true);
        setApellidoMaternoTocado(true);
        setEdadTocada(true);
        setGeneroTocado(true);
        setServicioTocado(true);
        setSubservicioTocado(true);
        setNombreNegocioTocado(true);
        setColoniaTocada(true);
        setCalleTocada(true);
        setNumeroTocado(true);
        setTelefonoTocado(true);
        setCorreoTocado(true);
        setCheckboxTocado(true);
        setCodigoPostalTocado(true);


        // Verificar si todos los campos son válidos
        if (
            nombreValido && apellidoPaternoValido && apellidoMaternoValido && generoValido &&
            servicioValido && subservicioValido && coloniaValida && nombreNegocioValido &&
            calleValida && numeroValido && telefonoValido && correoValido && checkboxValido && codigoPostalValido
        ) {
            // Mostrar mensaje en la consola si el formulario es válido
            // console.log('Formulario válido');

            setDataForm({
                telefono: telefono,
                email: correo,
                nombre: nombre,
                apellido_paterno: apellidoPaterno,
                apellido_materno: apellidoMaterno,
                genero: genero,
                nombre_negocio: nombreNegocio,
                codigo_postal: codigoPostal,
                estado: estado,
                municipio: municipio,
                colonia: colonia,
                calle: calle,
                numero_domicilio: numero,
                fecha_creacion: new Date(),
                fecha_modificacion: null,
                fk_id_categoria_servicio: fkIdCategoriaServicio
            });

            const encontrarTelefono = async () => {
                try {
                    await axios.get(`${DB_CONNECTION}/clientes/buscar/tel?tel=${telefono}`);
                    console.log("Telefono encontrado en la base de datos");
                    setTelefonoEncontrado(true);
                } catch (error) {
                    console.error("No se encontró el telefono en la base de datos");
                }
            }

            const encontrarEmail = async () => {
                try {
                    await axios.get(`${DB_CONNECTION}/clientes/buscar/email?email=${correo}`);
                    console.log("Email encontrado en la base de datos");
                    setCorreoEncontrado(true);
                } catch (error) {
                    console.error("No se encontró el email en la base de datos");
                }
            }

            Promise.all([encontrarTelefono(), encontrarEmail()]).then(() => {
                setVerificacionCompletada(true);
            });
        } else {
            // Mostrar mensaje en la consola si el formulario no es válido
            if (checkboxValido) {
                // Lógica de registro aquí
                setTextoCheckbox("");
            } else {
                // No hacer nada si el checkbox no está marcado
                setTextoCheckbox('Debes aceptar los términos y condiciones');
            }
            // console.log('Formulario inválido');
            localStorage.setItem('formTerminado', 'false');
            localStorage.setItem("vistaFinal", "false");
            setFormTerminado('false');
            setVistaFinal('false');
        }
    };

    useEffect(() => {
        if (!verificacionCompletada) return;

        const postDataForm = async () => {
            try {

                if (telefonoEncontrado == true || correoEncontrado == true) {
                    console.log('El usuario ya existe');
                    setClienteExistente(true);
                    setTextoCheckbox('Usuario ya registrado');
                    setCorreoEncontrado(false);
                    setTelefonoEncontrado(false);
                    setVerificacionCompletada(false);
                    return;
                } else {
                    try {
                        const response = await axios.post(`${DB_CONNECTION}/clientes`, dataForm);
                        console.log("Cliente creado", response.data);

                        //Guardar en el LocalStorage un objeto con el telefono y correo
                        localStorage.setItem('telefono', telefono);
                        localStorage.setItem('correo', correo);
                        localStorage.setItem('formTerminado', 'true');
                        localStorage.setItem("vistaFinal", "true");
                        setFormTerminado('true');
                        setVistaFinal('true');
                    } catch (error) {
                        console.error("No se pudo crear el cliente: ", error);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        postDataForm();
    }, [verificacionCompletada])

    return (
        <>
            <Grid container>

                <Grid item mt={2} defaultMobileSize={12} sx={{
                    display: 'flex',
                    direction: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Checkbox
                        checked={checkbox}
                        onChange={handleCheckbox}
                        inputProps={{'aria-label': 'checkbox'}}
                    />
                    <TypographyMediumText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur dolore maiores
                        possimus quod tenetur!
                    </TypographyMediumText>
                </Grid>

                <Grid item defaultMobileSize={12}>
                    {checkboxValido ? null : <p className='text-danger text-center'>{textoCheckbox}</p>}
                    <p className='text-center text-primary'><a href="#"></a></p>
                </Grid>

                <Grid item defaultMobileSize={12}>
                    {!clienteExistente ? null : <p className='text-danger text-center'>{textoCheckbox}</p>}
                    <p className='text-center text-primary'><a href="#"></a></p>
                </Grid>

                <Grid item defaultMobileSize={12}>
                    <Link href='#' onClick={(event) => {
                        event.preventDefault();
                        setMostrarAvisoDePrivacidadModal(true);
                    }}>
                        <TypographyMediumText
                            sx={{
                                fontSize: "1.05rem",
                                color: "blue",
                            }}
                        >
                            Ver aviso de privacidad
                        </TypographyMediumText>
                    </Link>
                </Grid>

                <Grid item mt={2} defaultMobileSize={12} defaultWebSize={12} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Link to={formValido ? "/" : ""}
                          state={formValido ? {formTerminado: true} : {formTerminado: false}}>
                        <Button
                            variant='contained'
                            size='large'
                            onClick={validarFormulario}
                        >
                            Registrarme
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}

const generos = [
    {
        value: 'Masculino',
        label: 'Masculino',
    },
    {
        value: 'Femenino',
        label: 'Femenino',
    },
    {
        value: 'Otro',
        label: 'Otro',
    }
];
