import React from 'react'
/* import './App.css' */

function App() {
  const [sobrenome, setSobrenome] = React.useState('Queiroz')
  const [nome, setNome] = React.useState('Morfar')

  const morfar = () => {
    setSobrenome(sobrenome.toUpperCase())
    setNome('Desmorfar')

    if(nome === 'Desmorfar'){
      setSobrenome(sobrenome.toLowerCase())
      setNome('Morfar')
    }
  }

  /* let sobrenome = 'Queiroz' */

  return (
    <>
    <h1>Gabriela</h1>
    <div>{sobrenome}</div>
    <br />
    <button onClick={morfar}>{nome}</button>
    </>
  )
}

export default App
