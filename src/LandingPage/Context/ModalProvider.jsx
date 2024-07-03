
import {useEffect, useState} from 'react'
import PropTypes from "prop-types";
import {ModalContext} from "./ModalContext.jsx";

/**
 * Este provider sirve para tener referencia a los modales que se van a mostrar en la aplicación
 * Se ofrece este provider para que no tener que pasar props a todos los componentes.
 * Estan disponibles desde el componente <AppRouter /> en el archivo AppRouter.jsx
 * @param children
 * @returns {Element}
 * @constructor
 */

export const ModalProvider = ({ children }) => {
    const [mostrarInicioCookiesModal, setMostrarInicioCookiesModal] = useState(true);
    const [mostrarAdministradorDeCookiesModal, setMostrarAdministradorDeCookiesModal] = useState(false);
    const [mostrarPoliticasDeUsoDeCookiesModal, setMostrarPoliticasDeUsoDeCookiesModal] = useState(false);
    const [mostrarDerechosReservadosModal, setMostrarDerechosReservadosModal] = useState(false);
    const [mostrarAvisoDePrivacidadModal, setMostrarAvisoDePrivacidadModal] = useState(false);

    const desplegandoUnModal =
        mostrarInicioCookiesModal ||
        mostrarAdministradorDeCookiesModal ||
        mostrarPoliticasDeUsoDeCookiesModal ||
        mostrarDerechosReservadosModal ||
        mostrarAvisoDePrivacidadModal;

    useEffect(() => {
        setMostrarInicioCookiesModal(true)
    }, []);

    return (
        <ModalContext.Provider value ={{
                    desplegandoUnModal,
                    mostrarInicioCookiesModal,
            setMostrarInicioCookiesModal,

            mostrarAdministradorDeCookiesModal,
            setMostrarAdministradorDeCookiesModal,

            mostrarPoliticasDeUsoDeCookiesModal,
            setMostrarPoliticasDeUsoDeCookiesModal,

            mostrarDerechosReservadosModal,
                    setMostrarDerechosReservadosModal,

            mostrarAvisoDePrivacidadModal,
            setMostrarAvisoDePrivacidadModal
                }} >
                { children }
        </ModalContext.Provider>
    )
}

ModalProvider.propTypes = {
    children: PropTypes.node.isRequired
}
