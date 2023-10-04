import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const Edit = ({ closeHandler, user }) => {
    const { updateUser } = useContext(UserContext);
    const [data, setData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        imageUrl: user.imageUrl,
        country: user.address.country,
        city: user.address.city,
        street: user.address.street,
        streetNumber: user.address.streetNumber
    });

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    const [error, setError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        imageUrl: false,
        country: false,
        city: false,
        street: false,
        streetNumber: false
    });

    const isFormValid = Object.values(error).includes(true);

    const minLength = (length, text, type) => {
        if (text.length < length) {
            setError(state => ({
                ...state,
                [type]: true
            }));
        } else {
            setError(state => ({
                ...state,
                [type]: false
            }));
        }
    }

    const validator = (regex, text, type) => {
        const regexStr = new RegExp(regex, 'g');
        if (!regexStr.test(text)) {
            setError(state => ({
                ...state,
                [type]: true
            }));
        } else {
            setError(state => ({
                ...state,
                [type]: false
            }));
        }
    }

    const positiveValidation = (number, type) => {
        if (number < 0) {
            setError(state => ({
                ...state,
                [type]: true
            }));
        } else {
            setError(state => ({
                ...state,
                [type]: false
            }));
        }
    }

    const userData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        address: {
            country: data.country,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber
        }
    }

    return (
        <div className="overlay">
            <div className="backdrop" onClick={() => closeHandler()} />
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Edit User</h2>
                        <button className="btn close" onClick={() => closeHandler()}>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="xmark"
                                className="svg-inline--fa fa-xmark"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                                ></path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={(ev) => updateUser(ev, user._id, userData, closeHandler)}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-user" />
                                    </span>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={data.firstName}
                                        onChange={(ev) => changeHandler(ev)}
                                        onBlur={() => minLength(3, data.firstName, "firstName")}
                                    />
                                </div>
                                {error.firstName &&
                                    <p className="form-error">
                                        First name should be at least 3 characters long!
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-user" />
                                    </span>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={data.lastName}
                                        onChange={(ev) => changeHandler(ev)}
                                        onBlur={() => minLength(3, data.lastName, "lastName")}
                                    />
                                </div>
                                {error.lastName &&
                                    <p className="form-error">
                                        Last name should be at least 3 characters long!
                                    </p>
                                }
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-envelope" />
                                    </span>
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        value={data.email}
                                        onChange={(ev) => changeHandler(ev)}
                                        onBlur={() =>
                                            /* eslint-disable */
                                            validator("^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$", data.email, "email")}
                                    />
                                </div>
                                {error.email && <p className="form-error">Email is not valid!</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-phone" />
                                    </span>
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="text"
                                        value={data.phoneNumber}
                                        onChange={(ev) => changeHandler(ev)}
                                        onBlur={() =>
                                            validator('^0[1-9]{1}[0-9]{8}$', data.phoneNumber, "phoneNumber")}
                                    />
                                </div>
                                {error.phoneNumber && <p className="form-error">Phone number is not valid!</p>}
                            </div>
                        </div>
                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span>
                                    <i className="fa-solid fa-image" />
                                </span>
                                <input
                                    id="imageUrl"
                                    name="imageUrl"
                                    type="text"
                                    value={data.imageUrl}
                                    onChange={(ev) => changeHandler(ev)}
                                    onBlur={() => validator("^https?:\/\/.+", data.imageUrl, "imageUrl")}
                                />
                            </div>
                            {error.imageUrl && <p className="form-error">ImageUrl is not valid!</p>}
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-map" />
                                    </span>
                                    <input
                                        id="country"
                                        name="country"
                                        type="text"
                                        value={data.country}
                                        onChange={(ev) => changeHandler(ev)}
                                        onBlur={() => minLength(2, data.country, "country")}

                                    />
                                </div>
                                {error.country &&
                                    <p className="form-error">
                                        Country should be at least 2 characters long!
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-city" />
                                    </span>
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        value={data.city}
                                        onChange={(ev) => changeHandler(ev)}
                                        onBlur={() => minLength(3, data.city, "city")}
                                    />
                                </div>
                                {error.city &&
                                    <p className="form-error">
                                        City should be at least 3 characters long!
                                    </p>
                                }
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-map" />
                                    </span>
                                    <input
                                        id="street"
                                        name="street"
                                        type="text"
                                        value={data.street}
                                        onChange={(ev) => changeHandler(ev)}
                                        onBlur={() => minLength(3, data.street, "street")}
                                    />
                                </div>
                                {error.street &&
                                    <p className="form-error">
                                        Street should be at least 3 characters long!
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetNumber">Street number</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-house-chimney" />
                                    </span>
                                    <input
                                        id="streetNumber"
                                        name="streetNumber"
                                        type="text"
                                        value={data.streetNumber}
                                        onChange={(ev) => changeHandler(ev)}
                                        onBlur={() => positiveValidation(data.streetNumber, "streetNumber")}
                                    />
                                </div>
                                {error.streetNumber &&
                                    <p className="form-error">
                                        Street number should be a positive number!
                                    </p>
                                }
                            </div>
                        </div>
                        <div id="form-actions">
                            <button 
                                id="action-save" 
                                className="btn" 
                                type="submit"
                                disabled={isFormValid}
                            >
                                Save
                            </button>
                            <button
                                id="action-cancel"
                                className="btn"
                                type="button"
                                onClick={() => closeHandler()}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edit;