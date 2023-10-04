import { useContext, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";

import { PublicContext } from "../../contexts/PublicationContext";
import Spinner from "../Spinner/Spinner";
import ProductItem from "./ProductItem";
import { initialState, reducer } from "./data/data";

import styles from "./styles/productsCatalog.module.css";
import resp from "./styles/responsive.module.css";

const ProductsCatalog = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { getAllProducts } = useContext(PublicContext);

    const totalPages = Math.ceil(state.products.length / 12);
    const indexOfLastItem = state.currentPage * 12;
    const indexOfFirstItem = indexOfLastItem - 12;
    const currentItems = state.products.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        dispatch({ type: "SET_LOADING", value: true });
        setTimeout(() => {
            getAllProducts()
                .then(result => {
                    dispatch({ type: "SET_LOADING", value: false });
                    dispatch({ type: "SET_PRODUCTS", products: result.reverse() });
                });
        }, [1000]);
    }, [getAllProducts]);

    return (
        <div className={`${styles["main-wrapper"]} ${resp["main-wrapper"]}`}>
            <div className={`${styles["links-wrapper"]} ${resp["links-wrapper"]}`}>
                <Link
                    className={`${styles["catalog-recipes"]} ${resp["catalog-recipes"]}`}
                    to="/catalog-recipes"
                >
                    Catalog Recipes
                </Link>
                <Link
                    className={`${styles["catalog-products"]} ${resp["catalog-products"]}`}
                    to="/catalog-products"
                >
                    Catalog Products
                </Link>
            </div>
            {state.currentPage > 1 && (
                <button
                    className={`${styles["btn-pagination"]} ${resp["btn-pagination"]}`}
                    onClick={() => 
                        dispatch({ type: "SET_CURRENT_PAGE", currentPage: state.currentPage - 1 })
                    }
                >
                    Previous Page
                </button>
            )}
            {state.currentPage < totalPages && (
                <>
                    <button
                        className={`${styles["btn-pagination"]} ${resp["btn-pagination"]}`}
                        onClick={() => 
                            dispatch({ type: "SET_CURRENT_PAGE", currentPage: state.currentPage + 1 })
                        }
                    >
                        Next Page
                    </button>
                </>
            )}
            <h1 className={`${styles["curr-page"]} ${resp["curr-page"]}`}>Current Page: {state.currentPage}</h1>
            <section className={`${styles["catalog"]} ${resp["catalog"]}`}>
                {state.loading
                    ? <Spinner />
                    :
                    <>
                        {
                            state.products.length > 0
                                ?
                                <>
                                    {currentItems.map(product => 
                                        <ProductItem key={product._id} {...product} />)
                                    }
                                </>
                                :
                                <>
                                    <h1
                                        className={`${styles["no-content"]} ${resp["no-content"]}`}
                                    >
                                        There are no products created yet.
                                    </h1>
                                </>
                        }
                    </>
                }
            </section>
        </div>

    );
}

export default ProductsCatalog;