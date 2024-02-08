
import Card from "react-bootstrap/Card";
import { useGetProductsById } from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount/ItemCount";

export const ItemDetailContainer = () => {

  const { id } = useParams()

  const {datoProducto} = useGetProductsById("products", id)
  
  return (
    <Card key={datoProducto.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={datoProducto.thumbnail} />
      <Card.Body >
        <Card.Title>{datoProducto.title}</Card.Title>
        <Card.Text>{datoProducto.description}</Card.Text>
        <div>{datoProducto.price}</div>
        <ItemCount productId={datoProducto.id} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetailContainer