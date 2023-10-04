import { createContext, useEffect, useState } from "react";
import * as service from "../services/ContextService";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [data, setData] = useState({
        users: [],
        count: 0
    });

    const [newUser, setNewUser] = useState(false);

    useEffect(() => {
        service.getAll()
            .then(result => setData(result));
    }, [newUser]);

    const createUser = (ev, userData, closeHandler) => {
        ev.preventDefault();

        service.create(userData)
            .then(() => {
                setNewUser(!newUser);
                closeHandler();
            });
    }

    const deleteUser = (ev, userId, closeHandler) => {
        ev.preventDefault();

        service.deleteUser(userId)
            .then(() => {
                setNewUser(!newUser);
                closeHandler();
            });
    } 

    const updateUser = (ev, userId, userData, closeHandler) => {
        ev.preventDefault();

        service.updateUser(userId, userData)
            .then(() => {
                setNewUser(!newUser);
                closeHandler();
            })
    }

    return (
        <UserContext.Provider 
            value={{ users: data.users, createUser, deleteUser, updateUser }}
        >
            {children}
        </UserContext.Provider>
    );
}
