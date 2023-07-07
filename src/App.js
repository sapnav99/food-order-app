import Header from './components/Layout/Header';
import './App.css';
import { useState } from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cart, setCart]=useState(false);

  const showCartHandler=()=>{
    setCart(true);
  }
  const hideCartHandler=()=>{
    setCart(false);
  }  
  
  return (
    <CartProvider>
      {cart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
      </CartProvider>
  );
}

export default App;
