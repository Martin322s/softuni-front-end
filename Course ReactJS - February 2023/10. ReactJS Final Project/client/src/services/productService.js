const baseUrl = "https://healthy-food-api.onrender.com/products";

export const createProduct = async (productData, token, userId) => {
    const res = await fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...productData, _ownerId: userId })
    });
    return await res.json();
};

export const getAll = () => fetch(`${baseUrl}/all`).then(res => res.json());
export const getOne = (id) => fetch(`${baseUrl}/${id}`).then(res => res.json());
export const getOwned = (userId) => fetch(`${baseUrl}/profile/${userId}`).then(res => res.json());

export const deleteProduct = async (id, token) => {
    const res = await fetch(`${baseUrl}/delete/${id}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': token
        }
    });
    return await res.json();
};

export const editProduct = async (productData, token, id) => {
    const res = await fetch(`${baseUrl}/edit/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(productData)
    });
    return await res.json();
};