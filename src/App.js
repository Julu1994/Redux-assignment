import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
    const toggleShow = useSelector((state) => state.toggle.showToggle);
    return (
        <>
            <Layout />
            {toggleShow && <Cart />}

            <Products />
        </>
    );
}

export default App;
