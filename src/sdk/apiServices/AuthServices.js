import axios from 'axios';
import { serverUrl } from "../../constants/api"

export async function signIn(user) {
    const res = await axios.post(serverUrl + "auth/signin", user
    )
    return await res.data
}
export async function signup(data) {
    const res = await axios.post(serverUrl + "auth/signup", data)
    return await res.data
}
export async function signOut() {
    const res = await axios.post(serverUrl + "auth/signout")
    return await res.data
}