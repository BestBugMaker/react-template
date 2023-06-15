import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ResultData } from "../interface/api";

const defaultConfig = {
    baseURL: "",
    timeout: 10000,
    withCredentials: true,
};

class AxiosRequest {
    service: AxiosInstance;
    public constructor(config: AxiosRequestConfig) {
        this.service = axios.create(config);

        // 添加请求拦截器
        this.service.interceptors.request.use(
            function (config) {
                // 在发送请求之前做些什么
                return config;
            },
            function (error) {
                // 对请求错误做些什么
                return Promise.reject(error);
            }
        );

        // 添加响应拦截器
        this.service.interceptors.response.use(
            function (response) {
                // 2xx 范围内的状态码都会触发该函数。
                // 对响应数据做点什么
                console.log(response.data);
                return response.data;
            },
            function (error) {
                // 超出 2xx 范围的状态码都会触发该函数。
                // 对响应错误做点什么
                return Promise.reject(error);
            }
        );
    }

    // 常规请求方法
    get<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.get(url, { params });
    }

    post<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.post(url, { params });
    }
}

export default new AxiosRequest(defaultConfig);
