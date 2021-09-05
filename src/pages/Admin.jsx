import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { selectUser, logout } from '../features/userSlice';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Admin() {
    const {user} = useSelector(selectUser);
    const dispatch = useDispatch();
    toast.success(user.user.email);
    console.log(user);
    const params = useParams()
    return (
        <>
            <ToastContainer/>
            Admin {params.id}
            <button onClick={()=>{dispatch(logout())}} className="uk-button uk-button-danger">logout</button>
            <Link to="/home">Home</Link>
        </>
    )
}

export default Admin
