import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul id="menurutas">
            <li>
                <a href="/">Home</a> | 
            </li>
            <li>
                <a href="/cine">Cine</a> | 
            </li>
            <li>
                <a href="/musica">Música</a> | 
            </li>
            <li>
                <a href="/formsimple">Form simple</a> | 
            </li>
            <li>
              <a href="/collatz">Collatz</a> | 
            </li>
            <li>
              <a href="/tablamultiplicar">Tabla multiplicar</a> | 
            </li>
            <li>
              <a href="/seleccionmultiple">Selección múltiple</a>
            </li>
        </ul>
      </div>
    )
  }
}
