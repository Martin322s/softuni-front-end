const baseUrl = "https://healthy-food-api.onrender.com/recipes";

export const createRecipe = async (token, data) => {
    const res = await fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });
    return await res.json();
};

export const getAll = () => fetch(`${baseUrl}/all`).then(res => res.json());
export const getOne = (recipeId) => fetch(`${baseUrl}/${recipeId}`).then(res => res.json());
export const getOwned = (userId) => fetch(`${baseUrl}/profile/${userId}`).then(res => res.json());

export const deleteRecipe = async (id, token) => {
    const res = await fetch(`${baseUrl}/delete/${id}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': token
        }
    });
    return await res.json();
};

export const editRecipe = async (recipeData, token, id) => {
    const res = await fetch(`${baseUrl}/edit/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(recipeData)
    });
    return await res.json();
};

export const saveRecipe = async (recipeId, userId, token) => {
    const res = await fetch(`${baseUrl}/save/${recipeId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ userId })
    });
    return await res.json();
};

export const getSavedRecipes = (userId, token) =>
    fetch(`${baseUrl}/save/${userId}`, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());

export const download = async (recipeData, token) => {
    const res = await fetch(`${baseUrl}/download`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(recipeData)
    });
    return await res.blob();
};