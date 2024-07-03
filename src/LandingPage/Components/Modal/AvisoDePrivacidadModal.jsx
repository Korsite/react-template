
import {useContext} from 'react'
import {ModalLayout} from "../../Layout/Index.js";
import {ModalContext} from "../../Context/Index.js";
import {TypographySmallText} from "../../Theme/index.js";

export const AvisoDePrivacidadModal = () => {

    const { mostrarAvisoDePrivacidadModal, setMostrarAvisoDePrivacidadModal } = useContext(ModalContext);
    return (
        <>
            <ModalLayout
                mostrarModal={mostrarAvisoDePrivacidadModal}
                titulo={<></>}
                cuerpo={<Cuerpo/>}
                footer={<Footer/>}
                dialogClassName=''
                mostrarCloseButton={ true }
                onHideModal={ () => setMostrarAvisoDePrivacidadModal(false) }
            />

        </>
    )
}

const Cuerpo = () => {
    return <h2 className='fs-1'>Aviso de privacidad</h2>
}

const Footer = () => {
    return (
        <>
            <TypographySmallText sx={{ textAlign: 'start', marginBottom: '15rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cupiditate doloribus, illo ipsum
                iste itaque quasi voluptate. Dignissimos ducimus fuga harum iste, laboriosam obcaecati pariatur quaerat
                quibusdam, sed suscipit tenetur ut? Adipisci assumenda culpa cumque cupiditate deserunt hic impedit ipsa
                iusto laudantium minima non, nulla numquam odit placeat quas quibusdam recusandae totam ullam ut
                voluptas! Architecto atque blanditiis doloremque error, exercitationem explicabo laborum magnam non
                perferendis placeat praesentium provident quaerat qui recusandae repellendus sit sunt ullam? Eveniet
                fugit numquam reprehenderit!
            </TypographySmallText>
        </>
    )
}