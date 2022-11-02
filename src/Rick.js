import React, { useEffect, useState } from "react";
import Characters from "./Personajes";

export function RM() {

  const [personajes, setPersonajes] = useState([])

  const url = "https://rickandmortyapi.com/api/character"
  const fetchPersonajes = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results))
      .catch((error) => console.log(error));
      console.log(personajes)
  };

  useEffect(() => {
    fetchPersonajes(url);
  }, []);

  return <>
  <Characters characters={personajes} />
  </>;
}
