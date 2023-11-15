import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "./../helpers";
import Ahorro from "./../img/icono_ahorro.svg";
import Comida from "./../img/icono_comida.svg";
import Casa from "./../img/icono_casa.svg";
import Gastos from "./../img/icono_gastos.svg";
import Salud from "./../img/icono_salud.svg";
import Suscripciones from "./../img/icono_suscripciones.svg";

const diccionarioIconos = {
  ahorro: Ahorro,
  comida: Comida,
  casa: Casa,
  gastos: Gastos,
  salud: Salud,
  suscripciones: Suscripciones,
};
const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  const { categoria, nombre, id, cantidad, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
        <SwipeAction onClick={() => eliminarGasto(id)} destructive= {true}>
          Eliminar
        </SwipeAction>
    </TrailingActions>
  )
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img alt="icono gasto" src={diccionarioIconos[categoria]} />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">
                Agregado el: {""}
                <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">{cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
