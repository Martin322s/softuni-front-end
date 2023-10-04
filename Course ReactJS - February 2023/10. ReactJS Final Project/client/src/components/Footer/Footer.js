import { memo } from 'react';
import styles from "./styles/footer.module.css";
import resp from "./styles/responsive.module.css";

const Footer = memo(() => {
    return (
        <footer className={`${styles["footer"]} ${resp["footer"]}`}>
            <div>
                <h1 className={styles["footer_heading"]}>NutriGit</h1>
                <p>All rights reserved &copy; by Martin Sofroniev</p>
                <p>Latest version: v1.04 - (Last updates: 19/07/2023)</p>
            </div>
            {/* eslint-disable-next-line */}
            <ul role={"list"}>
                <li>About us</li>
                <li>FAQ</li>
                <li>Terms and Conditions</li>
                <li>Contacts</li>
            </ul>
            {/* eslint-disable-next-line */}
            <ul role={"list"}>
                <li>Follow us on</li>
                <li className={styles["footer-item"]}>
                    <a
                        className={styles["footer-link"]}
                        href="https://github.com/MaRtin322s"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-github-square" />
                    </a>
                </li>
                <li className={styles["footer-item"]}>
                    <a
                        className={styles["footer-link"]}
                        href="https://www.facebook.com/profile.php?id=100009733451214"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-facebook-square" />
                    </a>
                </li>
                <li className={styles["footer-item"]}>
                    <a
                        className={styles["footer-link"]}
                        href="https://www.instagram.com/martin13s18/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-instagram" />
                    </a>
                </li>
            </ul>
        </footer>
    );
});

export default Footer;