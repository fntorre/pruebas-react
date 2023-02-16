import React, { useState } from "react";
import { product } from "./product";
import "./styles.css";

export default function Rambo() {
  const priceConfig = JSON.stringify(product.productPrice);
  const numberPrice = Number(priceConfig);

  const name = product.productName;

  const [precio, setPrecio] = useState(numberPrice);
  const [cantidad, setCantidad] = useState(1);

  return (
    <div className="cartProduct">
      <h4>Ficha Producto</h4>
      <img className="brand" alt={product.productName} src={product.productBrandLogo} />
      <h1>{product.productName}</h1>
      <p>{product.productDescription}</p>
      <img src={product.productImage} alt={product.productName} />
      <div>Cantidad: {cantidad}</div>
      <div>
        El precio es $ <b>{precio}</b>
      </div>
      <select className="cuotas">
        <option value="3">3 CUOTAS SIN INTERÉS DE <b>$ {(precio / 3).toFixed(2)}</b></option>
        <option value="6">6 CUOTAS SIN INTERÉS DE <b>$ {(precio / 6).toFixed(2)}</b></option>
        <option value="9">3 CUOTAS SIN INTERÉS DE <b>$ {(precio / 9).toFixed(2)}</b></option>
        <option value="12">12 CUOTAS SIN INTERÉS DE <b>$ {(precio / 12).toFixed(2)}</b></option>
      </select>
      <button
        onClick={() => [
          setPrecio(precio + numberPrice),
          setCantidad(cantidad + 1),
        ]}
      >
        +
      </button>
      <button
        onClick={() => [
          setPrecio(precio - numberPrice),
          setCantidad(cantidad + -1),
        ]}
      >
        -
      </button>

      <button onClick={() => alert("Agregaste al carrito " + cantidad + " x " + name + "/ El precio total es: $ " + precio)}>
        Comprar
      </button>
    </div>
  );
}
