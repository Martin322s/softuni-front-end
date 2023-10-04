export const initialState = {
    data: {},
    ownRecipes: [],
    ownProducts: [],
    saved: [],
    showDelete: false,
    showEdit: false
};

export function reducer(state, action) {
    switch (action.type) {
        case "SET_DATA": {
            return { ...state, data: action.data }; 
        }
        case "SET_OWN_RECIPES": {
            return { ...state, ownRecipes: action.ownRecipes }; 
        }
        case "SET_OWN_PRODUCTS": {
            return { ...state, ownProducts: action.ownProducts }; 
        }
        case "SET_SAVED": {
            return { ...state, saved: action.saved }; 
        }
        case "SET_SHOW_DELETE": {
            return { ...state, showDelete: action.showDelete }; 
        }
        case "SET_SHOW_EDIT": {
            return { ...state, showEdit: action.showEdit }; 
        }
        default: {
            throw new Error(`Invalid action type: ${action.type}`);
        }
    }
};