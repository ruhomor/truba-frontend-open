import './DeviceManagement.css'
import {Link} from "react-router-dom";
import * as React from 'react';
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {deviceRows} from '../../../_helpers/DummyData'
import NewDevice from '../../newDevice/NewDevice'

export default function DeviceManagement(){
    const[device, setDevice] = useState(deviceRows)
    const handleDeleteDevice = (id)=>{
        setDevice((device.filter(item=>item.id !== id)))
    }
    const columns = [
        { field: 'id',
            headerName: 'ID',
            width: 90 },
        {
            field: 'deviceName',
            headerName: 'Device name',
            width: 160,
            editable: false,
        },
        {
            field: 'deviceType',
            headerName: 'Device Type',
            width: 155,
            editable: false,
        },
        {
            field: 'container',
            headerName: 'Container',
            type: 'string',
            width: 150,
            editable: false,
        },
        {
            field: 'status',
            headerName: 'Status',
            type:'string',
            editable: false,
            width: 150,
        },
        {
            field: 'accessibility',
            headerName: 'Accessibility',
            type:'string',
            editable: false,
            width: 155,
        },
        {
            field: 'creationDate',
            headerName: 'Created',
            type:'string',
            editable: false,
            width: 155,
        },
        {
            field: 'expirationDate',
            headerName: 'Expires',
            type:'string',
            editable: false,
            width: 155,
        },
        {
            field: 'warnings',
            headerName: 'Warnings',
            type:'string',
            editable: false,
            width: 160,
            renderCell:(params => {
                return(
                    <div className='warningHint' data-title="sdfsdsdf">
                        <img className='warningIcon' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTUwNi4xNzUsMzY1LjU3NmMtNC4wOTUtMTAuMjU4LTE1LjcyOS0xNS4yNTUtMjUuOTg3LTExLjE2Yy0xMC4yNTgsNC4wOTUtMTUuMjU1LDE1LjcyOS0xMS4xNiwyNS45ODcgICAgIGM1LjIwNiwxMy4wNDMsMy40OTksMjcuOTM1LTQuNTY3LDM5LjgzOWMtOC4wNywxMS45MS0yMC45OTEsMTguNzQxLTM1LjQ0OSwxOC43NDFIODMuMDY4Yy0xNS43NzEsMC0yOS43NzYtOC4yMjktMzcuNDY1LTIyLjAxNSAgICAgYy03LjcwMS0xMy44MDktNy4zMzktMzAuMDgyLDAuOTY4LTQzLjUzM0wyMTkuNTQzLDkzLjM4MmM3Ljg3Ni0xMi43NTIsMjEuNTE5LTIwLjM2NSwzNi40OTctMjAuMzY1ICAgICBjMTQuOTc4LDAsMjguNjIsNy42MTMsMzYuNDk3LDIwLjM2NWwxMjcuOTI3LDIwNy4xMjRjNS44MDQsOS4zOTcsMTguMTI4LDEyLjMxMiwyNy41MjMsNi41MDUgICAgIGM5LjM5Ni01LjgwMywxMi4zMS0xOC4xMjYsNi41MDUtMjcuNTIzTDMyNi41NjQsNzIuMzY0Yy0xNS4yMTYtMjQuNjM2LTQxLjU4LTM5LjM0NC03MC41MjUtMzkuMzQ0cy01NS4zMDksMTQuNzA5LTcwLjUyNSwzOS4zNDQgICAgIEwxMi41NDIsMzUyLjQxOGMtMTYuMDM2LDI1Ljk2Ni0xNi43MzQsNTcuMzgtMS44NjksODQuMDMzYzE0Ljg1MywyNi42Myw0MS45MTYsNDIuNTI4LDcyLjM5NSw0Mi41MjhoMzQ1Ljk0NCAgICAgYzI3LjkzOCwwLDUyLjkyNy0xMy4yMzMsNjguNTYtMzYuMzAzQzUxMy4wODgsNDE5Ljc3OCw1MTYuMzAzLDM5MC45NTUsNTA2LjE3NSwzNjUuNTc2eiIgZmlsbD0iI2QzMzMzMyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjU2LjA0OSwzOTkuOTg3YzExLjA0NSwwLDE5Ljk5OC04Ljk1MywxOS45OTgtMTkuOTk4YzAtMTEuMDQ1LTguOTUzLTE5Ljk5OC0xOS45OTgtMTkuOTk4aC0wLjAxICAgICBjLTExLjA0NSwwLTE5Ljk5Myw4Ljk1My0xOS45OTMsMTkuOTk4QzIzNi4wNDYsMzkxLjAzNCwyNDUuMDA0LDM5OS45ODcsMjU2LjA0OSwzOTkuOTg3eiIgZmlsbD0iI2QzMzMzMyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjc2LjAzOCwzMDkuOTk1VjE2My4wMDhjMC0xMS4wNDUtOC45NTMtMTkuOTk4LTE5Ljk5OC0xOS45OThjLTExLjA0NSwwLTE5Ljk5OCw4Ljk1My0xOS45OTgsMTkuOTk4djE0Ni45ODcgICAgIGMwLDExLjA0NSw4Ljk1MywxOS45OTgsMTkuOTk4LDE5Ljk5OEMyNjcuMDg1LDMyOS45OTMsMjc2LjAzOCwzMjEuMDQsMjc2LjAzOCwzMDkuOTk1eiIgZmlsbD0iI2QzMzMzMyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />
                    </div>
                )
            })
        },
        {
            field: 'action',
            headerName : 'Actions',
            width: 150,
            renderCell:(params => {
                return(
                    <>
                        <Link to={'/editdevice'}>
                            <button className="deviceListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='deviceListDelete' onClick={()=>handleDeleteDevice(params.row.id)}/>
                    </>
                )
            })
        },
    ]

    return(<div className ='containerDevice'>
            <span className="deviceListTitle">Device Management</span>
            <div className='deviceList'>


                <DataGrid
                    rows={device}
                    columns={columns}
                    pageSize={15}
                    rowsPerPageOptions={[20]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
            <div className='deviceListTitle'>
                Add Device
            </div>
            <NewDevice/>
        </div>

    )}