import React from 'react'

export const Search = () => {
  return (
    <div className="data__Wheregoing">
        <div className="data__inputs">
        <input
            className="input-data-select"
            placeholder="seleccione el estado"
            type="text"
        />
        <input
            className="input-data"
            placeholder="fecha de ida"
            type="date"
        />
        <input
            className="input-data"
            placeholder="fecha de retorno"
            type="date"
        />
        <button className="buttom__search">Buscar</button>
        </div>
    </div>
  )
}
