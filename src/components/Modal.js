import React from "react";
import { Modal as ModalB } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"; //Dispatch para cerrar el modal; selector para acceder al valor del estado del modal
import { openCloseAddTweetModalAction } from "../actions/modalActions"; //Importo la accion para cerrar el modal

export default function Modal(props) {
  const { children } = props;

  //Dispatch para ejecutar nuestras acciones
  const dispatch = useDispatch(); //Inicializo el dispatch
  const closeAddTweetModal = (state) => {
    dispatch(openCloseAddTweetModalAction(state));
  };

  //useSelector para acceder a un valor en el storage
  const isOpenModal = useSelector((state) => state.modals.stateModalAddTweet);

  return (
    <ModalB
      show={isOpenModal}
      onHide={() => {
        closeAddTweetModal(false);
      }}
      centered
      size="lg"
    >
      {children}
    </ModalB>
  );
}
