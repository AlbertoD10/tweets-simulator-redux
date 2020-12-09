import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useDispatch } from "react-redux"; //Para poder ejecutar las acciones.
import { openCloseAddTweetModalAction } from "../actions/modalActions"; //Importo las acciones a ejecutar
import logoRedux from "../assets/img/logo.png";

export default function Menu() {
  //Dispatch para ejecutar nuestras acciones.
  const dispatch = useDispatch(); //Primero inicializo el dispatch
  //Inicializo la funcion y le paso el state (true or false) y ejecuto el dispatch y le paso el state
  const openCloseAddTweetModal = (state) => {
    dispatch(openCloseAddTweetModalAction(state));
  };

  //Hago la funcion para abrir el modal.
  const openModal = () => {
    openCloseAddTweetModal(true);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt="Tweets Simulator Redux"
            src={logoRedux}
            width="30"
            height="30"
          />
          Tweets Simulator Redux
        </Navbar.Brand>
        <Button variant="outline-light" onClick={openModal}>
          Nuevo tweet
        </Button>
      </Container>
    </Navbar>
  );
}
