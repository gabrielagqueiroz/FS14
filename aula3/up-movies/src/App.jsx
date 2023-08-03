import React from 'react';
import { InputForm } from './components/InputForm';
import { Button } from './components/Button';

export default function App() {
  const [fields, setFields] = React.useState({
    titulo: '',
    sinopse: '',
    genero: '',
    diretor: '',
    votos: ''
  });

  /* const adicionar = event => {
      event.preventDefault()
      console.log('add', fields);
    }
   */
  const atualizar = event => {
    setFields({ ...fields, [event.target.id]: event.target.value })
  }

  const enviar = event => {
    event.preventDefault()
    console.log(fields)
  }

  const limpar = event => {
    event.preventDefault()
    console.log('limpar')
  }


  return (
    <>
      <div className="container">
        <h2 className="mt-3 mb-3">Cadastro de Filmes</h2>
        <form className="row g-3" onSubmit={enviar}>

          <InputForm
            nome='Titulo'
            width={12}
            value={fields.titulo}
            change={atualizar}
          />
          <InputForm
            nome='Sinopse'
            width={12}
            value={fields.sinopse}
            change={atualizar}
          />
          <InputForm
            nome='Gênero'
            width={4}
            value={fields.genero}
            change={atualizar}
          />
          <InputForm
            nome='Diretor'
            width={4}
            value={fields.diretor}
            change={atualizar}
          />
          <InputForm
            nome='Votos'
            width={4}
            value={fields.votos}
            change={atualizar}
          />

          <Button
            tipo={'submit'}
            nome='Enviar'
            width={1}
          />
          <Button
            tipo={'reset'}
            nome='Limpar'
            width={1}
          />
        </form>
      </div>
    </>
  )
}


