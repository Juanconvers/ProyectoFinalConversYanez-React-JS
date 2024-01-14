import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import ItemDetailContainer from "../Pages/ItemDetailContainer";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import { Categorias } from "../Pages/Categorias";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/category/:id' element={<Categorias/>} /> 
          <Route path='/item/:id' element={<ItemDetailContainer/>} /> 
        </Routes>
      </BrowserRouter>
  )
}

export default RouterPrincipal