import React from "react";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as DeleteButton } from "../assets/svg/delete.svg";
import { deleteTweetAction } from "../actions/tweetsAction";

export default function TweetList() {
  //useSelector para acceder al valor del estado Redux
  const tweets = useSelector((state) => state.tweets.tweets);

  //Aqui imprimo los tweets
  return tweets.map((tweet, index) => <Tweet key={index} tweets={tweet} />);

  return null;
}

function Tweet(props) {
  const {
    tweets: { id, name, tweet },
  } = props;

  //Inicializo el dispatch para acceder a las acciones
  const dispatch = useDispatch();
  const deleteTweet = (id) => dispatch(deleteTweetAction(id));

  return (
    <Card
      className="mx-auto m-4"
      bg="light"
      style={{
        width: "30rem",
      }}
    >
      <Card.Body>
        <Card.Title>
          {name}
          <DeleteButton
            onClick={() => deleteTweet(id)}
            style={{
              position: "absolute",
              left: "90%",
              width: "25px",
              height: "20px",
            }}
          />
        </Card.Title>
        <Card.Text>{tweet}</Card.Text>
      </Card.Body>
    </Card>
  );
}
