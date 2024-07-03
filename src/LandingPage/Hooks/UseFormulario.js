
import { useState } from 'react';
import validator from 'validator';
import axios from 'axios';
import {cities} from "../Data/Index.js";

const UseFormulario = () => {
    const [nombre, setNombre] = useState('');
    const [nombreValido, setNombreValido] = useState(false);
    const [nombreTocado, setNombreTocado] = useState(false);
    const handleNombre = (e) => {
        const valor = e.target.value;
        const valorFiltrado = valor.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
        setNombre(valorFiltrado);
        setNombreValido(verificarNombre(valorFiltrado));
        setNombreTocado(true);
    };

    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoPaternoValido, setApellidoPaternoValido] = useState(false);
    const [apellidoPaternoTocado, setApellidoPaternoTocado] = useState(false);
    const handleApellidoPaterno = (e) => {
        const valor = e.target.value;
        const valorFiltrado = valor.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
        setApellidoPaterno(valorFiltrado);
        setApellidoPaternoValido(verificarNombre(valorFiltrado));
        setApellidoPaternoTocado(true);
    };

    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [apellidoMaternoValido, setApellidoMaternoValido] = useState(false);
    const [apellidoMaternoTocado, setApellidoMaternoTocado] = useState(false);
    const handleApellidoMaterno = (e) => {
        const valor = e.target.value;
        const valorFiltrado = valor.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
        setApellidoMaterno(valorFiltrado);
        setApellidoMaternoValido(verificarNombre(valorFiltrado));
        setApellidoMaternoTocado(true);
    };

    const [edad, setEdad] = useState('');
    const [edadValida, setEdadValida] = useState(false);
    const [edadTocada, setEdadTocada] = useState(false);
    const handleEdad = (e) => {
        const valor = e.target.value;
        const valorFiltrado = valor.replace(/[^0-9]/g, '');
        setEdad(valorFiltrado);
        if (valorFiltrado) {
            setEdadValida(verificarEdad(valorFiltrado));
        } else {
            setEdadValida(false);
        }
        setEdadTocada(true);
    };

    const [genero, setGenero] = useState('');
    const [generoValido, setGeneroValido] = useState(false);
    const [generoTocado, setGeneroTocado] = useState(false);

    const handleGenero = (e) => {
        const valor = e.target.value;
        setGenero(valor);
        setGeneroValido(verificarGenero(valor));
        setGeneroTocado(true);
    };

    const [servicio, setServicio] = useState('');
    const [servicioValido, setServicioValido] = useState(false);
    const [servicioTocado, setServicioTocado] = useState(false);

    const [subservicio, setSubservicio] = useState('');
    const [subservicioValido, setSubservicioValido] = useState(false);
    const [subservicioTocado, setSubservicioTocado] = useState(false);

    const handleServicio = (e) => {
        setServicio("");
        const valor = e.target.value;
        setServicio(valor);
        setServicioValido(verificarServicio(valor));
        setServicioTocado(true);
    };

    const handleSubservicio = (e) => {
        const valor = e.target.value;
        setSubservicio(valor);
        setSubservicioValido(verificarSubservicio(valor));
        setSubservicioTocado(true);
    };

    const [nombreNegocio, setNombreNegocio] = useState('');
    const [nombreNegocioValido, setNombreNegocioValido] = useState(false);
    const [nombreNegocioTocado, setNombreNegocioTocado] = useState(false);
    const handleNombreNegocio = (e) => {
        const valor = e.target.value;
        const valorFiltrado = valor.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]/g, '');
        setNombreNegocio(valorFiltrado);
        setNombreNegocioValido(verificarNombreNegocio(valorFiltrado));
        setNombreNegocioTocado(true);
    };

    const [calle, setCalle] = useState('');
    const [calleValida, setCalleValida] = useState(false);
    const [calleTocada, setCalleTocada] = useState(false);
    const handleCalle = (e) => {
        const valor = e.target.value;
        const valorFiltrado = valor.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]/g, '');
        setCalle(valorFiltrado);
        setCalleValida(verificarCalle(valorFiltrado));
        setCalleTocada(true);
    };

    const [numero, setNumero] = useState('');
    const [numeroValido, setNumeroValido] = useState(false);
    const [numeroTocado, setNumeroTocado] = useState(false);

    const handleNumero = (e) => {
        const valor = e.target.value;
        const valorFiltrado = valor.replace(/[^0-9]/g, '');
        setNumero(valorFiltrado);
        setNumeroValido(verificarNumero(valorFiltrado));
        setNumeroTocado(true);
    };


    const [telefono, setTelefono] = useState('');
    const [telefonoValido, setTelefonoValido] = useState(false);
    const [telefonoTocado, setTelefonoTocado] = useState(false);
    const handleTelefono = (e) => {
        let valor = e.target.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
        valor = valor.substring(0, 10); // Limitar a 10 caracteres
        setTelefono(valor);
        setTelefonoTocado(true);
    
        // Validar el teléfono
        const primerosDosDigitos = valor.substring(0, 2); // Cambio a los primeros 2 dígitos
        const primerosTresDigitos = valor.substring(0, 3);
        const esLadaValida = cities.some((ciudad) => ciudad.lada === primerosDosDigitos || ciudad.lada === primerosTresDigitos); // Verificar si los primeros 2 o 3 dígitos coinciden con alguna LADA
    
        setTelefonoValido(valor.length === 10 && /^\d+$/.test(valor) && esLadaValida);
    };
    

    const [correo, setCorreo] = useState('');
    const [correoValido, setCorreoValido] = useState(false);
    const [correoTocado, setCorreoTocado] = useState(false);
    const [mensajeCorreo, setMensajeCorreo] = useState('Por favor, completa este campo');
    const handleCorreo = (e) => {
        const valor = e.target.value;
        setCorreo(valor);
        const esValido = verificarCorreo(valor);
        setCorreoValido(esValido);
        setCorreoTocado(true);
    
        if (valor === '' && correoTocado) {
            setMensajeCorreo('Por favor, completa este campo');
        } else if (!esValido) {
            setMensajeCorreo('Este no parece ser un formato válido');
        } else {
            setMensajeCorreo('');
        }
    };
    

    const [checkbox, setCheckbox] = useState(false);
    const [checkboxTocado, setCheckboxTocado] = useState(false);
    const handleCheckbox = (e) => {
        setCheckbox(e.target.checked);
        setCheckboxTocado(true);
    };
    const checkboxValido = checkbox;

    const [codigoPostal, setCodigoPostal] = useState('');
    const [codigoPostalValido, setCodigoPostalValido] = useState(false);
    const [codigoPostalTocado, setCodigoPostalTocado] = useState(false); // Nuevo estado para controlar si el campo ha sido tocado
    const [estado, setEstado] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [colonias, setColonias] = useState([" "]);
    const username = 'codigogeek';

    const handleCodigoPostal = async (e) => {
        const valor = e.target.value.replace(/\D/g, '');
        setCodigoPostal(valor);
        setCodigoPostalTocado(true); // Marcar el campo como tocado

        if (valor.length === 5 && /^\d+$/.test(valor)) {
            // Llamada a la API de GeoNames después de 1 segundo si el código postal es válido
            setTimeout(async () => {
                try {
                    const response = await axios.get(
                        `http://api.geonames.org/postalCodeLookupJSON?postalcode=${valor}&country=MX&username=${username}`
                    );
                    const postalCodes = response.data.postalcodes;
                    
                    if (postalCodes.length > 0) {
                        const adminName1 = postalCodes[0].adminName1; // Estado
                        const adminName2 = postalCodes[0].adminName2; // Municipio
                        const placeNames = postalCodes.map(pc => pc.placeName); // Lista de colonias

                        setEstado(adminName1);
                        setMunicipio(adminName2);
                        setColonias(placeNames);

                        // console.log(placeNames);

                        // Establecer la validez del código postal solo si la solicitud es exitosa
                        setCodigoPostalValido(true);
                    } else {
                        // Limpiar el estado si no hay resultados
                        setEstado('');
                        setMunicipio('');
                        setColonias([]);
                        setCodigoPostalValido(false);
                    }
                } catch (error) {
                    console.error('Error al obtener información del código postal:', error);
                    // Limpiar el estado y establecer la validez del código postal como falso si hay un error en la solicitud
                    setEstado('');
                    setMunicipio('');
                    setColonias([]);
                    setCodigoPostalValido(false);
                }
            }, 500);
        } else {
            // Limpiar el estado si el código postal no es válido
            setEstado('');
            setMunicipio('');
            setColonias([]);
            setCodigoPostalValido(false);
        }
    };

    const [colonia, setColonia] = useState('');
    const [coloniaValida, setColoniaValida] = useState(false);
    const [coloniaTocada, setColoniaTocada] = useState(false);
    const handleColonia = (e) => {
        const valor = e.target.value;
        setColonia(valor);
        setColoniaValida(valor !== '');
        setColoniaTocada(true);
    }

    const [ fkIdCategoriaServicio, setFkIdCategoriaServicio ] = useState("");

    const [ dataForm, setDataForm ] = useState({
        telefono: '',
        email: '',
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        genero: '',
        nombre_negocio: '',
        codigo_postal: '',
        estado: '',
        municipio: '',
        colonia: '',
        calle: '',
        numero_domicilio: '',
        fecha_creacion: null,
        fecha_modificacion: null,
        fk_id_categoria_servicio: null
    });


    return {
        nombre, nombreValido, nombreTocado, setNombreTocado, handleNombre,
        apellidoPaterno, apellidoPaternoValido, apellidoPaternoTocado, setApellidoPaternoTocado, handleApellidoPaterno,
        apellidoMaterno, apellidoMaternoValido, apellidoMaternoTocado, setApellidoMaternoTocado, handleApellidoMaterno,
        edad, edadValida, edadTocada, setEdadTocada, handleEdad,
        genero, generoValido, generoTocado, setGeneroTocado, handleGenero,
        servicio, servicioValido, servicioTocado, setServicioTocado, handleServicio,
        subservicio, subservicioValido, subservicioTocado, setSubservicioTocado, handleSubservicio,
        nombreNegocio, nombreNegocioValido, nombreNegocioTocado, setNombreNegocioTocado, handleNombreNegocio,
        numero, numeroValido, numeroTocado, setNumeroTocado, handleNumero,
        calle, calleValida, calleTocada, setCalleTocada, handleCalle,
        telefono, telefonoValido, telefonoTocado, setTelefonoTocado, handleTelefono,
        correo, correoValido, correoTocado, setCorreoTocado, handleCorreo, mensajeCorreo,
        checkbox, checkboxTocado, checkboxValido, setCheckboxTocado, handleCheckbox,
        codigoPostal, codigoPostalTocado, codigoPostalValido, setCodigoPostalTocado, handleCodigoPostal,
        estado, municipio, colonias, colonia, setColonia, coloniaValida, coloniaTocada, setColoniaTocada, handleColonia,
        fkIdCategoriaServicio, setFkIdCategoriaServicio,
        dataForm, setDataForm
    };
};

const verificarNombre = (nombre) => {
    return nombre !== '' && /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre);
};

const verificarEdad = (edad) => {
    const edadNum = parseInt(edad, 10);
    return edadNum >= 18 && edadNum <= 99;
}

const verificarNombreNegocio = (nombreNegocio) => {
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]+$/.test(nombreNegocio);
};

const verificarCalle = (calle) => {
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]+$/.test(calle);
};

const verificarNumero = (numero) => {
    return /^[0-9]+$/.test(numero);
};

// Ladas válidas de México (esto debe ser una lista real de ladas)
const ladasValidas = [
    "55", "33", "81", /* Agrega todas las ladas válidas aquí */
];

// Función de verificación para el número de teléfono
const verificarTelefono = (telefono) => {
    const esNumeroValido = /^[0-9]{10}$/.test(telefono);
    if (!esNumeroValido) {
        return false;
    }
    const lada = telefono.substring(0, 2);
    return ladasValidas.includes(lada);
};

//Uso de la libreria Validator para validar el correo
const verificarCorreo = (correo) => {
    return validator.isEmail(correo);
};

const verificarServicio = (servicio) => {
    return servicio !== '';
};

const verificarSubservicio = (subservicio) => {
    return subservicio !== '';
};

const verificarGenero = (genero) => {
    return genero !== '';
};

export default UseFormulario;