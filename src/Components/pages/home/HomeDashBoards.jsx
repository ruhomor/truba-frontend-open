import './HomeDashBoards.css'
import React from 'react'
import FeaturedInfo from "@/Components/featuredInfo/FeaturedInfo";
import Chart from "../../charts/Chart";
import WidgetSmall from "../../widgetsSmall/WidgetSmall"
export default function HomeDashBoards(){
    return<div className='home'>
        <FeaturedInfo/>
        <Chart/>
        <WidgetSmall/>
    </div>
}