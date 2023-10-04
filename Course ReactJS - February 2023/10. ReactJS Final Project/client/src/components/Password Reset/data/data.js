export const initData = {
    email: "",
    password: "",
    rePass: "",
    secretWord: ""
};

export function reducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value };
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    };
};