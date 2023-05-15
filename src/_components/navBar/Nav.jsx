import React, { useState, useEffect } from 'react';
import { NavLink, Route, Link } from 'react-router-dom';
import NavStyles from './NavStyles.css'
import { Role } from '@/_helpers';
import { accountService } from '@/_services';

function Nav() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    // only show nav when logged in
    if (!user) return null;

    return (
        <div>
            <nav className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <Link to = '/' className = 'logo'>
                            <span className="">everyThing</span>
                        </Link>
                    </div>
                    <div className="topRight">
                        {/*<NavLink to="/profile" className="topRightItem">Profile</NavLink>*/}
                        {/*{user.role === Role.Admin &&*/}
                        {/*<NavLink to="/admin" className="topRightItem">Admin</NavLink>*/}
                        {/*}*/}
                        {/*<a onClick={accountService.logout} className="topRightItem">Logout</a>*/}
                    </div>
                    <div className="topRight">
                        <Route path="/admin" component={AdminNav} />
                    </div>
                </div>
            </nav>

        </div>
    );
}

function AdminNav({ match }) {
    const { path } = match;

    return (
        <nav >
            <div>
                {/*<NavLink to={`${path}/users`} className="usersLink">Users</NavLink>*/}
            </div>
        </nav>
    );
}

export { Nav };