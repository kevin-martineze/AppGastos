import { useState } from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import { generarId } from './helpers'
import IconoGasto from "./img/nuevo-gasto.svg";


function App() {

  const [gastos, setGastos] = useState([])
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 200);
  };

  const guardarGasto = gasto => {
    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 200);
  } 

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {/* Si el presupuesto es valido muestra el icono de agregar presupuesto */}
      {isValidPresupuesto && (
        <>
        <main>
        <ListadoGastos gastos={gastos}/>
        </main>
        <div className="nuevo-gasto">
          <img
            src={IconoGasto}
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto = {guardarGasto}
        />
      )}
    </div>
  );
}

export default App;
