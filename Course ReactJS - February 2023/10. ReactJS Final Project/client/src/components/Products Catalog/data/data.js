export const initialState = {
    products: [],
    loading: false,
    currentPage: 1,
};

export function reducer(state, action) {
    switch (action.type) {
        case "SET_PRODUCTS": {
            return { ...state, products: action.products }
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