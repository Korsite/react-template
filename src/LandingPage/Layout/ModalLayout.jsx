
import {Modal, ModalDialog} from "react-bootstrap";
import PropTypes from "prop-types";
import '../Components/Modal/StyleModal.css'
// eslint-disable-next-line react/prop-types

/**
 * Componente que muestra un modal con un título, cuerpo y footer
 * @param titulo obligatorio
 * @param cuerpo obligatorio
 * @param footer obligatorio
 * @param mostrarModal obligatorio
 * @param contentClassName opcional
 * @param dialogClassName opcional
 * @param mostrarCloseButton opcional
 * @param onHideModal opcional, porque el param mostrarCloseButton es false por defecto
 */
export const ModalLayout =
    ({
         titulo, cuerpo, footer,
         mostrarModal,
         contentClassName = '',
         dialogClassName = '',
         mostrarCloseButton = false,
         onHideModal = () => {},
     }) => {
        return (
            <Modal
                show={mostrarModal}
                onHide={onHideModal}
                dialogClassName={dialogClassName + ' Modal-Style-ModalLayout'}
                contentClassName={contentClassName}
                centered
                // INICIO CAMBIO GSS-050624
                animation={false}
                // FIN CAMBIO GSS-050624
            >
                <ModalDialog>
                    <Modal.Header
                        closeButton={mostrarCloseButton}>
                        <Modal.Title> {titulo} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{cuerpo}</Modal.Body>

                    <Modal.Footer>{footer} </Modal.Footer>
                </ModalDialog>
            </Modal>
        )
    }

ModalLayout.propTypes = {
    titulo: PropTypes.node.isRequired,
    cuerpo: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired,
    mostrarModal: PropTypes.bool.isRequired,
    mostrarCloseButton: PropTypes.bool,
    contentClassName: PropTypes.string,
    dialogClassName: PropTypes.string,
    onHideModal: PropTypes.func,
}