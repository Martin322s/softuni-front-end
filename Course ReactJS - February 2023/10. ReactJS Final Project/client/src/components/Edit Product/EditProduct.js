import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as service from "../../services/productService";
import { AuthContext } from "../../contexts/UserContext";

import styles from "./styles/editProduct.module.css";

const EditProduct = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState({
        title: "",
        type: "",
        imageUrl: "",
        nutrition: [],
        description: ""
    });
    const { user } = useContext(AuthContext);

    const changeHandler = useCallback((ev) => {
        setProduct(state => ({
            ...state,
            [ev.target.name]:ev.target.value
        }));
    }, []);

    useEffect(() => {
        service.getOne(productId)
            .then(result => setProduct(state => ({
                ...state,
                ...result,
                nutrition: result.nutrition.join("\n")
            })));
    }, [productId]);

    const submitHandler = (ev, data, token, id) => {
        ev.preventDefault();
        const nutrition = data.nutrition.split("\n");
        service.editProduct({ ...data, nutrition }, token, id)
            .then(() => navigate(`/details/products/${productId}`, { replace: true }));
    };

    return (
        <>
            <section className={styles["create-page"]}>
                <article className={styles["info"]}>
                    <ul className={styles["steps"]}>
                        <li>Create products information:</li>
                        <li>The title specifies the name of the product.</li>
                        <li>
                            Nutrition information list: A list of all the information of the products like calories, fat and ect.
                            NOTE: Every nutrition must be on the new line!
                        </li>
                        <li>
                            Description: Products description.
                        </li>
                        <li>
                            Type - specifies the type of the product - Vegetable, fruits and ect.
                        </li>
                    </ul>
                </article>
                <form
                    className={styles["create"]}
                    onSubmit={(ev) => submitHandler(ev, product, user.accessToken, productId)}
                >
                    <h1 className={styles["create-heading"]}>Edit Products</h1>
                    <label htmlFor="title">Title:</label>
                    <div>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title..."
                            onChange={(ev) => changeHandler(ev)}
                            value={product.title}
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
                            value={product.type}
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
                            value={product.imageUrl}
                            required
                        />
                    </div>
                    <label htmlFor="nutrition">Nutrition information:</label>
                    <p className={styles["ingredients-note"]}>NOTE: Every nutrition must be on the new line!</p>
                    <div>
                        <textarea
                            cols={20}
                            rows={5}
                            id="nutrition"
                            name="nutrition"
                            placeholder="Calories: 1500"
                            onChange={(ev) => changeHandler(ev)}
                            value={product.nutrition}
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
                            value={product.description}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={styles["create-btn"]}
                            type="submit"
                            value={"Edit product"}
                        />
                    </div>
                </form>
            </section>
        </>
    );
}

export default EditProduct;