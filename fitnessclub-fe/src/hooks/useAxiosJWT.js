import { axiosJWT } from "../api/axiosConfig";
import axios from "axios";
import { useEffect } from "react";

const useAxiosJWT = () => {

    const token = sessionStorage.getItem('token');
    const refreshToken = sessionStorage.getItem('refreshToken');

    useEffect(() => {

        const requestIntercept = axios.interceptors.request.use(
            config => {
                config.headers.Authorization = `Bearer ${token}`;
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        const responseIntercept = axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response.status === 401) {
                    axiosJWT.post('/auth/refresh', { refreshToken })
                    .then(response => {
                        sessionStorage.setItem('token', response.data.token);
                        sessionStorage.setItem('refreshToken', response.data.refreshToken);
                    })
                    .catch(error => {
                        console.error('Error refreshing token:', error);
                        sessionStorage.removeItem('token');
                        sessionStorage.removeItem('refreshToken');
                    });
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosJWT.interceptors.request.eject(requestIntercept);
            axiosJWT.interceptors.response.eject(responseIntercept);
        }
    })
    return axiosJWT;

}

export default useAxiosJWT;
