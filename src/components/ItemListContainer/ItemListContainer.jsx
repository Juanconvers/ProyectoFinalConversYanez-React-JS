import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

const ItemListContainer = ({datosProducto}) => {
  return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', flexWrap: 'wrap'}}>
        {datosProducto.map((products) => {
          return (
            <Link to={`/item/${products.id}`} key={products.id}>
              <Card  style={{ width: "18rem" , margin: 15}}>
                <Card.Img style={{ width: "auto", height: 300}} variant="top" src={products.thumbnail} />
                <Card.Body>
                  <Card.Title>{products.title}</Card.Title>
                  <Card.Text>
                  {products.description}
                  </Card.Text>
                  <div>{products.price}</div>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </div>
  );
};

export default ItemListContainer;