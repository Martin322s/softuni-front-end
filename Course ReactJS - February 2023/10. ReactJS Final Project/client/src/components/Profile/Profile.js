import { useContext, useEffect, memo, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/UserContext";
import * as service from "../../services/userServices";
import * as recipeService from "../../services/recipeService";
import * as productService from "../../services/productService";
import RecipeItem from "./RecipeItem";
import ProductItem from "./ProductItem";
import Delete from "./Delete";
import EditProfile from "../Edit Profile/EditProfile";
import { initialState, reducer } from "./data/data";

import styles from "./styles/profile.module.css";

const Profile = memo(() => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { user, userLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        service.getUser(user._id)
            .then(result => dispatch({ type: "SET_DATA", data: result }));
        recipeService.getOwned(user._id)
            .then(result => dispatch({ type: "SET_OWN_RECIPES", ownRecipes: result }));
        productService.getOwned(user._id)
            .then(result => dispatch({ type: "SET_OWN_PRODUCTS", ownProducts: result }));
        recipeService.getSavedRecipes(user._id, user.accessToken)
            .then(result => dispatch({ type: "SET_SAVED", saved: result }));
    }, [user._id, user.accessToken]);

    const showDeleteModal = () => dispatch({ type: "SET_SHOW_DELETE", showDelete: true });
    const closeDeleteModal = () => dispatch({ type: "SET_SHOW_DELETE", showDelete: false });
    const showEditModal = () => dispatch({ type: "SET_SHOW_EDIT", showEdit: true });
    const closeEditModal = () => dispatch({ type: "SET_SHOW_EDIT", showEdit: false });

    const deleteHandler = (userId) => {
        service.deleteAccount(userId)
            .then(() => {
                userLogout();
                navigate("/", { replace: true });
            });
    };

    const submitHandler = (ev, data, id, token) => {
        ev.preventDefault();

        service.updateUser(id, data, token)
            .then(() => {
                service.getUser(id)
                    .then((res) => {
                        dispatch({ type: "SET_DATA", data: res });
                    })
                closeEditModal();
                navigate("/profile", { replace: true });
            });
    };

    return (
        <>
            {state.showDelete &&
                <Delete 
                    userId={user._id} 
                    closeDeleteModal={closeDeleteModal} 
                    deleteHandler={deleteHandler} 
                />
            }

            {state.showEdit &&
                <EditProfile 
                    closeEditModal={closeEditModal} 
                    {...state.data} 
                    token={user.accessToken}
                    submitHandler={submitHandler} 
                />
            }
            <section className={styles["profile-section"]}>
                <h1 className={styles["profile-heading"]}>Personal Information:</h1>
                <article className={styles["profile-info"]}>
                    <img
                        className={styles["profile-photo"]}
                        src={state.data.imageUrl}
                        alt="user"
                    />
                    {/* eslint-disable-next-line */}
                    <ul className={styles["personal-info"]} role={"list"}>
                        <button
                            className={styles["delete-account"]}
                            onClick={() => showDeleteModal()}
                        >
                            <i className="fas fa-trash-alt"></i>
                        </button>
                        <button
                            className={styles["edit-account"]}
                            onClick={() => showEditModal()}
                        >
                            <i className="fas fa-edit"></i>
                        </button>
                        <li>First Name: {state.data.firstName}</li>
                        <li>Last Name: {state.data.lastName}</li>
                        <li>Email: {state.data.email}</li>
                        <div className={styles["actions"]}>
                            <h1>Created Recipes: {state.ownRecipes.length}</h1>
                            <h1>Created Products: {state.ownProducts.length}</h1>
                            <h1>Saved Recipes: {state.saved.length}</h1>
                        </div>
                    </ul>
                </article>
                <div className={styles["empty"]}></div>
                <h1 className={styles["profile-heading"]}>My Publications:</h1>
                <section className={styles["user-actions"]}>
                    <article className={styles["created-recipes"]}>
                        <h1>Created Recipes:</h1>
                        {/* eslint-disable-next-line */}
                        <ul className={styles["user-action"]} role={"list"}>
                            {state.ownRecipes.length > 0
                                ?
                                state.ownRecipes.map(x => <li key={x._id}><RecipeItem {...x} /></li>)
                                :
                                null
                            }
                        </ul>
                    </article>
                    <article className={styles["created-products"]}>
                        <h1>Created products:</h1>
                        {/* eslint-disable-next-line */}
                        <ul className={styles["user-action"]} role={"list"}>
                            {state.ownProducts.length > 0
                                ?
                                state.ownProducts.map(x => <li key={x._id}><ProductItem {...x} /></li>)
                                :
                                null
                            }
                        </ul>
                    </article>
                    <article className={styles["saved-recipes"]}>
                        <h1>Saved Recipes:</h1>
                        {/* eslint-disable-next-line */}
                        <ul className={styles["user-action"]} role={"list"}>
                            {state.saved.length > 0
                                ?
                                state.saved.map(x => <li key={x._id}><RecipeItem {...x} /></li>)
                                : null
                            }
                        </ul>
                    </article>
                </section>
            </section>
        </>
    );
});

export default Profile;