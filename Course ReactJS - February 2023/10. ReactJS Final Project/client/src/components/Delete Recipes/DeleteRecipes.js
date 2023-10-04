import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";
import styles from "./styles/delete.module.css";

const Delete = ({ 
    closeHandler, 
    title, 
    type,
    deleteHandler,
    _id
}) => {
    const { user } = useContext(AuthContext);
    return (
        <>  
            <div className={styles["backdrop"]} onClick={() => closeHandler()}></div>
            <div id={styles["delete-modal"]} className={styles["modal-container"]}>
                <h2>Delete {title}</h2>
                <p>Are you sure you want to delete this {type}?</p>
                <button 
                    id={styles["delete-confirm"]} 
                    onClick={(ev) => deleteHandler(ev, _id, user.accessToken)}
                >
                    Yes, delete it
                </button>

                <button 
                    id={styles["delete-cancel"]} 
                    onClick={() => closeHandler()}
                >
                    Cancel
                </button>
            </div>
        </>
    );
}

export default Delete;