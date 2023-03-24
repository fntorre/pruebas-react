import React, { useState } from "react";

const productList = [
  {
    id: 1,
    name: "Producto 1",
    price: 10.99,
  },
  {
    id: 2,
    name: "Producto 2",
    price: 19.99,
  },
  {
    id: 3,
    name: "Producto 3",
    price: 5.99,
  },
];

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Lista de productos:</h2>
      {productList.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
      <h2>Carrito:</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};

export default ProductList;
