import axios from "axios";
import { getToken } from "./AuthService";

const TEXTE_REST_API_BASE_URL = "http://localhost:8085/api/image"

axios.interceptors.request.use(function (config) {
    
    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {

    return Promise.reject(error);
  });

export const getAllImages = () => axios.get(TEXTE_REST_API_BASE_URL)

export const saveImage = (image) => axios.post(TEXTE_REST_API_BASE_URL, image)

export const getImage = (id) => axios.get(TEXTE_REST_API_BASE_URL + "/" + id)

export const getImageByPage = (page) => axios.get(TEXTE_REST_API_BASE_URL + "/page/" + page)

export const updateImage = (id,image) => axios.put(TEXTE_REST_API_BASE_URL + "/" + id, image)

export const deleteImage = (id) => axios.delete(TEXTE_REST_API_BASE_URL + "/" + id)