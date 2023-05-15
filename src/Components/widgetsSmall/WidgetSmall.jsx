import './WidgetSmall.css'
import React from  'react'
// import VisibilityIcon from '@material-ui/icons/Visibility';
export default function WidgetSmall(){
    return(
        <div className='widgetSmall'>
            <span className="widgetSmallTitle">Last Devices Added</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <div className="widgetSmallDevice">
                        <span className="widgetSmallDeviceName">Object</span>
                        <span className="widgetSmallStatus">Connected</span>
                        <span className="widgetSmallDeviceType">Device1</span>
                        <span className="widgetSmallIDClass">12345</span>
                        <span className="widgetSmallDate">26.08.21</span>
                    </div>
                </li>
                <li className="widgetSmallListItem">
                    <div className="widgetSmallDevice">
                        <span className="widgetSmallDeviceName">Object</span>
                        <span className="widgetSmallStatus">Connected</span>
                        <span className="widgetSmallDeviceType">Device1</span>
                        <span className="widgetSmallIDClass">12345</span>
                        <span className="widgetSmallDate">26.08.21</span>
                    </div>
                </li>
                <li className="widgetSmallListItem">
                    <div className="widgetSmallDevice">
                        <span className="widgetSmallDeviceName">Object</span>
                        <span className="widgetSmallStatus">Connected</span>
                        <span className="widgetSmallDeviceType">Device1</span>
                        <span className="widgetSmallIDClass">12345</span>
                        <span className="widgetSmallDate">26.08.21</span>
                    </div>
                </li>
                <li className="widgetSmallListItem">
                    <div className="widgetSmallDevice">
                        <span className="widgetSmallDeviceName">Object</span>
                        <span className="widgetSmallStatus">Connected</span>
                        <span className="widgetSmallDeviceType">Device1</span>
                        <span className="widgetSmallIDClass">12345</span>
                        <span className="widgetSmallDate">26.08.21</span>
                    </div>
                </li>
                <li className="widgetSmallListItem">
                    <div className="widgetSmallDevice">
                        <span className="widgetSmallDeviceName">Object</span>
                        <span className="widgetSmallStatus">Connected</span>
                        <span className="widgetSmallDeviceType">Device1</span>
                        <span className="widgetSmallIDClass">12345</span>
                        <span className="widgetSmallDate">26.08.21</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}