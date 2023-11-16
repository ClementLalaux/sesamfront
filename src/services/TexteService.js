import axios from "axios";
import { getToken } from "./AuthService";

const TEXTE_REST_API_BASE_URL = "http://localhost:8084/api/texte"

axios.interceptors.request.use(function (config) {
    
    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {

    return Promise.reject(error);
  });

export const getAllTextes = () => axios.get(TEXTE_REST_API_BASE_URL)

export const saveTexte = (texte) => axios.post(TEXTE_REST_API_BASE_URL, texte)

export const getTexte = (id) => axios.get(TEXTE_REST_API_BASE_URL + "/" + id)

export const getTexteByPage = (page) => axios.get(TEXTE_REST_API_BASE_URL + "/page/" + page)

export const updateTexte = (id,texte) => axios.put(TEXTE_REST_API_BASE_URL + "/" + id, texte)

export const deleteTexte = (id) => axios.delete(TEXTE_REST_API_BASE_URL + "/" + id)