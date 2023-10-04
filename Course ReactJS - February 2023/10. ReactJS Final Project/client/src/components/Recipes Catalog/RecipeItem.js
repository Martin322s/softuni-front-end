import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/recipesCatalog.module.css";
import { AuthContext } from "../../contexts/UserContext";

const RecipeCatalogItem = memo(({
    imageUrl,
    title,
    category,
    _id
}) => {
    const { user } = useContext(AuthContext);

    return (
        <article className={styles["catalog-recipe"]}>
            <img
                src={imageUrl}
                alt={title}
            />
            <h3 className={styles["catalog-recipe-title"]}>{title}</h3>
            <p className={styles["catalog-recipe-category"]}>Category: {category}</p>
            {user.accessToken
                ?
                <>
                    <Link className={styles["details-btn"]} to={`/details/recipes/${_id}`}>
                        Details
                    </Link>
                </>
                : null
            }
        </article>
    );
});

export default RecipeCatalogItem;