import React, { useState } from 'react';
import Footer from '../../Sheared/Footer/Footer';
import Navigation from '../../Sheared/Navigation/Navigation';
import logo from '../../../images/login.jpg';
import { Alert, Button, TextField, CircularProgress } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, error, isLoading, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    // login with email & password
    const handleLogin = event => {
        loginUser(loginData.email, loginData.password, location, history);
        event.preventDefault();
    }

    // getting data
    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
    }

    // login with google
    const googleLogin = () => {
        signInWithGoogle(location, history);
    }

    return (
        <div>
            <Navigation></Navigation>
            <div>
                <div className="row m-0">
                    <div className="col-sm-12 col-md-6">
                        <img className="img-fluid" src={logo} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        {!isLoading && <form className="mt-5 pt-5" onSubmit={handleLogin}>
                            <TextField onBlur={handleOnBlur} required className="mb-3 w-50" type="email" name="email" label="Email" variant="standard" />
                            <br />
                            <TextField onBlur={handleOnBlur} required className="mb-3 w-50" type="password" name="password" label="Password" variant="standard" />
                            <br />
                            <Button className="mb-3" type="submit" variant="outlined">Login</Button>
                            <br />
                            <NavLink to="/signUp">Don't have any account? Sign Up!</NavLink>
                            <GoogleButton onClick={googleLogin} className="my-4" />
                        </form>}
                        {isLoading && <CircularProgress />}
                        {error && <Alert severity="error">{error}</Alert>}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;