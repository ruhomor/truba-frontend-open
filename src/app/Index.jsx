import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Role } from '@/_helpers';
import { accountService } from '@/_services';
import { Nav, PrivateRoute, Alert } from '@/_components';
import { Home } from '@/home';
import { Profile } from '@/profile';
import { Admin } from '@/admin';
import { Account } from '@/account';
import DeviceManagement from "@/Components/pages/deviceManagement/DeviceManagement";
import Monitoring from "@/Components/pages/monitoring/Monitoring";
import Sidebar from "@/Components/sidebar/Sidebar";
import MembersList from "@/Components/pages/members/MembersList";
import Analytics from "@/Components/pages/analytics/Analytics";
import EditDevice from "@/Components/pages/editDevice/EditDevice";

function App() {
    const { pathname } = useLocation();  
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    return (
        <div className='container'>
            <Nav />
            <Alert />
            <Sidebar/>
            <Switch>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
                <PrivateRoute exact path ='/devicemanagement'  roles= {[Role.Admin]} component={DeviceManagement}/>
                <PrivateRoute exact path ='/analytics'  roles= {[Role.Admin]} component={Analytics}/>
                <PrivateRoute exact path ='/editdevice'  roles= {[Role.Admin]} component={EditDevice}/>
                <Route exact path ='/monitoring'  component={Monitoring}/>
                <Route path="/account" component={Account} />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    );
}

export { App }; 