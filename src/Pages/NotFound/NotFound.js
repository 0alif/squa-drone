import React from 'react';
import { useHistory } from 'react-router';
import pic from '../../images/404.png';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();

    // go to home page
    const handelClick = () => {
        history.replace('/')
    }

    return (
        <div className="not_found">
            <img className="img-fluid" src={pic} alt="" />
            <button onClick={handelClick} className="btn">Back To Home</button>
        </div>
    );
};

export default NotFound;