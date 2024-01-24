
import Card from 'react-bootstrap/Card';
import Cart from "../../assets/img/2-Icon-commerce-cart-market2.svg"

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cartwidget = () => {
   const {count} = useContext(CartContext)
   console.log(count);
   return (
        <Card style={{ width: '100' }}>
            <Card.Body style={{background: "#ffd700", padding: "10", borderRadius: "10", display: "flex", flexFlow: "row", justifyContent: "center", alignItems: "center"}}>
                <div href="#">
                    <img src={Cart} alt="Cart" style={{width: 70, padding:15}}/>
                </div>
{/*                
                <span style={{color: "black", fontSize: "1.3rem", fontWeight: "bold"}}>{count}</span> 
                 */}
            </Card.Body>
        </Card>
    )
}

export default Cartwidget;
