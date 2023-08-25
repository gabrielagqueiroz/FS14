import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import { Outlet } from "react-router-dom"


function App() {
  return (
   <div>
    <Container>
    <Menu/>
    <br /><br />
    <Outlet/>
    <Footer/>
    </Container>
   </div>
  )
}

export default App
