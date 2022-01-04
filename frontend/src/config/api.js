import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:4000/api/v1",
    headers: {
        accept: "application/json"
    }
})
export const getInstance = async () => {
    let token = await localStorage.getItem("token")
    console.log("token 121 ", token)
    if (token) {
        // let parsedToken = JSON.parse(token)
        instance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
    else {
        delete instance.defaults.headers.common["Authorization"]
    }
    return instance
}