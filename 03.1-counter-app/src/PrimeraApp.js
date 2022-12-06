//FC
// import { Fragment } from "react"
import PropTypes from 'prop-types'

// const PrimeraApp = ({ saludo, subtitulo = 'Soy un subtitulo' }) => {
const PrimeraApp = ({ saludo, subtitulo }) => {
	// if(!saludo) {
	//     throw new Error('El saludo es necesario')
	// }

	//Lo mismo que poner Fragments
	return (
		<>
			<h1>{saludo}</h1>
			{/* <pre>{ JSON.stringify(saludo, null, 3)}</pre> */}
			<p>{subtitulo}</p>
		</>
	)
	//Fragment evita que aparezca tenga que encerrar en Div
	// return (
	//     < Fragment>
	//         <h1>Hola Mundo</h1>
	//         <p>Mi primera aplicación</p>
	//     </ Fragment>
	// )
	//para poner más de una etiqueta hay que encerrarla en div
	// return (
	//     <div>
	//         <h1>Hola Mundo</h1>
	//         <p>Mi primera aplicación</p>
	//     </div>
	// )
}

//Forma de obligar a otors que utilicen mis componentes a
//entender qué tipo de valores son necesarios para que
//el componente funcione correctamente
PrimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
	subtitulo: 'Mi primera App de React',
}

export default PrimeraApp
