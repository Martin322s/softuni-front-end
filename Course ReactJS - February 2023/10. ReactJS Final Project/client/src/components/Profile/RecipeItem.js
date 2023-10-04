import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/profile.module.css";

const RecipeItem = memo(({
    imageUrl,
    title,
    category,
    _id
}) => {
    return (
        <article className={styles["catalog-recipe"]}>
            <img
                src={imageUrl}
                alt={title}
            />
            <h3 className={styles["catalog-recipe-title"]}>{title}</h3>
            <p className={styles["catalog-recipe-category"]}>Category: {category}</p>
            <Link className={styles["details-btn"]} to={`/details/recipes/${_id}`}>
                Details
            </Link>
        </article>
    );
});

export default RecipeItem;