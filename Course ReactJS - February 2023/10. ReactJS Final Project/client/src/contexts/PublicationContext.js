import { createContext } from "react";
import * as service from "../services/productService";

export const PublicContext = createContext();

export const PublicProvider = ({ children }) => {
    const getAllProducts = async () => await service.getAll();
    const getOneProduct = async (productId) => await service.getOne(productId);

    return (
        <PublicContext.Provider
            value={{
                getAllProducts,
                getOneProduct
            }}
        >
            {children}
        </PublicContext.Provider>
    );
};