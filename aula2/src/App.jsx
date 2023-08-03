import React from 'react';

export default function App() {
  const [fields, setFields] = React.useState({
    titulo: '',
    sinopse: 'O filme é de terror',
    votos: ''
  });

  const adicionar = event => {
    event.preventDefault()
    console.log('add', fields);
  }

  const atualizar = event => {
    setFields({...fields, [event.target.id]: event.target.value})
  }
  

  return (
    <>
      <div className="container">
        <h2 className="mt-3 mb-3">Cadastro de Filmes</h2>
        <form className="row g-3">
          <div className="col-md-12">
            <label htmlFor='titulo' className="form-label">Titulo</label>
            <input 
            id='titulo' 
            type="text" 
            className="form-control" 
            value={fields.titulo} 
            onChange={atualizar}/>
          </div>
          <div className="col-md-12">
            <label htmlFor="" className="form-label">Sinopse</label>
            <input 
            id='sinopse'
            type="text" 
            className="form-control" 
            value={fields.sinopse}  
            onChange={atualizar}/>
          </div>
          <div className="col-md-12">
            <label htmlFor="" className="form-label">Votos</label>
            <input 
            id='votos'
            type="text" 
            className="form-control" 
            value={fields.votos} 
            onChange={atualizar}/>
          </div>
          <div className="col-md-4">
          <button className="btn btn-primary" onClick={adicionar}>Adicionar</button>
          </div>
        </form>
      </div>
    </>
  )
}
