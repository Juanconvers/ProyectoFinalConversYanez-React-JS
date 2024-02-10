import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import ItemDetailContainer from "../Pages/ItemDetailContainer";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import { Categorias } from "../Pages/Categorias";
import CreateProduct from "../Pages/CreateProduct";
import Cart from "../Pages/Cart";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/category/:nombre' element={<Categorias/>} /> 
          <Route path='/item/:id' element={<ItemDetailContainer/>} /> 
          <Route path='/checkout' element={<Cart />} />
          <Route path='/create-product' element={<CreateProduct/>} /> 
        </Routes>
      </BrowserRouter>
  )
}

export default RouterPrincipal