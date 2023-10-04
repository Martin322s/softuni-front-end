import React, { useState, useEffect } from 'react';
import styles from "./styles/bar.module.css";

function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 100) {
                setProgress(progress + 1);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [progress]);

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["bar"]}>
                <progress value={progress} max="100" />
                <p>{progress}%</p>
            </div>
        </div>
    );
}

export default ProgressBar;