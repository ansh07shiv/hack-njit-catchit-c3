import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LoginComponent from "../LoginComponent/LoginComponent";
import {Collapse} from "@mui/material";
import RegistrationComponent from "../RegistrationComponent/RegistrationComponent";
import HomeComponent from "../HomeComponent/HomeComponent";
import { useState } from 'react';
import axios from "axios";

export default function LoginRegistrationHomeComponent() {
    const [loginClickedVar, setLoginClickedVar] = React.useState(false);
    const [loginSuccess, setLoginSuccess] = React.useState(false);
    const loginClicked = (isClicked) => {
        console.log("Value of is Clicked: ", isClicked);
        setLoginClickedVar(isClicked);
    }

    const handleLoginSuccess = (email, password) => {
        setLoginSuccess(true);
        // axios.post("http://127.0.0.1:5000/login", {email, password}).then((response) => {
        //     console.log("Response: ", response);
        //         if(response.data == 'success') {
        //             console.log("Navigating to Home");
        //             setLoginSuccess(true);
        //         }
        //     }).catch((error) => {
        //         console.log("Error: ", error);
        // })
    }

    return (
        <Grid container component="main" sx={{height: '100vh'}}>
            <CssBaseline/>
            {!loginSuccess && (<>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1524631450938-fba41a4e3bff?auto=format&fit=crop&q=80&w=2833&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        {!loginClickedVar && <LoginComponent isLoginClicked={loginClicked} handleLogin={handleLoginSuccess} />}
                        {loginClickedVar && <RegistrationComponent isRegisterClicked={loginClicked} handleLogin={handleLoginSuccess}/> }
                    </Grid>
                </>
            )}

            { loginSuccess && (
                <HomeComponent />
            )}

        </Grid>
    );
}