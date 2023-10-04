import styles from "./styles/error.module.css";

const Error = ({ message }) => {
    return (
        <div id={styles["notification-modal"]}>
            <div className={styles["modal-content"]}>
                <h2>Notification</h2>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Error;