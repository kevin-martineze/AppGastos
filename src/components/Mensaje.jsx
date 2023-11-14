
// import PropTypes from 'prop-types';

const Mensaje = ({children, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>{children} </div>
  )
}

// Mensaje.propTypes = {
//   children: PropTypes.number.isRequired,
//   tipo: PropTypes.number.isRequired,
// }

export default Mensaje
