import classes from "./CartItem.module.css";
import cartSlice from "../Redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
    const { title, quantity, total, price, removeObj } = props;
    const removeDispatcher = useDispatch();

    const clickToRemove = () => {
        removeDispatcher(cartSlice.actions.RemovingFromCart(removeObj));
    };

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{" "}
                    <span className={classes.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={clickToRemove}>-</button>
                    <button>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
