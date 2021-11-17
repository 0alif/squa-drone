import { Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
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
            <h2 className="App">Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <label className="form-label">Email address</label>
                <input onBlur={handleOnBlur} className="w-50 form-control" type="email" required />
                <button className="mt-3 btn btn-primary" type="submit">Make Admin</button>
            </form>
            {success && <Alert severity="success">Admin Made Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;