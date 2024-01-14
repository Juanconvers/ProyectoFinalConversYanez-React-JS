import { useParams } from 'react-router-dom'
import { useGetProductsByCategory } from '../hooks/useProducts';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

export const Categorias = () => {

    const { id } = useParams();

    const {datosProducto} = useGetProductsByCategory(id)

    return (
    <ItemListContainer datosProducto={datosProducto}/>
  )
}