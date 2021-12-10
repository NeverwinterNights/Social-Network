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
        return instance.post(`follow/${userID}`)
    },
    unfollow(userID: number) {
        return instance.delete(`follow/${userID}`)
    },
    getProfile(userID: string) {
        return profileAPI.getProfile(userID)
    }
}


export const profileAPI = {

    getProfile(userID: string) {
        return instance.get(`profile/` + userID)
    },
    getStatus(userID: string) {
        return instance.get(`profile/status/` + userID)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    }
}




export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    loginOut() {
        return instance.delete(`auth/login`)
    },
}



