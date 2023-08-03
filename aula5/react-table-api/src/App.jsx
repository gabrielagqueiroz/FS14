import React from 'react';
import Table from './componentes/Table';

function App() {
  const colunas = ['ID', 'Name', 'Email', 'Username', 'Website', 'Address']
  const [data, setData] = React.useState([]);
  

  React.useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setData(data)
      //console.log(data)
    })
  }, [])
  

  return (
    <div className="container">
    <h1>Users Table</h1>
      <Table colunas={colunas} data={data}/>
    </div>
  )
}

export default App
