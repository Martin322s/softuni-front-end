import { memo, useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";
import styles from "./styles/profile.module.css";

const Delete = memo(({
    userId,
    deleteHandler,
    closeDeleteModal
}) => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <div className={styles["backdrop"]} onClick={() => closeDeleteModal()}></div>
            <div id={styles["delete-modal"]} className={styles["modal-container"]}>
                <h2>Delete account</h2>
                <p>Are you sure you want to delete this account?</p>
                <button
                    id={styles["delete-confirm"]}
                    onClick={() => deleteHandler(userId, user.accessToken)}
                >
                    Yes, delete it
                </button>

                <button
                    id={styles["delete-cancel"]}
                    onClick={() => closeDeleteModal()}
                >
                    Cancel
                </button>
            </div>
        </>
    );
});

export default Delete;