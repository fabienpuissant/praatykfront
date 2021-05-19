import React, { useState } from 'react'
import { signIn } from '../sdk/apiServices/AuthServices';
import { getUserByEmail } from '../sdk/apiServices/UserServices';
import jwt from "jsonwebtoken";
import setAuthorizationToken from "../constants/authorizationHeader";
import store from '../redux/store';
import { connect } from "react-redux"
import { setCurrentUser } from "../redux/Auth/action-creators"
import {ACCESS_TOKEN} from "../constants/token"

function Connexion({ history, dispatch }) {


    const [loading, setLoading] = useState(false);
    const [pseudo, setPseudo] = useState("")
    const [password, setPassword] = useState("")    

    const onKeyPress = (e) => {
      if(e.which === 13) {
        handleLogin()
      }
    }

    const handleChangePseudo = (e) => {
        setPseudo(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async () => {
        if (!loading) {
            setLoading(true);
            var obj = {
                "email": pseudo,
                "password": password
            }
            signIn(obj).then(response => {
                setLoading(false);
                const accessToken = response.accessToken;
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                store.dispatch(setCurrentUser(jwt.decode(accessToken)))
                setAuthorizationToken(accessToken)
                getUserByEmail(obj.email).then(resp => {
                    history.push("/home")
                })

            }).catch(error => {
                setLoading(false);
            });
        }
    }


    return (
        <>
        <input type="text" onChange={handleChangePseudo}  value={pseudo} onKeyPress={onKeyPress}/>
        <input type="password" onChange={handleChangePassword}  value={password} onKeyPress={onKeyPress}/>
        <button onClick={handleLogin}>Login</button>
        </> 
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    };
};

export default connect(mapDispatchToProps)(Connexion);
