import { createContext, useEffect, useReducer } from "react";

import { authReducer, initialState } from "./AuthReducer";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(
        authReducer, initialState
    )
}

useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if(token && user) {
        dispatch({
            type: "LOGIN_SUCCESS", 
            payload: {
                token, 
                user: JSON.parse(user),
            },
        })
    } else {
        dispatch({
            type: "AUTH_READY"
        })
    }
}, []);

const login = (data) => {
    localStorage.setItem("token", data.token);

    localStorage.setItem("user", JSON.stringify(data.user))

    dispatch({
        type: "LOGIN_SUCCESS",
        payload: data
    })
}