import './MembersList.css'
import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {userRows} from '../../../_helpers/DummyData';
import {Link} from "react-router-dom";
import {useState} from "react";
export default function MembersList(){
    const [data, setData] = useState(userRows);


    const handleDelete = (id)=>{
        setData((data.filter(item=>item.id !== id)))
    }
    const columns = [
        { field: 'id',
            headerName: 'ID',
            width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: false,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: false,
        },
        {
            field: 'username',
            headerName: 'Username',
            type: 'string',
            width: 150,
            editable: false,
            renderCell:(params) =>{
                return(
                    <div className='userListUser'>
                        {params.row.username}
                    </div>
                )
            }
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
            width: 150,
        },
        {
            field: 'email',
            headerName: 'Email',
            type:'string',
            editable: false,
            width: 215,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell:(params => {
                return(
                    <>
                        <Link to={'/user/'+params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            })
        }
    ];

    return(
        <div className='membersList'>
            <span className="membersList">Members</span>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={15}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}