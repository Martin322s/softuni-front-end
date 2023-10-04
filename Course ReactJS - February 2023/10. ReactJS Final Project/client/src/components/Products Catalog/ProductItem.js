import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/productsCatalog.module.css";
import { AuthContext } from "../../contexts/UserContext";

export const ProductItem = memo(({
    title,
    imageUrl,
    type,
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
            <p className={styles["catalog-recipe-category"]}>Type: {type}</p>
            {user.accessToken
                ?
                <>
                    <Link className={styles["details-btn"]} to={`/details/products/${_id}`}>
                        Details
                    </Link>
                </>
                : null
            }
        </article>
    );
});

export default ProductItem;