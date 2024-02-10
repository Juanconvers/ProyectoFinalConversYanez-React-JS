
import Card from "react-bootstrap/Card";
import { useGetProductsById } from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount/ItemCount";

export const ItemDetailContainer = () => {

  const { id } = useParams()

  const {datoProducto} = useGetProductsById(id)

  return (
    <div style={{display: "flex", align: "center", justifyContent: "center"}}>
      <Card key={datoProducto.id} style={{ width: "25rem" }}>
        <Card.Img variant="top" src={datoProducto.thumbnail} />
        <Card.Body >
          <Card.Title>{datoProducto.title}</Card.Title>
          <Card.Text>{datoProducto.description}</Card.Text>
          <div>{datoProducto.price}</div>
          <ItemCount productTitle={datoProducto.title} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer