import React from "react";

const nuevoPresupuesto = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input className="nuevo-presupuesto" type="text"/>
        </div>
      </form>
    </div>
  );
};

export default nuevoPresupuesto;
