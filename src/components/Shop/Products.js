import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const MyDummyData = [
    {
        title: "iPhone 14",
        price: 800,
        description: "This is an amazing phone with lots of features",
        id: 101,
    },
    {
        title: "iPhone 14 pro",
        price: 900,
        description:
            "This is an amazing phone with lots of features and advanced camara",
        id: 102,
    },
    {
        title: "iPhone 14 pro max",
        price: 1200,
        description:
            "This is an amazing phone with lots of features and massive storage ",
        id: 103,
    },
    {
        title: "iPhone 14 plus",
        price: 1400,
        description:
            "This is an amazing phone with lots of features and bla bla bla ",
        id: 104,
    },
    {
        title: "iPhone 14 bla",
        price: 1800,
        description: "This is an amazing phone with lots of bla bla bla",
        id: 105,
    },
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {MyDummyData.map((item) => (
                    <ProductItem
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        productObj={item}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
