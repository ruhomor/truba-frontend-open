import './NewDevice.css'
import React from 'react'
export default function NewDevice(){
    return(
        <div className='newDevice'>
            <form className="newDeviceForm">
                <div className="newDeviceItem">
                    <label>Device Name</label>
                    <input type="text" placeholder='example'/>
                </div>
                <div className="newDeviceItem">
                    <label>Token</label>
                    <input type="text" placeholder='Token'/>
                </div>
                <div className="newDeviceItem">
                    <label>Type</label>
                    <input type="text" placeholder='type'/>
                </div>
                <div className="newDeviceItem">
                    <label>API</label>
                    <input type="text" placeholder='API'/>
                </div>
                <div className="newDeviceItem">
                    <label>Accessibility</label>
                    <input type="text" placeholder='admin'/>
                </div>
                <div className="newDeviceItem">
                    <label>Location</label>
                    <div className="newDeviceLocation">
                        <input type="radio" name='location' id='local' value='local'/>
                        <label>Local</label>
                        <input type="radio" name='location' id='net' value='net'/>
                        <label>NET</label>
                        <input type="radio" name='location' id='out' value='out'/>
                        <label>OUT</label>
                    </div>
                </div>
                <div className="newDeviceItem">
                    <label>Active</label>
                    <select className='newDeviceSelect' name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className="newDeviceButton">Create</button>
            </form>
        </div>
    )
}