import { useContext, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/UserContext";
import { initialState, reducer } from "./data/data";
import RecipeCatalogItem from "./RecipeItem";
import Spinner from "../Spinner/Spinner";

import styles from "./styles/recipesCatalog.module.css";
import resp from "./styles/responsive.module.css";

const RecipesCatalog = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { getAllRecipes } = useContext(AuthContext);

    const totalPages = Math.ceil(state.recipes.length / 12);
    const indexOfLastItem = state.currentPage * 12;
    const indexOfFirstItem = indexOfLastItem - 12;
    const currentItems = state.recipes.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        dispatch({ type: "SET_LOADING", value: true });
        setTimeout(() => {
            getAllRecipes()
                .then(result => {
                    dispatch({ type: "SET_RECIPES", recipes: result.reverse() });
                    dispatch({ type: "SET_LOADING", value: false });
                });
        }, 1000);
    }, [getAllRecipes]);

    return (
        <div className={`${styles["main-wrapper"]} ${resp["main-wrapper"]}`}>
            <div className={`${styles["links-wrapper"]} ${resp["links-wrapper"]}`}>
                <Link className={`${styles["catalog-recipes"]} ${resp["catalog-recipes"]}`} to="/catalog-recipes" replace>
                    Catalog Recipes
                </Link>
                <Link className={`${styles["catalog-products"]} ${resp["catalog-products"]}`} to="/catalog-products" replace>
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
            <h1 className={styles["curr-page"]}>Current Page: {state.currentPage}</h1>
            <section className={`${styles["catalog"]} ${resp["catalog"]}`}>
                {state.loading
                    ?
                    <Spinner />
                    :
                    <>
                        {state.recipes.length > 0
                            ?
                            currentItems.map(recipe => (
                                <RecipeCatalogItem key={recipe._id} {...recipe} />
                            ))
                            :
                            <>
                                <h1
                                    className={`${styles["no-content"]} ${resp["no-content"]}`}
                                >
                                    There are no recipes created yet.
                                </h1>
                            </>
                        }
                    </>
                }
            </section>
        </div>

    );
}

export default RecipesCatalog;