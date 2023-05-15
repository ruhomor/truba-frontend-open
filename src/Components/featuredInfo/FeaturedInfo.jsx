import './FeaturedInfo.css'
import React from 'react'
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

export default function FeaturedInfo(){
    return<div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Item1</span>
            <div className="featuredInfoContainer">
                <span className="featuredInfo">2000</span>
                <span className="featuredInfoRate">
                    -13.4 <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Item2</span>
            <div className="featuredInfoContainer">
                <span className="featuredInfo">2000</span>
                <span className="featuredInfoRate">
                    13.4 <ArrowUpward className='featuredIcon'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div> <div className="featuredItem">
        <span className="featuredTitle">Item3</span>
        <div className="featuredInfoContainer">
            <span className="featuredInfo">2000</span>
            <span className="featuredInfoRate">
                    13.4 <ArrowUpward className='featuredIcon'/>
                </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
    </div>
    </div>
}