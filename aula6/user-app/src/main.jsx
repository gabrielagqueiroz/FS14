import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import UsuariosTable from './pages/UsuariosTable';
import UsuarioForm from './pages/UsuarioForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/usuarios",
    element: <UsuariosTable/>,
  },
  {
    path: "/usuario/:id",
    element: <UsuarioForm/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
