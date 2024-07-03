
import {ModalLayout} from "../../Layout/Index.js";
import {ModalContext} from "../../Context/Index.js";
import {useContext} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {IconButton} from "@mui/material";
import UndoIcon from '@mui/icons-material/Undo';
import {TypographySmallText} from "../../Theme/index.js";


export const PoliticaDeUsoDeCookiesModal = () => {
    const {mostrarPoliticasDeUsoDeCookiesModal} = useContext(ModalContext);

    return (
        <ModalLayout
            titulo={<Titulo/>}
            cuerpo={<Cuerpo/>}
            footer={<Footer/>}
            mostrarModal={mostrarPoliticasDeUsoDeCookiesModal}
        />
    )
}

const Titulo = () => {
    return (
        <h2 className='fs-1'> Política de uso de cookies</h2>
    )
}

const Cuerpo = () => {
    return (
        <TypographySmallText sx={{textAlign: 'start'}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias autem, commodi corporis ducimus et
            fuga fugit hic impedit laboriosam necessitatibus perspiciatis quibusdam sapiente. Aperiam dolorum facere
            inventore ipsam itaque minus omnis, reprehenderit sapiente sit vero. Ab, aperiam aut enim explicabo minima
            molestias nisi perferendis. Animi aspernatur earum ex expedita fugiat fugit harum iusto laborum laudantium
            maxime nam officia, perspiciatis placeat quas quia ratione repellat tempora tempore ut voluptatem,
            voluptatum!
        </TypographySmallText>
    )
}

const Footer = () => {
    const {setMostrarPoliticasDeUsoDeCookiesModal, setMostrarAdministradorDeCookiesModal} = useContext(ModalContext);
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                    <IconButton
                        style={{marginTop: '1rem', marginBottom: '10rem'}}
                        onClick={() => {
                            setMostrarPoliticasDeUsoDeCookiesModal(false);
                            setMostrarAdministradorDeCookiesModal(true)
                        }}>
                        <UndoIcon style={{fontSize: '3rem'}}/>
                    </IconButton>
                </Col>
            </Row>
        </Container>
    )
}