import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

//This is a temporary object named Product until we do not fetch the product from the redux we are just initializing it to have some data till then
// const product={
//     name:"Blue Tshirt",
//     images: [{ url:"https://i.ibb.co/DRST11n/1.webp"}],
//     price:"3000",
//     _id:"hitesh"
// }

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);
    console.log(products)
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
        console.log("fetching!!!");
    }, []);

    return (
        // Whether we enclose it into a fragment or <></> its one and the same thing, we generally write fragment to make it more readable
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title="ECOMMERCE" />

                    <div className="banner">
                        <p>Welcome to Ecommerce</p>
                        <h1>FIND AMAZING PRODUCTS BELOW</h1>

                        <a href="#container">
                            <button>
                                Scroll <CgMouse />
                            </button>
                        </a>
                    </div>

                    <h2 className="homeHeading">Featured Products</h2>

                    <div className="container" id="container">
                        {/* <ProductCard product={product}/>
                    <ProductCard product={product}/>
                    <ProductCard product={product}/>
                    <ProductCard product={product}/>
                    <ProductCard product={product}/>
                    <ProductCard product={product}/>
                    <ProductCard product={product}/>
                    <ProductCard product={product}/> */}

                   {products &&
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                        </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Home;