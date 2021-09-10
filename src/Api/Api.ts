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
    },
    follow(userID: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)
    },
    unfollow(userID: number) {
        return instance.delete(`follow/${userID}`)
    },
    getProfile (userID: string) {
        return instance.get(`profile/` + userID)
    }
}


export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },


}



