import React, {useContext} from 'react'
import classes from './Mealitem.module.css'
import MealItemform from './MealItemform'
import { CartContext } from '../../../store/cart-context'


export default function MealItem(props) {
  const cartCtx = useContext(CartContext);
    const price=`$${props.price.toFixed(2)}`

    const addToCartHandler = (amount)=>{
      cartCtx.addItem({
        id: props.id,
        name:props.name,
        amount: amount,
        price: props.price
      })
    }
  return (
   <li className={classes.meal}>
    <div>
      <h3>{props.name}</h3>
    <div className={classes.description}>{props.descr}</div>
    <div className={classes.price}>{price}</div>
    </div>
    <div>
        <MealItemform id={props.id} onAddToCart={addToCartHandler}/>
    </div>
   </li>
  )
}
