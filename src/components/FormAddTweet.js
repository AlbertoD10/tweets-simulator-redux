import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddTweetAction } from "../actions/validationsActions";
import { openCloseAddTweetModalAction } from "../actions/modalActions";
import { addTweetAction } from "../actions/tweetsAction";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export default function FormAddTweet() {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });

  //Inicializacion del distpach y ejecucion de las acciones
  const dispatch = useDispatch();
  const errorForm = (state) => dispatch(validationFormAddTweetAction(state));
  const addTweet = (state) => dispatch(addTweetAction(state));
  const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state));
  //UseSelector para acceder al valor del ESTADO
  const errorFormValue = useSelector(
    (state) => state.validations.errorFormAddTweet
  );

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, tweet } = formValue;

    if (!name || !tweet) {
      errorForm(true);
    } else {
      errorForm(false);
      console.log("Tweet enviado.");
      //Agrego el tweet con id y fecha al store.
      addTweet({
        id: uuidv4(),
        name,
        tweet,
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      });
      //Ejecuto la funcion para cerrar el modal al añadir el tweet
      closeModal(false);
    }
  };

  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form className="m-3" onSubmit={onSubmit} onChange={onChange}>
      <Form.Group>
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" name="name" placeholder="Escriba su nombre" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Mensaje:</Form.Label>
        <Form.Control
          as="textarea"
          name="tweet"
          rows="3"
          placeholder="Escriba el mensaje a publicar"
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Publicar
      </Button>
      {errorFormValue && (
        <Alert className="mt-3" variant="danger">
          Todos los campos son obligatorios
        </Alert>
      )}
    </Form>
  );
}
