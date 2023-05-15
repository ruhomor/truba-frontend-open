import React, {useEffect, useState} from "react";
import "./Sidebar.css"
import {LineStyle, Timeline, TrendingUp, Home, Person, VerifiedUser, } from "@material-ui/icons";
import AppsIcon from '@material-ui/icons/Apps';
import MemoryIcon from '@material-ui/icons/Memory';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route, NavLink
} from "react-router-dom";
import {accountService} from "@/_services";
import {Role} from "@/_helpers";

export default function Sidebar(){
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    // only show nav when logged in
    if (!user) return null;

    return(
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to = '/' className='link'>
                            <li className="sidebarListItem active">
                                <Home className='sidebarIcon'/>
                                Home
                            </li>
                        </Link>
                        <Link to ='/analytics' className = 'link'>
                            <li className="sidebarListItem">
                                <AssessmentIcon className='sidebarIcon'/>
                                Analytics
                            </li>
                        </Link>
                        <Link to = '/monitoring' className='link'>
                            <li className="sidebarListItem">
                                <AppsIcon className='sidebarIcon'/>
                                Monitoring
                            </li>
                        </Link>
                        <Link to = '/devicemanagement' className = 'link'>
                            <li className="sidebarListItem">
                                <MemoryIcon className='sidebarIcon'/>
                                Device Management
                            </li>
                        </Link>
                        <Link to = '/profile' className='link'>
                            <li className="sidebarListItem">
                                <Person className='sidebarIcon'/>
                                Profile
                            </li>
                        </Link>
                        {user.role === Role.Admin &&
                        <Link to='/admin' className='link'>
                            <li className="sidebarListItem">
                                <VerifiedUser className='sidebarIcon'/>
                                Admin
                            </li>
                        </Link>
                        }
                        <Link onClick={accountService.logout} className='link'>
                            <li className="sidebarListItem">
                                <ExitToAppOutlinedIcon className='sidebarIcon'/>
                                Logout
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Parameters</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Home className='sidebarIcon'/>
                            Parameters
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}