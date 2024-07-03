
//Esenciales
import {useContext} from "react";
import { FormContext } from '../Context/Index.js';
import {LandingPage, QuienesSomos} from "../Views/LandingPagePagina/Index.js";
import Formulario from "../Views/LandingPagePagina/Formulario.jsx";
import FormTerminado from "../Views/LandingPagePagina/FormTerminado.jsx";

export const LandingPagePagina = () => {
        const { formTerminado } = useContext(FormContext);
    
    return (
        <>
            <LandingPage />
            <QuienesSomos />

            {formTerminado === 'true' ? <FormTerminado /> : <Formulario/>}
        </>

    )
}
