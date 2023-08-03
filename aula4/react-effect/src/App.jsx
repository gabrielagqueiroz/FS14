import React, { useEffect } from 'react'
import { Card } from './components/Card';

function App() {
  const [count, setCount] = React.useState(0);
  const [lista, setLista] = React.useState([]);

 /*  const incrementar = () => {
    setCount(count + 10)
  }
 */
/*   useEffect(() => {
    console.log('renderizou')
  })

  useEffect(() => {
    if(count === 50){
      console.log('renderizou 2')
    }
  }, [count])
 */

  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/photos')
   .then(res => res.json())
   .then(data => {
    setLista(data.splice(0, 10))
    /* console.log(data) */
   })
    }, [])


  return (
    <div className='container'>
    {/* <h1>{`contador: ${count}`}</h1>
       <button onClick={incrementar}>+10</button>
 */}

      <h4>Album de fotos</h4>

      <div className='row row-cols-1 row-cols-md-5 g-6'>
      {lista.map(cada => <Card key={cada.id} img={cada.thumbnailUrl}  title={cada.title}  text={cada.title}/>
        /* return(
          <Card 
          key={cada.id}
          img={cada.thumbnailUrl}
          title={cada.id}
          text={cada.title}
        />
        ) */
        )}
      </div>
    </div>
  )
}

export default App
