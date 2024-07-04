
import {Navigate, Route, Routes} from "react-router-dom";
import {LandingPagePagina} from "../Pages/LandingPagePagina.jsx";
import {DesplegarModales} from "../Components/Modal/Index.js";
import {useContext} from "react";
import {ModalContext} from "../Context/Index.js";
import {LandingPageLayout} from "../Layout/Index.js";

export const LandingPageRuta = () => {

    const { desplegandoUnModal } = useContext(ModalContext);


    return (
        <>
            {desplegandoUnModal && <DesplegarModales/>}

            <LandingPageLayout>
                <Routes>
                    <Route path='/react-template' element={<LandingPagePagina/>}/>
                    <Route path='*' element={<Navigate to='/react-template'/>}/>
                </Routes>
            </LandingPageLayout>

        </>

    )
}