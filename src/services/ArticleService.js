import axios from "axios";
import { getToken } from "./AuthService";

const AUTH_REST_API_BASE_URL = "http://localhost:8082/api/article"


axios.interceptors.request.use(function (config) {
    
    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {

    return Promise.reject(error);
  });
  
export const getAllArticles = () => axios.get(AUTH_REST_API_BASE_URL)

export const saveArticle = (article) => axios.post(AUTH_REST_API_BASE_URL, article)

export const getArticle = (id) => axios.get(AUTH_REST_API_BASE_URL + '/' + id)

export const updateArticle = (id, article) => axios.put(AUTH_REST_API_BASE_URL + '/' + id, article)

export const deleteArticle = (id) => axios.delete(AUTH_REST_API_BASE_URL + '/' + id)

export const addFileToArticle = (id,file) => axios.post(AUTH_REST_API_BASE_URL + '/files' + '/' + id  , file)

export const getFilesByArticleId = (id) => axios.get(AUTH_REST_API_BASE_URL + '/files' + '/' + id  )

export const getImagesByArticleId = (id) => axios.get(AUTH_REST_API_BASE_URL + '/image' + '/' + id  )

export const getFileByName = (fileName) => axios.get(AUTH_REST_API_BASE_URL + '/files/get/files' + '/' + fileName)

export const getImageByName = (imageName) => axios.get(AUTH_REST_API_BASE_URL + '/files/get/image' + '/' + imageName)