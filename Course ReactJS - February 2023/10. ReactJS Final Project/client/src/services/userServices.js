const baseUrl = "https://healthy-food-api.onrender.com/users";
// const baseUrl = "http://localhost:3030/users";

export const registerUser = async (userData) => {
    const res = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    return await res.json();
};

export const loginUser = async (userData) => {
    const res = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    return await res.json();
};

export const logoutUser = (token) => {
    return fetch(`${baseUrl}/logout`, {
        method: "GET",
        headers: {
            "X-Authorization": token
        }
    });
};

export const resetPassword = async (passwordData) => {
    const res = await fetch(`${baseUrl}/reset`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(passwordData)
    })
    return await res.json();
};

export const testForEmail = async (email, secretWord) => {
    const res = await fetch(`${baseUrl}/email-test`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, secretWord })
    })
    return await res.json();
};

export const getUser = (userId) => fetch(`${baseUrl}/${userId}`).then(res => res.json());

export const unsaveRecipe = async (recipeData, userId, token) => {
    const res = await fetch(`${baseUrl}/unsave/${userId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(recipeData)
    })
    return await res.json();
};

export const deleteAccount = async (userId, token) => {
    const res = await fetch(`${baseUrl}/delete/${userId}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': token
        }
    })
    return await res.json();
};

export const updateUser = async (userId, userData, token) => {
    const res = await fetch(`${baseUrl}/update/${userId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(userData)
    })
    return await res.json();
};