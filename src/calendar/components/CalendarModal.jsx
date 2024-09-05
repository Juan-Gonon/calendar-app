import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

export function CalendarModal() {
    const [isOpen, setIsOpen] = useState(true);

    const onCloseModal = () => {
        // console.log('cerrando modal');
        setIsOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName='modal-fondo'
            closeTimeoutMS={200}
            >
            <h1>Hola Mundo</h1>
            <hr />
            <p>Esto es un modal</p>
        </Modal>
    );
}
