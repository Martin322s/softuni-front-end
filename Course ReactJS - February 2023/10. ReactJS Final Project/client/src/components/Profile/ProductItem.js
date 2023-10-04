import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/profile.module.css";

const ProductItem = memo(({ _id, imageUrl, title, type }) => {
    return (
        <article className={styles["catalog-recipe"]}>
            <img
                src={imageUrl}
                alt="tomatoes"
            />
            <h3 className={styles["catalog-recipe-title"]}>{title}</h3>
            <p className={styles["catalog-recipe-category"]}>Type: {type}</p>
            <Link className={styles["details-btn"]} to={`/details/products/${_id}`}>
                Details
            </Link>
        </article>
    );
});

export default ProductItem;