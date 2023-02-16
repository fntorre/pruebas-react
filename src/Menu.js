import React from "react";
import categorias from "./categorias";
import "./styles.css"

export default function Menu() {
  return (
    <nav className="foxnav">
    <ul className="menu">
      {categorias.map((x) => (
        <a href={x.url}>
          <li className="primer">
            {x.nombre}
            <ul className="submenu">
              {x.estilos.map((i) => (
                <a href={i.url}>
                  <li>{i.nombre}</li>
                </a>
              ))}
            </ul>
          </li>
        </a>
      ))}
    </ul>
    </nav>
  );
}
