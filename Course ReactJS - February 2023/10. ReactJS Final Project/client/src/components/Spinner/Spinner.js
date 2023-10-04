import { memo } from "react";
import styles from "./styles/spinner.module.css";

const Spinner = memo(() => {
    return (
        <div className={styles["loader"]}>Loading...</div>
    );
});

export default Spinner;