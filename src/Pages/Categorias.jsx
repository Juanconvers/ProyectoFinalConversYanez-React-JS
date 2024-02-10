import { useParams } from 'react-router-dom'
import { useGetProductsByCategory } from '../hooks/useProducts';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

export const Categorias = () => {

    const { nombre } = useParams();

    const {datosProducto} = useGetProductsByCategory(nombre)

    return (
    <ItemListContainer datosProducto={datosProducto}/>
  )
}