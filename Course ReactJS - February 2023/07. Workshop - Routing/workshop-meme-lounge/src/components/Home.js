import { Link } from "react-router-dom";
import welcome from './images/welcome-meme.jpg';

export const Home = () => {
    return (
        <section id="welcome">
            <div id="welcome-container">
                <h1>Welcome To Meme Lounge</h1>
                <img src={welcome} alt="meme" />
                    <h2>Login to see our memes right away!</h2>
                    <div id="button-div">
                        <Link to="/" className="button">Login</Link>
                        <Link to="/" className="button">Register</Link>
                    </div>
            </div>
        </section>
    );
};