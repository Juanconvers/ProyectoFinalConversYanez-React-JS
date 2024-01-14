import { useEffect, useState } from 'react'

import RouterPrincipal from './router/RouterPrincipal';

import "bootstrap/dist/css/bootstrap.min.css";


import { getProducts } from "./services";

const App = () => {

  return (
      <div style={{width: "100vw", height: "100vh"}}>
        <RouterPrincipal/>
                
      </div> 
  );
};

export default App