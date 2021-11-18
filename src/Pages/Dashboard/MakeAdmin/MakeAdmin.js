import { Alert } from '@mui/material';
import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://quiet-brushlands-60225.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <form className="make-admin" onSubmit={handleAdminSubmit}>
                <h2>Make Admin</h2>
                <input onBlur={handleOnBlur} className="form-control" type="email" placeholder="Email" required />
                <div className="form-text">You can make another user to admin</div>
                <button className="btn admin-btn" type="submit">Make Admin</button>
            </form>
            {success && <Alert severity="success">Admin Made Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;