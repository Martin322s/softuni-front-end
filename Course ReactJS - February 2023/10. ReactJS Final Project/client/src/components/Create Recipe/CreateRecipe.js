import { useCallback, useContext, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/UserContext";
import * as service from "../../services/recipeService";
import { initData, reducer } from "./data/data";

import styles from "./styles/createRecipe.module.css";
import background from "./images/backgr.jpg";

const CreateRecipe = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initData);
    const token = user.accessToken;
    const userId = user._id;

    const changeHandler = useCallback((ev) => {
        const { name, value } = ev.target;
        dispatch({ type: 'SET_FIELD', field: name, value });
    }, []);

    const submitHandler = (ev, data, token, userId) => {
        ev.preventDefault();

        const ingredients = state.ingredients.split("\n");
        if (Object.values(data).some(x => x === "")) {
            alert("All fields are required!");
        } else {
            service.createRecipe(token, { ...data, ingredients, _ownerId: userId })
                .then(() => navigate("/catalog-recipes", { replace: true }));
        }
    };

    return (
        <>
            <section className={styles["create-page"]}>
                <article className={styles["info"]}>
                    <ul className={styles["steps"]}>
                        <li>Create recipe information:</li>
                        <li>
                            <p>
                                The title specifies the name of the recipe.
                            </p>
                        </li>
                        <li>
                            <p>
                                Ingredients list: A list of all the ingredients required for the recipe.
                                NOTE: Every ingredient must be on the new line!
                            </p>
                        </li>
                        <li>
                            <p>
                                Preparation: Step-by-step instructions on how to prepare the recipe.
                            </p>
                        </li>
                        <li>
                            <p>
                                Category - specifies the type of the recipe - Appetizers, Soups and
                                stews, Salads, Main dishes, Side dishes, Desserts, Beverages and ect.
                            </p>
                        </li>
                    </ul>
                </article>
                <form
                    className={styles["create"]}
                    onSubmit={(ev) => submitHandler(ev, state, token, userId)}
                >
                    <h1 className={styles["create-heading"]}>Create Recipes</h1>
                    <div className="links">
                        <Link className={styles["create-recipe"]} to="/create-recipes" replace>
                            Create Recipe
                        </Link>
                        <Link className={styles["create-product"]} to="/create-products" replace>
                            Create Product
                        </Link>
                    </div>
                    <label htmlFor="title">Title:</label>
                    <div>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title..."
                            value={state.title}
                            onChange={(ev) => changeHandler(ev)}
                            required
                        />
                    </div>
                    <label htmlFor="category">Category:</label>
                    <div>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Main dish...."
                            value={state.category}
                            onChange={(ev) => changeHandler(ev)}
                            required
                        />
                    </div>
                    <label htmlFor="imageUrl">Image Url:</label>
                    <div>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="https://..."
                            value={state.imageUrl}
                            onChange={(ev) => changeHandler(ev)}
                            required
                        />
                    </div>
                    <label htmlFor="ingredients">Ingredients:</label>
                    <p className={styles["ingredients-note"]}>NOTE: Every ingredient must be on the new line!</p>
                    <div>
                        <textarea
                            cols={20}
                            rows={5}
                            id="ingredients"
                            name="ingredients"
                            placeholder="1/2 teaspoon salt..."
                            value={state.ingredients}
                            onChange={(ev) => changeHandler(ev)}
                            required
                        />
                    </div>
                    <label htmlFor="preparation">Preparation:</label>
                    <div>
                        <textarea
                            cols={20}
                            rows={5}
                            id="preparation"
                            name="preparation"
                            placeholder="Cooking preparation..."
                            value={state.preparation}
                            onChange={(ev) => changeHandler(ev)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={styles["create-btn"]}
                            type="submit"
                            value={"Create recipe"}
                        />
                    </div>
                </form>
                <img className={styles["background-img"]} src={background} alt="background" />
            </section>
        </>
    );
}

export default CreateRecipe;