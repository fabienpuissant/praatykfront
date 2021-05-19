import axios from "axios"
import { serverUrl } from "../../constants/api"

export const addUser = async (user) => {
    const res = await axios.post(serverUrl + "UserService/addUser", user)
    return res.data
}

export const checkUser = async (user) => {
    const res = await axios.post(serverUrl + "UserService/check", user)
    return res.data
}

export const getUserByEmail = async (email) => {
    const res = await axios.get(serverUrl + "UserService/getByEmail/" + email)
    return res.data
}

export const updatePassword = async (obj) => {
    const res = await axios.put(serverUrl + "UserService/updatePassword", obj)
    return res.data
}