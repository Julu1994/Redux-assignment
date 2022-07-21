import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import cartSlice from "../Redux/cartSlice";

const ProductItem = (props) => {
    const { title, price, description, productObj } = props;
    const dispatcher = useDispatch();

    const clickToCart = () => {
        dispatcher(cartSlice.actions.AddingToCart(productObj));
    };

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={clickToCart}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
