import React from 'react'


export const MenuBar = () => {
/*   const navigate = useNavigate()

  const listarUser = () => {
    event.preventDefault()
    console.log('listar')
    navigate('/usuarios')
  } */

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a /* onClick={listarUser} */ className="nav-link" href="/usuarios">Usuários</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cadastro">Cadastro</a>
            </li>
           {/*  <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
