import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import toggleSlice from "../Redux/toggleSlice";

const CartButton = (props) => {
    const dispather = useDispatch();
    const toggleDispatcher = () => {
        dispather(toggleSlice.actions.ToggleActivator());
    };

    return (
        <button className={classes.button} onClick={toggleDispatcher}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
