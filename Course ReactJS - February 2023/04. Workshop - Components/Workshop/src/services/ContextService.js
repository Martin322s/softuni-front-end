const baseUrl = "http://localhost:3005/api";

export const getAll = () => fetch(`${baseUrl}/users`).then(res => res.json()); 
export const getOne = (userId) => fetch(`${baseUrl}/users/${userId}`).then(res => res.json());

export const create = (userData) => {
    return fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json());
}

export const deleteUser = (userId) => {
    return fetch(`${baseUrl}/users/${userId}`, {
        method: 'DELETE',
    })
        .then(res => res.json());
}

export const updateUser = (userId, userData) => {
    return fetch(`${baseUrl}/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json());
}