
import Card from 'react-bootstrap/Card';
import Cart from "../../../assets/img/2-Icon-commerce-cart-market2.svg"

import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';

const Cartwidget = () => {
    const { cartElements } = useContext(CartContext)
    // console.log(cartElements);
    const totalQuantity = cartElements.reduce((total, item) => total + item.quantity, 0)


    return (
        <Link to="/checkout">
            <Card style={{ width: '100', margin: 30, borderRadius: 10 }}>
                <Card.Body style={{ background: "#ffd700", width: 150, height: 60, padding: "5", borderRadius: 10, display: "flex", flexFlow: "row", justifyContent: "center", alignItems: "center" }}>
                    <div href="#">
                        <img src={Cart} alt="Cart" style={{ width: 40, padding: 1 }} />
                    </div>

                    <span style={{ height: 25, width: 20, display: 'flex', align: 'center', justifyContent: 'center', backgroundColor: 'white', color: "black", fontSize: "1.3rem", fontWeight: "bold", borderRadius: 4, margin: 4 }}>{totalQuantity}</span>

                </Card.Body>
            </Card>
        </Link>
    )
}

export default Cartwidget;
