import { useCallback, useContext, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/UserContext";
import * as service from "../../services/productService";
import { initData, reducer } from "./data/data";

import styles from "./styles/createProduct.module.css";
import resp from "./styles/responsive.module.css";
import background from "./images/backgr.jpg";

const CreateProduct = () => {
    const [state, dispatch] = useReducer(reducer, initData);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const changeHandler = useCallback((ev) => {
        const { name, value } = ev.target;
        dispatch({ type: "SET_FIELD", field: name, value });
    }, []);

    const submitHandler = (ev, data) => {
        ev.preventDefault();
        const nutrition = data.nutrition.split("\n");

        service.createProduct({ ...data, nutrition }, user.accessToken, user._id)
            .then(() => {
                navigate("/catalog-products", { replace: true });
            });
    };

    return (
        <>
            <section className={`${styles["create-page"]} ${resp["create-page"]}`}>
                <article className={`${styles["info"]} ${resp["info"]}`}>
                    <ul className={`${styles["steps"]} ${resp["steps"]}`}>
                        <li>Create products information:</li>
                        <li>
                            <p>
                                The title specifies the name of the product.
                            </p>
                        </li>
                        <li>
                            <p>
                                Nutrition information list: A list of all the information of the products like calories, fat and ect.
                                NOTE: Every nutrition must be on the new line!
                            </p>
                        </li>
                        <li>
                            <p>
                                Description: Products description.
                            </p>
                        </li>
                        <li>
                            <p>
                                Type - specifies the type of the product - Vegetable, fruits and ect.
                            </p>
                        </li>
                    </ul>
                </article>
                <form
                    className={`${styles["create"]} ${resp["create"]}`}
                    onSubmit={(ev) => submitHandler(ev, state)}
                >
                    <h1 className={`${styles["create-heading"]} ${resp["create-heading"]}`}
                    >
                        Create Products
                    </h1>
                    <div className={`${styles["links"]} ${resp["links"]}`}>
                        <Link className={`${styles["create-recipe"]} ${resp["create-recipe"]}`} 
                            to="/create-recipes" 
                            replace
                        >
                            Create Recipe
                        </Link>
                        <Link 
                            className={`${styles["create-product"]} ${resp["create-product"]}`} 
                            to="/create-products" 
                            replace
                        >
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
                            onChange={(ev) => changeHandler(ev)}
                            value={state.title}
                            required
                        />
                    </div>
                    <label htmlFor="type">Type:</label>
                    <div>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            placeholder="Fruits..."
                            onChange={(ev) => changeHandler(ev)}
                            value={state.type}
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
                            onChange={(ev) => changeHandler(ev)}
                            value={state.imageUrl}
                            required
                        />
                    </div>
                    <label htmlFor="nutrition">Nutrition information:</label>
                    <p className={`${styles["ingredients-note"]} ${resp["ingredients-note"]}`}
                    >
                        NOTE: Every nutrition must be on the new line!
                    </p>
                    <div>
                        <textarea
                            cols={20}
                            rows={5}
                            id="nutrition"
                            name="nutrition"
                            placeholder="Calories: 1500"
                            onChange={(ev) => changeHandler(ev)}
                            value={state.nutrition}
                            required
                        />
                    </div>
                    <label htmlFor="description">Description:</label>
                    <div>
                        <textarea
                            cols={20}
                            rows={5}
                            id="description"
                            name="description"
                            placeholder="Product description..."
                            onChange={(ev) => changeHandler(ev)}
                            value={state.description}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={`${styles["create-btn"]} ${resp["create-btn"]}`}
                            type="submit"
                            value={"Create product"}
                        />
                    </div>
                </form>
                <img className={`${styles["background-img"]} ${resp["background-img"]}`} 
                    src={background} alt="background"
                />
            </section>
        </>
    );
}

export default CreateProduct;