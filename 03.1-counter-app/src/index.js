// import React from 'react'
// import PrimeraApp from './PrimeraApp'
import ReactDOM from 'react-dom'
import CounterApp from './CounterApp'

import './index.css'

// const saludo = <h1>Hola Mundo</h1>

const divRoot = document.querySelector('#root')

//Qué quiero poner, dónde lo quiero poner
// ReactDOM.render(<PrimeraApp saludo='Hola Mundo' />, divRoot)

// ReactDOM.render(<PrimeraApp saludo='Hwola soy Ignacio' />, divRoot)
ReactDOM.render(<CounterApp />, divRoot)
