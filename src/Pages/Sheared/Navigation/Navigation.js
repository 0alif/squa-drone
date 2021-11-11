import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Navigation = () => {

    const history = useHistory();

    // go to login page
    const goLogin = () => {
        history.replace('/login');
    }

    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to='/explore'>Explore</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to='/dashboard'>Dashboard</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button onClick={goLogin} className="btn btn-outline-success">Login</button>
                            <button className="btn btn-outline-danger">Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;