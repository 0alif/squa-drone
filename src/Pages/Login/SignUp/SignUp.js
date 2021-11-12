import { Alert, Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Footer from '../../Sheared/Footer/Footer';
import Navigation from '../../Sheared/Navigation/Navigation';
import logo from '../../../images/register.jpg';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const [signUpData, setSignUpData] = useState({});
    const { error, isLoading, registerUser } = useAuth();

    const history = useHistory();

    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...signUpData };
        newData[field] = value;
        setSignUpData(newData);
    }

    const handleSignUp = event => {
        registerUser(signUpData.email, signUpData.password, signUpData.name, history)
        event.preventDefault();
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
                        {!isLoading && <form onSubmit={handleSignUp} className="mt-5 py-5">
                            <TextField onBlur={handleOnBlur} required className="mb-3 w-50" type="text" name="name" label="Name" variant="standard" />
                            <br />
                            <TextField onBlur={handleOnBlur} required className="mb-3 w-50" type="email" name="email" label="Email" variant="standard" />
                            <br />
                            <TextField onBlur={handleOnBlur} required className="mb-3 w-50" type="password" name="password" label="Password" variant="standard" />
                            <br />
                            <Button className="mb-3" type="submit" variant="outlined">Sign Up</Button>
                            <br />
                            <NavLink to="/login">Already have a account? Login!</NavLink>
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

export default SignUp;