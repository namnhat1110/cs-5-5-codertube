import { Modal } from 'react-bootstrap'

import YoutubeEmbed from "../components/YoutubeEmbed"

const ModalBox = (props) => {


    return (
        <div>
            <Modal
                size="xl"
                show={props.modalOpen}
                onHide={props.setModalOpen}
                aria-labelledby="example-modal-sizes-title-xl"

            >
                <Modal.Body><YoutubeEmbed embedId={props.trailerKey.key} /></Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalBox