import { Link } from "react-router-dom";

export const Details = () => {
    return (
        <section id="meme-details">
            <h1>Meme Title: Bad code can present some problems</h1>
            <div className="meme-details">
                <div className="meme-img">
                    <img alt="meme-alt" src="/images/3.png" />
                </div>
                <div className="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                        Being a programmer is a fun job. And many funny incidents occur
                        throughout a programmer's career. Here are a few jokes that can be
                        relatable to you as a programmer.
                    </p>
                    <Link className="button warning" to="/">
                        Edit
                    </Link>
                    <button className="button danger">Delete</button>
                </div>
            </div>
        </section>
    );
}