import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';

const Home = () => {
 
    const {datosProducto} = useGetProducts();

    return (
    <ItemListContainer datosProducto={datosProducto}/>
  )
}

export default Home