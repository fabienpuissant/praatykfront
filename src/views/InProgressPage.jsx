import { Grid, Button, TextField } from '@material-ui/core'
import React, {useState} from 'react'
import { ACCESS_TOKEN } from '../constants/token'
import { checkAdmin } from '../sdk/apiServices/AdminService'
import store from '../redux/store';
import { setCurrentUser } from "../redux/Auth/action-creators"


function InProgressPage({history}) {
    
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const onKeyPress = (e) => {
      if(e.which === 13) {
        handleLogin()
      }
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async () => {
        setLoading(true)
        checkAdmin(password).then(response => {
            const accessToken = response.accessToken;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            store.dispatch(setCurrentUser({user: "admin"}))
            history.push("/home")
            setLoading(false)

        }).catch(error => {
            setLoading(false)
        })
    }

    return (
        <Grid container>

            <Grid item xs={12} sm= {12} md={12} lg={12}  style={{ marginTop: "5%", marginBottom: "2%" }} align="center">
                <TextField
                    id="outlined-adornment-password"
                    type={'password'}
                    label="Password"
                    variant="outlined"
                    value={password}
                    onKeyDown={onKeyPress}
                    onChange={handleChangePassword}
                />
                </Grid>
            <Grid item xs={12} sm= {12} md={12} lg={12} align="center">
            
                <Button
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    onClick={handleLogin}
                    type="submit"
                    >
                    Log as Admin
                </Button>
            </Grid>
        </Grid>
    )
}


export default InProgressPage;
