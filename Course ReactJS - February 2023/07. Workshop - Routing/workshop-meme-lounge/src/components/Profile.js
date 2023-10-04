import { Link } from "react-router-dom";
import profile from './images/female.png';
import image from './images/1.png';

export const Profile = () => {
    return (
        <section id="user-profile-page" className="user-profile">
            <article className="user-info">
                <img id="user-avatar-url" alt="user-profile" src={profile} />
                <div className="user-content">
                    <p>Username: Mary</p>
                    <p>Email: mary@abv.bg</p>
                    <p>My memes count: 2</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div className="user-meme-listings">
                {/* Display : All created memes by this user (If any) */}
                <div className="user-meme">
                    <p className="user-meme-title">Java Script joke</p>
                    <img className="userProfileImage" alt="meme-img" src={image} />
                    <Link className="button" to="/">
                        Details
                    </Link>
                </div>
                {/* Display : If user doesn't have own memes  */}
                <p className="no-memes">No memes in database.</p>
            </div>
        </section>
    );
};