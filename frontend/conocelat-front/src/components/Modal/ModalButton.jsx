import React, { useContext, useState } from 'react'
import Modal from "react-modal";
import { UserContext } from '../../context/userContext';

const customStyles = {
    content: {
        width: "40%", // Ajusta el ancho de la modal
        height: "75%", // Ajusta la altura de la modal
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
};

Modal.setAppElement("#root");

export const ModalButton = ({ isOpen, onCloseModal }) => {
    return (
        <>
        <Modal
          isOpen={isOpen}
          onRequestClose={onCloseModal}
          style={customStyles}
        >
          <h1> Nuevo evento </h1>
          <button onClick={onCloseModal}>X</button>
          <hr />
          <form className="container" >
            <div>
                csdsd
            </div>
            <div>
                sdsdsd
            </div>
          </form>
        </Modal>
      </>
    );
};