const initialProps = {
  stateModalAddTweet: false,
};

export default function (state = initialProps, action) {
  switch (action.type) {
    //Abrir y cerrar modal
    case "STATE_ADD_TWEET_MODAL":
      return {
        ...state,
        stateModalAddTweet: action.payload,
      };
    default:
      return state;
  }
}
