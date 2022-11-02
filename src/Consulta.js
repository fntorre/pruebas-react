import { useEffect, useState } from "react";

export const ApiTest = () => {
  const [per, setPersonajes] = useState(["Cargando resultados"]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const personajes = await data.json();
    setPersonajes(personajes);
  };

  return (
    <div>
      <ul>
        {per.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </div>
  );
};
