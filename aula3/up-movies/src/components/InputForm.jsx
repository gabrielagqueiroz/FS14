import React from 'react'

export const InputForm = (props) => {
  let nomeLabel = props.nome
    .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()

  console.log(props)
  return (
    <>
      <div className={`col-md-${props.width}`}>
        <label htmlFor={nomeLabel} className="form-label">{props.nome}</label>
        <input
          id={nomeLabel}
          type="text"
          className="form-control"
          value={props.value}
          onChange={props.change} />
      </div>
    </>
  )
}
