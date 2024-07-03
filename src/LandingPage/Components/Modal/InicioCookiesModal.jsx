import {Button, Col, Container, Row} from "react-bootstrap";
import {ModalLayout} from "../../Layout/Index.js";
import {useContext} from "react";
import {ModalContext} from "../../Context/Index.js";
import './StyleModal.css';
import {useTheme} from "@mui/material";
import {TypographySmallText} from "../../Theme/index.js";

/**
 * Componente que muestra un modal de inicio de cookies
 * TODO encontrar la manera de coloca un divisor entre el cuerpo y el footer
 */
export const InicioCookiesModal = () => {
    const {mostrarInicioCookiesModal} = useContext(ModalContext);
    return (
        <ModalLayout
            mostrarModal={mostrarInicioCookiesModal}
            titulo={<></>}
            cuerpo={<Cuerpo/>}
            footer={<Footer/>}
            dialogClassName='Modal-Style-InicioCookiesModal'
        />
    );
}

const Cuerpo = () => {

    const theme = useTheme();

    return (
        <TypographySmallText
            variant="p" className='fs-5 lh-sm'
            sx={{
                [theme.breakpoints.up('defaultMobileSize')]: {
                    color: "white"
                },
            }}
        >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequatur, cum cupiditate deleniti
            dignissimos distinctio dolor dolorum ea eum eveniet fugiat fugit id illo in itaque, labore minima minus
            neque nostrum officiis quae, quam quas similique tempore unde vero voluptatem.
        </TypographySmallText>
    )
}

const Footer = () => {
    const {setMostrarAdministradorDeCookiesModal, setMostrarInicioCookiesModal} = useContext(ModalContext);
    return (
        <>
            <Container fluid='sm'>
                <Row>
                    <Col>
                        <Button
                            variant="primary"
                            onClick={() => setMostrarInicioCookiesModal(false)}
                            size="sm"
                            className='w-100'
                        >
                            Aceptar todas
                        </Button>
                    </Col>

                    <Col>
                        <Button
                            variant="primary"
                            onClick={() => {
                                setMostrarInicioCookiesModal(false)
                            }}
                            size='sm'
                            className='w-100'
                        >
                            Navegar sin cookies
                        </Button>
                    </Col>
                </Row>
                <Row
                    style={{
                        marginTop: '0.5rem',
                    }}
                >
                    <Button
                        className='text-white'
                        variant="link"
                        onClick={() => {
                            setMostrarInicioCookiesModal(false);
                            setMostrarAdministradorDeCookiesModal(true);
                        }}>
                        Administrar cookies
                    </Button>
                </Row>
            </Container>
        </>
    )
}