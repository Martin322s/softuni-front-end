export const initialState = {
    recipes: [],
    loading: false,
    currentPage: 1
};

export function reducer(state, action) {
    switch (action.type) {
        case "SET_RECIPES": {
            return { ...state, recipes: action.recipes }
        }
        case "SET_LOADING": {
            return { ...state, loading: action.value }
        }
        case "SET_CURRENT_PAGE": {
            return { ...state, currentPage: action.currentPage }
        }
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    };
};