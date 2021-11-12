import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo-black.png';
import './Navigation.css';

const Navigation = () => {

    const history = useHistory();
    const { user, logOut } = useAuth();

    // go to login page
    const goLogin = () => {
        history.replace('/login');
    }

    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'><img className="logo-img img-fluid" src={logo} alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active nav-text" to='/explore'>Explore</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active nav-text" to='/dashboard'>Dashboard</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <p className="nav-link active nav-text">{user?.displayName}</p>
                                </li>
                                <li className="nav-item">
                                    <button onClick={goLogin} className="btn btn-outline-success">Login</button>
                                </li>
                                <li className="nav-item">
                                    <button onClick={logOut} className="btn btn-outline-danger">Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;