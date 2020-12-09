const initialProps = {
  tweets: [],
};

export default function (state = initialProps, action) {
  switch (action.type) {
    case "ADD_TWEET":
      return {
        ...state,
        tweets: [...state.tweets, action.payload],
      };

    case "DELETE_TWEET":
      return {
        ...state,
        //El método filter() crea un nuevo array con todos los elementos que cumplan
        // la condición implementada por la función dada.
        //Aqui recorro todo el array con los tweets, y si el ID del tweet a eliminar se encuentra, entonces
        //se elimina del array quedando solo los tweets con id diferente al eliminar.
        tweets: state.tweets.filter((tweet) => tweet.id !== action.payload),
      };
    default:
      return state;
  }
}
