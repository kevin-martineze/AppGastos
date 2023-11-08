import { useState } from "react";
import Mensaje from "./Mensaje";

const nuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const [ mensaje, setMensaje ] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault()

    if (!Number(presupuesto) || Number(presupuesto) < 0){
      setMensaje('No es un presupuesto valido')
      return
    }
    setMensaje('')
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Anade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Anadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default nuevoPresupuesto;
