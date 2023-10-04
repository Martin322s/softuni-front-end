import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <Link to="/catalog">All Memes</Link>

            <div className="user">
                <Link to="/create-meme">Create Meme</Link>
                <div className="profile">
                    <span>Welcome, {'email'}</span>
                    <Link to="/profile">My Profile</Link>
                    <Link to="/logout">Logout</Link>
                </div>
            </div>

            <div className="guest">
                <div className="profile">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                <Link className="active" to="/">Home Page</Link>
            </div>
        </nav>
    );
};