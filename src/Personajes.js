import React from "react";

export default function Characters({characters = []}) {
  return (
    <div className="container">
      <ul>
        {characters.map((item, index) => (
          <li className="box" key={item.id}>
            <img src={item.image}/>
            <h2>{item.name}</h2>
            <p><b>{item.species} / {item.status}</b></p>
            <p>{item.gender} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
