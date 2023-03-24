import React, { useState, useEffect } from 'react';

function ConvertirPesosADolares() {
  const [pesos, setPesos] = useState('');
  const [dolares, setDolares] = useState('');
  const [precioDolar, setPrecioDolar] = useState('');

  useEffect(() => {
    obtenerPrecioDolar();
  }, []);

  async function obtenerPrecioDolar() {
    try {
      const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
      const data = await response.json();
      const precio = parseFloat(data[1].casa.venta.replace(',', '.'));
      setPrecioDolar(precio);
    } catch (error) {
      console.error(error);
    }
  }

  function handleInputChange(event) {
    const pesos = event.target.value;
    setPesos(pesos);
    const dolares = (pesos / precioDolar).toFixed(2);
    setDolares(dolares);
  }

  return (
    <div>
      <form>
        <label htmlFor="pesos">Monto en pesos argentinos:</label>
        <input type="number" id="pesos" name="pesos" value={pesos} onChange={handleInputChange} />
        <br />
        <label htmlFor="dolares">Monto en dólares:</label>
        <input type="number" id="dolares" name="dolares" value={dolares} readOnly />
        <br /><br />
       
      </form>
    </div>
  );
}

export default ConvertirPesosADolares;
