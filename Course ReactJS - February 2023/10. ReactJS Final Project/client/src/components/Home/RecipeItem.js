import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import styles from "./styles/home.module.css";

const RecipeItem = memo(({
    title,
    category,
    imageUrl,
    _id
}) => {
    const { user } = useContext(AuthContext);
    return (
        <article className={styles["recipe-one"]}>
            <img
                src={imageUrl}
                alt={title}
            />
            <h3 className={styles["recipe-title"]}>{title}</h3>
            <p className={styles["recipe-category"]}>Category: {category}</p>
            {user.accessToken
                ?
                <>
                    <Link className={styles["last-recipes-btn"]} to={`/details/recipes/${_id}`}>
                        Details
                    </Link>
                </>
                : null
            }
        </article>
    );
});

export default RecipeItem;