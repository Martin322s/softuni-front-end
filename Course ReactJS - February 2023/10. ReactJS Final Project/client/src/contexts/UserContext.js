import { createContext } from "react";
import { useStorage } from "../hooks/useStorage";
import * as service from "../services/recipeService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useStorage('session', {});
    
    const userLogin = (userData) => setAuth(userData);
    const userLogout = () => setAuth({});

    const getAllRecipes = async () => await service.getAll();
    const getOneRecipe = async (recipeId) => await service.getOne(recipeId);

    return (
        <AuthContext.Provider
            value={{ 
                user: auth, 
                userLogin, 
                userLogout, 
                getAllRecipes,
                getOneRecipe
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};