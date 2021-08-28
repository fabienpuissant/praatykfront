import { tokenValue } from '../../constants/token';

export async function checkAdmin(password) {
    return new Promise((resolve, reject) => {
        if(password === "5sfqfY"){
            resolve({
                accessToken: tokenValue
            })
        }
        else {
            reject("invalid credentials")
        }
        
    }) 
}