import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGetProductsById } from "../hooks/useProducts";
import { useParams } from "react-router-dom";

useGetProductsById

const ItemDetailContainer = () => {

  const {id} = useParams() 
  
  const {datoProducto} = useGetProductsById(id)

  return (
    <Card key={datoProducto.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={datoProducto.thumbnail} />
      <Card.Body>
        <Card.Title>{datoProducto.title}</Card.Title>
        <Card.Text>
          {datoProducto.description}
        </Card.Text>
        <div>
          {datoProducto.price}
        </div>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  )
}

export default ItemDetailContainer