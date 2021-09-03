import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "7c38f700-eae7-4224-81a9-9392ebf67fbb"
    }
})


export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)  /*приклеиваем сюда baseURL и продолжение адерса*/
            .then(response => response.data) /*уменьшаем получаемый респонс*/
    }
}



