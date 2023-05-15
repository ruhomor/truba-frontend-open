import React from 'react';
import  index from './index.css'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import {useHistory} from 'react-router-dom'
import { Component } from "react";
import { accountService } from '@/_services';
import FeaturedInfo from "@/Components/featuredInfo/FeaturedInfo";
import Sidebar from "@/Components/sidebar/Sidebar";
import Chart from "@/Components/charts/Chart";
import HomeDashBoards from "@/Components/pages/home/HomeDashBoards";
import DeviceManagement from "@/Components/pages/deviceManagement/DeviceManagement";
import MembersList from "@/Components/pages/members/MembersList";
import Monitoring from "@/Components/pages/monitoring/Monitoring";
import Analytics from "@/Components/pages/analytics/Analytics";
function Home() {
    const user = accountService.userValue;
    
    return (
    <div className='container'>
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomeDashBoards/>
                </Route>
                <Route exact path="/devicemanagement">
                    <DeviceManagement/>
                </Route>
                <Route exact path="/members">
                    <MembersList/>
                </Route>
                {/*<Route exact path="/user/:userId">*/}
                {/*    <User/>*/}
                {/*</Route>*/}
                {/*<Route exact path="/NewUser">*/}
                {/*    <NewUser/>*/}
                {/*</Route>*/}
                <Route exact path="/monitoring">
                    <Monitoring/>
                </Route>
                <Route exact path="/analytics">
                    <Analytics/>
                </Route>
            </Switch>
        </Router>

    </div>
    );
}
//
export { Home };