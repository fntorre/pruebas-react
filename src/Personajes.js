import React from "react";

export default function Characters({characters = []}) {
  return (
    <div className="container">
      <ul>
        {characters.map((item, index) => (
          <li className="box" key={item.id}>
            <img src={item.image}/>
            <h4>{item.name}</h4>
            <p>{item.species} / {item.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
