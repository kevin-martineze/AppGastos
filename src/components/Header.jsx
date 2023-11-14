import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";
// import PropTypes from 'prop-types';

const Header = ({
  gastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValidPresupuesto ? (
        <ControlPresupuesto
          gastos={gastos}
          presupuesto={presupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};

// Header.propTypes = {
//   presupuesto: PropTypes.number.isRequired,
//   setPresupuesto: PropTypes.number.isRequired,
//   isValidPresupuesto: PropTypes.number.isRequired,
//   setIsValidPresupuesto: PropTypes.number.isRequired
// }

export default Header;
