import axios from "axios";
import { getToken } from "./AuthService";

//const BASE_REST_API_URL =  import.meta.env.VITE_HOST_API_ADDRESS+'/todos';


axios.interceptors.request.use(function (config) {
    
    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {

    return Promise.reject(error);
  });
  
export const getAllArticles = () => axios.get(BASE_REST_API_URL)

export const saveArticle = (article) => axios.post(BASE_REST_API_URL, article)

export const getArticle = (id) => axios.get(BASE_REST_API_URL + '/' + id)

export const updateArticle = (id, article) => axios.put(BASE_REST_API_URL + '/' + id, article)

export const deleteArticle = (id) => axios.delete(BASE_REST_API_URL + '/' + id)