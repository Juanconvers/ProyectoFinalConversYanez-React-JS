import RouterPrincipal from './router/RouterPrincipal';
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from './context/CartContext';



const App = () => {

  return (
      <div style={{width: "100vw", height: "100vh"}}>
        <CartProvider>
          <RouterPrincipal/>
        </CartProvider>
                
      </div> 
  );
};

export default App