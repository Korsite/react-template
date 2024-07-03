
import {Toolbar} from "@mui/material";
import PropTypes from "prop-types";
import {Footer, Navbar} from "../Components/Index.js";
import {useContext} from "react";
import {ModalContext} from "../Context/Index.js";

/**
 * Todas las paginas (pages) deben estar dentro de este layout
 * de esta manera se asegura que el navbar y el footer esten presentes
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const LandingPageLayout = ({children}) => {

    const { desplegandoUnModal } = useContext(ModalContext);
    
    return (
        <>
            {
                !desplegandoUnModal &&
                <>
                    <Navbar/>
                    <Toolbar/>
                </>
            }

            {children}

            <Footer/>
        </>
    )
}

LandingPageLayout.propTypes = {
    children: PropTypes.node
}