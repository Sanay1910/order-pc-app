import React, {useContext} from "react";
import classes from "./ComputerItem.module.css";
import ComputerItemForm from "../ComputerItemForm/ComputerItemForm";
import CartContext from "../../store/cart-context";

function ComputerItem(props) {

    const cartCtx = useContext(CartContext);

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };

  return (
    <li className={classes.computer}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.descryption}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <ComputerItemForm onAddToCart={addToCartHandler}/>
    </li>
  );
}

export default ComputerItem;
