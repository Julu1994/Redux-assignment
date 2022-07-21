import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import toggleSlice from "../Redux/toggleSlice";
import { useSelector } from "react-redux";

const CartButton = (props) => {
    const dispather = useDispatch();
    const productAmount = useSelector((state) => state.cart.totalQuantity);
    const toggleDispatcher = () => {
        dispather(toggleSlice.actions.ToggleActivator());
    };

    return (
        <button className={classes.button} onClick={toggleDispatcher}>
            <span>My Cart</span>
            <span className={classes.badge}>{productAmount}</span>
        </button>
    );
};

export default CartButton;
