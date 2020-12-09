//Esto para conseguir el valor de mi local storage
export const getStateLocalStorage = () => {
  const tweetsStorage = localStorage.getItem("tweets");
  if (tweetsStorage === null) {
    return undefined;
  }
  return JSON.parse(tweetsStorage);
};

//Almaceno los tweets al localStorage
export const setStateLocalStorage = (state) => {
  localStorage.setItem("tweets", JSON.stringify(state)); //Creo tweets en el storage y agrego el estado en json
};
