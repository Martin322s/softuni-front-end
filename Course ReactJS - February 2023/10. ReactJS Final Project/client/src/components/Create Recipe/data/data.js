export const initData = {
    title: "",
    category: "",
    imageUrl: "",
    ingredients: [],
    preparation: ""
};

export function reducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value };
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    };
}