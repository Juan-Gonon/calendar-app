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

    const onCloseModal = () => {
        console.log('cerrando modal');
        
    }

    return (
        <Modal
            isOpen={true}
            onRequestClose={onCloseModal}
            style={customStyles}
            contentLabel="Example Modal">
                <h1>Hola Mundo</h1>
                <hr />
                <p>Esto es un modal</p>
            </Modal>
    );
}
