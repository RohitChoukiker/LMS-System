import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

