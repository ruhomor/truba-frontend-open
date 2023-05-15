import React from 'react';
import { Link } from 'react-router-dom';
import './DetailsStyles.css'
import { accountService } from '@/_services';

function Details({ match }) {
    const { path } = match;
    const user = accountService.userValue;

    return (
        <div className='profileDetailsContainer'>
            <div className="profileDetailsItems">
                <h1>My Profile</h1>
                <p>
                    <strong>Name: </strong> {user.title} {user.firstName} {user.lastName}<br />
                    <strong>Email: </strong> {user.email}
                </p>
                <p><Link to={`${path}/update`}>Update Profile</Link></p>
            </div>

        </div>
    );
}

export { Details };