import axios from "axios";

const MAIL_REST_API_BASE_URL = "http://localhost:8083/api/mail"

const AUTH_REST_API_BASE_URL = process.env.REACT_APP_AUTH_API_ADDRESS+"/auth"

export const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj);

export const postMail = (mailObj) => axios.post(MAIL_REST_API_BASE_URL + '/send' , mailObj);

export const loginAPICall = (email, password) => axios.post(AUTH_REST_API_BASE_URL + '/login', { email, password});

export const storeToken = (token) => sessionStorage.setItem("token", token);

export const getToken = () => sessionStorage.getItem("token");

export const getUser = (id) => axios.get(AUTH_REST_API_BASE_URL + '/' + id)

export const saveLoggedInUser = (username) => sessionStorage.setItem("authenticatedUser", username);

export const oubliePassword = (email) => axios.post(process.env.REACT_APP_AUTH_API_ADDRESS + '/reinitialise/reset-password-request', email);

export const resetPassword = (newPassword, token) => axios.post(process.env.REACT_APP_AUTH_API_ADDRESS + '/reinitialise/update/' + token, newPassword);

export const isUserLoggedIn = () => {

    const username = sessionStorage.getItem("authenticatedUser");

    if(username == null) {
        return false;
    }    
    else {
        return true;
    }   
}

export const isUserAdmin = () => {
    const role = sessionStorage.getItem("role");

    if(role == "true") {
        return true;
    }    
    else {
        return false;
    }   
}

export const getLoggedInUser = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    return username;
}

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
}