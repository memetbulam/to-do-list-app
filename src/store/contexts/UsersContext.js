import React, { createContext, useReducer } from "react";
import { UserReducer } from "../reducers/UserReducer";

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
    const [Users, usersDispatch] = useReducer(UserReducer, [
        { id: 1, admin: false, username: "user", password: "user" },
        { id: 2, admin: true, username: "admin", password: "admin" },
        { id: 3, admin: false, username: "user2", password: "user2" },
        { id: 4, admin: true, username: "admin2", password: "admin2" },
        { id: 5, admin: false, username: "user3", password: "user3" }
    ]);

    return (
        <UsersContext.Provider value={{ Users, usersDispatch }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider;