import Modal from "../../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul>
      {[{ id: "b1", name: "Dell", amount: 2, price: 1299.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.66</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;