export const initialState = {
    isDownloading: false,
    showDelete: false
};

export function reducer(state, action) {
    switch (action.type) {
        case "DOWNLOADING": {
            return { ...state, isDownloading: action.isDownloading };
        }
        case "DELETE": {
            return { ...state, showDelete: action.showDelete };
        }
        default: {
            throw new Error(`Invalid action ${action.type}`);
        }
    }
}