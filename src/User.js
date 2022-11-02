import { todos } from "./todos.js";

export const User = () => {
  const frutas = todos.map((x) => (
    <li key={x.id} className="boxList">
      <div className="userPic">
        <img src={x.image} />
      </div>
      Mi nombre es {x.name}, mi apellido es {x.ape} y mi edad es {x.age}
    </li>
  ));

  return (
    <>
      <ul className="listaUsers">{frutas}</ul>
    </>
  );
};
