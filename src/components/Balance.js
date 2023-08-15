import React from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { Table } from "react-bootstrap";
function Balance(){
    let {userObj}=useSelector(state=>state.user)
    return (
        <div className='display-2 text-center text-info'>
        Balance
        <p>{userObj.balance}</p>
        </div>
    )
}
export default Balance
