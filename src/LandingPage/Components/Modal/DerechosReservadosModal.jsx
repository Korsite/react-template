
import {ModalLayout} from "../../Layout/Index.js";
import {ModalContext} from "../../Context/Index.js";
import {useContext} from "react";
import {Typography} from "@mui/material";

export const DerechosReservadosModal = () => {

    const { mostrarDerechosReservadosModal, setMostrarDerechosReservadosModal } = useContext(ModalContext);
    return (
        <>
            <ModalLayout
                mostrarModal={mostrarDerechosReservadosModal}
                titulo={<></>}
                cuerpo={<Cuerpo/>}
                footer={<Footer/>}
                dialogClassName=''
                mostrarCloseButton={ true }
                onHideModal={ () => setMostrarDerechosReservadosModal(false) }
            />

        </>
    )
}

const Cuerpo = () => {
    return <h2 className='fs-2 fw-semibold'>Todos los derechos reservados.</h2>

}

const Footer = () => {
    return (
        <>
            <Typography variant='p' className='fs-5 lh-sm' style={{ marginBottom: '15rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cupiditate doloribus, illo ipsum
                iste itaque quasi voluptate. Dignissimos ducimus fuga harum iste, laboriosam obcaecati pariatur quaerat
                quibusdam, sed suscipit tenetur ut? Adipisci assumenda culpa cumque cupiditate deserunt hic impedit ipsa
                iusto laudantium minima non, nulla numquam odit placeat quas quibusdam recusandae totam ullam ut
                voluptas! Architecto atque blanditiis doloremque error, exercitationem explicabo laborum magnam non
                perferendis placeat praesentium provident quaerat qui recusandae repellendus sit sunt ullam? Eveniet
                fugit numquam reprehenderit!
            </Typography>
        </>
    )
}