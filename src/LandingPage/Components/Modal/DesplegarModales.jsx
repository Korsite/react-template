
import {useContext} from 'react'
import {
    AdministradorDeCookiesModal,
    DerechosReservadosModal,
    InicioCookiesModal,
    PoliticaDeUsoDeCookiesModal,
    AvisoDePrivacidadModal
} from "./Index.js";
import {ModalContext} from "../../Context/Index.js";


/**
 * Cuando el usuario entra a la aplicación se desplegarán ciertos modales
 * @returns {Element}
 * @constructor
 */
export const DesplegarModales = () => {
    const {
        mostrarInicioCookiesModal,
        mostrarAdministradorDeCookiesModal,
        mostrarPoliticasDeUsoDeCookiesModal,
        mostrarDerechosReservadosModal,
        mostrarAvisoDePrivacidadModal
    } = useContext(ModalContext);

    return (
        <>
            {mostrarInicioCookiesModal && <InicioCookiesModal/>}

            {mostrarAdministradorDeCookiesModal && <AdministradorDeCookiesModal/>}

            {mostrarPoliticasDeUsoDeCookiesModal && <PoliticaDeUsoDeCookiesModal/>}

            {mostrarDerechosReservadosModal && <DerechosReservadosModal/>}

            {mostrarAvisoDePrivacidadModal && <AvisoDePrivacidadModal/>}
        </>
    )
}