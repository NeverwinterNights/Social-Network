import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "7c38f700-eae7-4224-81a9-9392ebf67fbb"
    }
})


export const userAPI = {
    getUsers(currentPage: number, pageSize: number, term: string = "", friend: null | boolean = null) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? "" : `&friend=${friend}`))  /*приклеиваем сюда baseURL и продолжение адерса*/
            .then(response => response.data)
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
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    loginOut() {
        return instance.delete(`auth/login`)
    },
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    },

}




