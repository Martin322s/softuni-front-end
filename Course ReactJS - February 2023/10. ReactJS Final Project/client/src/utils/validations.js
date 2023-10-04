export const minLength = (length, text, type, setter) => {
    if (text.length < length && text !== "") {
        setter(state => ({
            ...state,
            [type]: true
        }));
    } else {
        setter(state => ({
            ...state,
            [type]: false
        }));
    }
};

export const regexValidator = (regex, text, type, setter) => {
    const regexStr = new RegExp(regex, 'g');
    if (!regexStr.test(text) && text !== "") {
        setter(state => ({
            ...state,
            [type]: true
        }));
    } else {
        setter(state => ({
            ...state,
            [type]: false
        }));
    }
};

export const urlValidator = (startValue, text, type, setter) => {
    if (!text.startsWith(startValue) && text !== "") {
        setter(state => ({
            ...state,
            [type]: true
        }));
    } else {
        setter(state => ({
            ...state,
            [type]: false
        }));
    }
};

export const passwordsMatch = (passwordOne, passwordTwo, type, setter) => {
    if (passwordOne !== passwordTwo && passwordTwo !== "") {
        setter(state => ({
            ...state,
            [type]: true
        }));
    } else {
        setter(state => ({
            ...state,
            [type]: false
        }));
    }
};