
import {LandingPageRuta} from "../LandingPage/Routes/LandingPageRuta.jsx";
import {MainProvider} from "../LandingPage/Context/Index.js";

/**
 * Para posibles rutas que esten de alguna manera relacionadas con la aplicación pero fuera de la misma
 * se pueden manejar aquí.
 * @returns {JSX.Element}
 * @constructor
 */
export const AppRouter = () => {

    /*
        Main provider se proporciona en este nivel para que pueda ser utilizado
        en cualquier parte de la aplicación.
     */

    return (
        <MainProvider>
                <LandingPageRuta/>
        </MainProvider>
    )

}
