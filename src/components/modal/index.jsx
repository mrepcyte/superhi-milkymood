import React from 'react'
import {Modal, BG, Close} from './styles'

const ModalComponent = ({toggleModal}) => {
  return (
    <>
      <Modal>
        <Close onClick={toggleModal} />
      </Modal>
      <BG onClick={toggleModal} />
    </>
  )
}

export default ModalComponent
