import React, { useContext, useEffect, useState, useReducer } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../../contexts/UserContext";
import * as service from "../../services/recipeService";
import * as userService from "../../services/userServices";
import { saveAs } from "file-saver";

import Delete from "../Delete Recipes/DeleteRecipes";
import styles from "./styles/details.module.css";
import { initialState, reducer } from "./data/data";

const ProgressBar = React.lazy(() => import("../Progress Bar/ProgressBar"));

const Details = () => {
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const { user, getOneRecipe } = useContext(AuthContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [recipe, setRecipe] = useState({});
    const [saved, setSaved] = useState([]);
    const closeHandler = () => dispatch({ type: "DELETE", showDelete: false });
    
    useEffect(() => {
        getOneRecipe(recipeId)
            .then(result => setRecipe(result));
        service.getSavedRecipes(user._id)
            .then(result => setSaved(result.map(x => {
                return x._id;
            })));
    }, [getOneRecipe, recipeId, user._id]);

    const deleteHandler = (ev, recipeId, token) => {
        ev.preventDefault();
        service.deleteRecipe(recipeId, token)
            .then(() => navigate("/catalog-recipes", { replace: true }));
    }

    const saveHandler = (ev, recipeId, userId, token) => {
        ev.preventDefault();
        service.saveRecipe(recipeId, userId, token)
            .then((result) => {
                setSaved(result.map(x => {
                    return x._id;
                }));
                navigate(`/details/recipes/${recipeId}`, { replace: true })
            });
    };

    const unsaveHandler = (ev, recipeId, userId, token) => {
        ev.preventDefault();
        service.getSavedRecipes(userId)
            .then(recipes => {
                const save = recipes.filter(x => x._id !== recipeId);
                userService.unsaveRecipe(save, userId, token)
                    .then(recipes => setSaved(recipes));
            })
    };

    const downloadPdf = (ev, data, token) => {
        ev.preventDefault();
        dispatch({ type: "DOWNLOADING", isDownloading: true });
        setTimeout(() => {
            service.download(data, token)
                .then(blob => {
                    dispatch({ type: "DOWNLOADING", isDownloading: false });
                    saveAs(blob, `${data.title}.pdf`);
                });
        }, 11000);
    };

    return (
        <>
            {state.isDownloading
                ?
                <ProgressBar />
                : null
            }
            {state.showDelete &&
                <Delete
                    closeHandler={closeHandler}
                    title={recipe.title}
                    type="recipe"
                    deleteHandler={deleteHandler}
                    _id={recipeId}
                />
            }
            <div className={styles["wrap-main"]}>
                <section className={styles["details"]}>
                    <img src={recipe.imageUrl} alt="pizza" />
                    <article>
                        <h1 className={styles["details-heading"]}>{recipe.title}</h1>
                        <section className={styles["recipe-data"]}>
                            {/* eslint-disable-next-line */}
                            <ul className={styles["ingredients"]} role={"list"}>
                                <li className={styles["first-item"]}>Ingredients: </li>
                                {recipe.ingredients?.map(x => <li key={x}>{x}</li>)}
                            </ul>
                            <div>
                                <h2>Preparation:</h2>
                                <p>
                                    {recipe.preparation}
                                </p>
                            </div>
                        </section>
                        {saved.includes(recipeId)
                            ?
                            <p>
                                This recipe is saved to your profile.
                                You can see it <Link to="/profile" replace>here</Link>.
                            </p>
                            : null
                        }
                        <div className={styles["buttons"]}>
                            {user._id === recipe._ownerId
                                ?
                                <>
                                    <Link
                                        className={styles["btn-details"]}
                                        to={`/details/edit/${recipe._id}`}
                                        replace
                                    >
                                        <i className="fas fa-edit"></i>
                                        Edit
                                    </Link>
                                    <Link
                                        className={styles["btn-details"]}
                                        onClick={() => dispatch({ type: "DELETE", showDelete: true })}
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                        Delete
                                    </Link>
                                </>
                                :
                                <>
                                    {!saved.includes(recipeId)
                                        ?
                                        <>
                                            <Link
                                                className={styles["btn-details"]}
                                                onClick={(ev) =>
                                                    saveHandler(ev, recipeId, user._id, user.accessToken)}
                                            >
                                                <i className="fas fa-bookmark"></i>
                                                Save
                                            </Link>
                                        </>
                                        : <Link
                                            className={styles["btn-details"]}

                                            onClick={(ev) =>
                                                unsaveHandler(ev, recipeId, user._id, user.accessToken)}
                                        >
                                            <i className="far fa-calendar-times"></i>
                                            Unsave
                                        </Link>
                                    }
                                    <Link
                                        className={styles["btn-details"]}
                                        onClick={(ev) => downloadPdf(ev, recipe, user.accessToken)}
                                        download
                                    >
                                        <i className="fas fa-download"></i>Download PDF
                                    </Link>
                                </>
                            }
                        </div>
                    </article>
                </section>
            </div>
        </>
    );
}

export default Details;